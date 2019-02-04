const http = require("./http");
const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

const readFromFile = promisify(readFile);
const writeToFile = promisify(writeFile);

function toDoList(id, task, group, complete) {
  this.id = id;
  this.task = task;
  this.group = group;
  this.complete = complete || false;
}

let getListFromServer = async () => {
  const response = await http.get("http://api.quuu.linuxpl.eu/todo/rkczydwn");
  return response.data; //.list;
};

let saveListToServer = async list =>
  await http.post("http://api.quuu.linuxpl.eu/todo/rkczydwn", list);

let upload = async () => {
  const data = await getListFromServer();
  await saveListToServer(data);
};

let download = async () => {
  const data = await getListFromServer();
  await saveListToFile(JSON.stringify(data));
};

let clear = async () => {
  let list = [];
  await saveListToFile(`{"list":[]}`);
};

let getListFromFile = async () =>
  await readFromFile("./toDoList.json", "utf-8");

let saveListToFile = async list => await writeToFile("./toDoList.json", list);

let getList = async () =>
  await getListFromFile()
    .then(data => JSON.parse(data))
    // .then(data => data.list)
    .catch(err => console.log(err));

let saveList = async list => await saveListToFile(JSON.stringify(list));

let addItemToList = async newItem => {
  let data = await getList();
  if (data.list.some(item => item.id === newItem.id))
    console.log("Element with given Id already exists.");
  else {
    data.list.push(newItem);
    return await saveList(data);
  }
};

let deleteItemFromList = async id => {
  let data = await getList();
  data.list = data.list.filter(item => item.id != id);
  return await saveList(data);
};

let completeListItem = async id => {
  let data = await getList();
  data.list = data.list.map(item => {
    if (item.id === id) {
      item.complete = true;
    }
    return item;
  });
  return await saveList(data);
};

let displayList = async (complete, group) => {
  let data = await getList();
  if (data.list.length === 0) return console.log("List is empty.");
  if (complete != "")
    data.list = data.list.filter(
      item =>
        item.complete != undefined && item.complete.toString() === complete
    );

  if (group != "")
    data.list = data.list.filter(
      item => item.group != undefined && item.group === group
    );

  data.list.sort((a, b) => a.id - b.id).forEach(item => console.log(item));
};

module.exports = {
  toDoList,
  getList,
  addItemToList,
  deleteItemFromList,
  completeListItem,
  displayList,
  upload,
  download,
  clear
};
