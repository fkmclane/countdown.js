window['CountdownDate'] = function(target, format, object, callback) {
	var self = this;

	var update = function() {
		if(self.secs < 0)
			self.secs = 0;

		var last = -1;
		var str = format;

		var calculate = function(replace, secs) {
			if(str.indexOf('%' + replace) != -1)
				str = str.replace('%' + replace, Math.floor((last > 0 ? self.secs % last : self.secs) / (last = secs)));
		};

		calculate('y', 31556952);
		calculate('w', 604800);
		calculate('d', 86400);
		calculate('h', 3600);
		calculate('m', 60);
		calculate('s', 1);
		calculate('t', 0.1);

		object.innerHTML = str;
	};

	var count = function() {
		self.secs = (target - new Date()) / 1000;

		update();

		if(self.secs == 0) {
			typeof callback == 'function' && callback();
			return;
		}

		setTimeout(count, 50);
	};

	count();
};
