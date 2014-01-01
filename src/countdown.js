var Countdown = function(time, format, object, callback) {
	var self = this;

	self.time = time;
	self.secs = time;
	self.running = false;

	var interval;
	var target;

	var update = function() {
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
		calculate('t', 0.1);

		object.innerHTML = str;
	};

	var count = function() {
		self.secs = (target - new Date()) / 1000;
		if(self.secs < 0) {
			self.stop();
			typeof callback == 'function' && callback();
		}
		else {
			update();
		}
	};

	self.start = function() {
		target = +new Date() + self.secs * 1000;
		count();
		interval = setInterval(count, 50);
		self.running = true;
	};

	self.pause = function() {
		clearInterval(interval);
		self.running = false;
	};

	self.stop = function() {
		self.pause();
		self.secs = time;
		update();
	};

	update();
};
