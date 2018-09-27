function git(){}

git.prototype = {
	init: function(){
		this.a();
	},
	a: function(){
		console.log(123)
	}
}

var obj = new git();
obj.init();