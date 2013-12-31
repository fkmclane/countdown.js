var CountdownDate = function(target, format, object, callback) {
	var self = this; 

	var date = new Date(); 
	self.secs = (target.getTime() - date.getTime()) / 1000; 

	var interval = setInterval(function() { 
		self.secs--; 
		if(self.secs <= 0) { 
			clearInterval(interval); 
			typeof callback == 'function' && callback(); 
		} 
		else { 
			var last = -1;
			var str = format;

			var calculate = function(replace, secs) {
				if(str.indexOf('%' + replace) != -1)
					str = str.replace('%' + replace, Math.floor((last > 0 ? self.secs % last : self.secs) / (last = secs)));
			}

			calculate('y', 31556952);
			calculate('w', 604800);
			calculate('d', 86400);
			calculate('h', 3600);
			calculate('m', 60);
			calculate('s', 1);

			object.innerHTML = str;
		} 
	}, 1000);
};
