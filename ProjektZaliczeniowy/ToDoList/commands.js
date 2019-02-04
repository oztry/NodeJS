const {
  toDoList,
  getList,
  addItemToList,
  deleteItemFromList,
  completeListItem,
  displayList,
  upload,
  download,
  clear
} = require("./listService");

const displayCommand = {
  command: "display",
  describe: "Display list",
  handler: async args => {
    try {
      let complete = args.complete !== undefined ? args.complete : "";
      let group = args.group !== undefined ? args.group : "";
      await displayList(complete, group);
    } catch (error) {
      console.log(error.message);
    }
  }
};

const addCommand = {
  command: "add",
  describe: "Add item to list",
  handler: async args => {
    try {
      const list = await addItemToList(
        new toDoList(args.id, args.task, args.group)
      );
    } catch (error) {
      console.log(error.message);
    }
  }
};

const deleteCommand = {
  command: "delete",
  describe: "Delete item from list",
  handler: async args => {
    try {
      const list = await deleteItemFromList(args.id);
    } catch (error) {
      console.log(error.message);
    }
  }
};

const completeCommand = {
  command: "complete",
  describe: "Complete item in list",
  handler: async args => {
    try {
      const list = await completeListItem(args.id);
    } catch (error) {
      console.log(error.message);
    }
  }
};

const uploadCommand = {
  command: "upload",
  describe: "Upload data to server",
  handler: async args => {
    try {
      await upload();
    } catch (error) {
      console.log(error.message);
    }
  }
};

const downloadCommand = {
  command: "download",
  describe: "Download data from server to file",
  handler: async args => {
    try {
      await download();
    } catch (error) {
      console.log(error.message);
    }
  }
};

const clearCommand = {
  command: "clear",
  describe: "Clears all items from list",
  handler: async args => {
    try {
      await clear();
    } catch (error) {
      console.log(error.message);
    }
  }
};

module.exports = [
  displayCommand,
  addCommand,
  deleteCommand,
  completeCommand,
  uploadCommand,
  downloadCommand,
  clearCommand
];
