var Command = require('ronin').Command;

var Remove = Command.extend({
    desc: 'Removes a task',

    options: {
        force: 'boolean'
    },

    run: function (force, name) {
        if (!force) {
            throw new Error('--force should be set when removing a task!');
        }

        // it's ok, remove the task with given name
    }
});

module.exports = Remove;
