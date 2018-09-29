function git(){}

git.prototype = {
	init: function(){
		this.a();
	},
	a: function(){
		console.log(123)
	},
	b: function(){
		console.log(456)
	},
	c: function(){
		console.log(78900)
	},
	d: function(){
		console.log(112222221)
	},
	e: function(){
		console.log(999995552)
	},
	aaa: function(){
		console.log(12312123123)
	}
}

var obj = new git();
obj.init();