var Countdown = function(time, format, object, callback) {
	var self = this;

	self.time = time;
	self.secs = time;
	self.running = false;

	var interval;

	var count = function() {
		self.secs--;
		if(self.secs <= 0) {
			self.stop();
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
	};

	self.start = function() {
		interval = setInterval(count, 1000);
		self.running = true;
	};

	self.pause = function() {
		clearInterval(interval);
		self.running = false;
	};

	self.stop = function() {
		self.pause();
		self.secs = time;
	};
};
