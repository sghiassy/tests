var BaseFsm = machina.Fsm.extend({
    initialize: function() {
        // do stuff here if you want to perform more setup work
        // this executes prior to any state transitions or handler invocations
    },
	
	eventListeners: {
		serviceUpdated: [function(data) {console.log(data); }]
	},
	
    states: {
        uninitialized: {
            start: function() {
                this.transition("first");
            }
        },
		
        first: {
			_onEnter: function() {
				console.log('Im entering the first start');
			},
            usedClicked : function() {
                // do stuff
				console.log('yup');
            },
			_onExit: function() {
				console.log('Im existing the first state');
			}
        },
		
		second: {
			usedClicked: function() {
				console.log('you dont say');
			}
		},
    }
});
// getting an instance from our extended constructor function above
var baseFsm = new BaseFsm();

var ChildFsm = BaseFsm.extend({
    states: {
        uninitialized: {
            skipToTheEnd: function() {
                this.transition("second");
            }
        },
        first: {
            handlerA : function() {
                this.transition("second");
            },
            handlerB : function() {
                // do some work...
            }
        },
        second: {
            handlerC : function() {
                // do stuff
            }
        }
    }
});

// This instance will have a blending of BaseFsm and ChildFsm's states/handlers
var childFsm = new ChildFsm();
