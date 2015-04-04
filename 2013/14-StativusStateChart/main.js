var state = Stativus.createStatechart();

state.addState("one", {
  enterState: function(){
    console.log('I\m entering state one');
  },
  exitState: function(){
    console.log('I\m existing state one');
  },
  fireEvent: function(){
    this.goToState('two');
  },
  userClicked: function(data) {
	  console.log("This was the data that was passed in", data);
  },
  subTime: function() {
	  this.goToState('subOne');
  },
  servicesUpdated: function() {
	  console.log('hot damn!');
  },
  states: [{
	  name: 'subOne',
	  enterState: function() {
		  console.log('Ive now entered substate one');
	  },
	  exitState: function() {
		  console.log("I'm now leaving substate one");
	  },
	  subEvent: function() {
		  console.log("Yea, I'm responding from the sub state");
	  },
	  subEvent1: function() {
		  console.log("Yea, I'm responding from the sub state1");
	  },
	  goToSister: function() {
		  this.goToState('subTwo');
	  },
	  servicesUpdated: function() {
		  console.log('yawn');
	  }
  },{
	  name: 'subTwo',
	  enterState: function() {
		  console.log('Ive now entered substate one');
	  },
	  exitState: function() {
		  console.log("I'm now leaving substate one");
	  },
	  subEvent: function() {
		  console.log("Yea, I'm responding from the sub two state");
	  },
	  servicesUpdated: function() {
		  console.log('maybe in a bit');
	  }
  }]
});

state.addState("two", {
  enterState: function(){
    console.log('I\m entering state two');
  },
  exitState: function(){
    console.log('I\m existing state two');
  },
  fireEvent: function(){
    this.goToState('one');
  }
});

state.initStates('one');