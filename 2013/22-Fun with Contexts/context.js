foo = {
	bar: function() {
		console.log(this);
	}
}

function baz() {};

foo.bar();

foo.bar.call(foo, 1, 2, 3);