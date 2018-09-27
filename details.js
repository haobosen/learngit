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
	}
}

var obj = new git();
obj.init();