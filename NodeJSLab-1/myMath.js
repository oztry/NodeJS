module.exports = {
    add: function(...numbers) {
        let result = 0;
        numbers.forEach(element => {
            result += element;
        });
        return result;
    },

    substract: function(...numbers) {
        let result = numbers[0];
        for(let i = 1; i < numbers.length; i++)
        {
            result -= numbers[i]
        }
        return result;
    },

    pi: 3.14 
}