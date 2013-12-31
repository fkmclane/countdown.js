countdown.js
============
A small (less than .5 KB) javascript library for creating a customizable timer on the page. It includes two versions, one for counting down a specified number of seconds and one for counting down to a date.

The source files are located in the `src` folder and the minified javascript files are located in the `min` folder.

API
---
###Countdown (countdown.js)###
| Member                                    | Description                       |
| ----------------------------------------- | --------------------------------- |
| Countdown(time, format, object, callback) | Constructs a new Countdown object |
| Countdown.start()                         | Starts (or resumes) the countdown |
| Countdown.pause()                         | Pauses the countdown              |
| Countdown.stop()                          | Stops and resets the countdown    |
| Countdown.secs                            | The number of seconds left        |

###CountdownDate (countdown.date.js)###
| Member                                          | Description                                                                                 |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------- |
| CountdownDate(target, format, object, callback) | Constructs a new CountdownDate object relative to the current time and begins the countdown |
| CountdownDate.secs                              | The number of seconds left                                                                  |

Usage
-----
###Countdown (countdown.js)###
```
var countdown = Countdown(<seconds>, <format>, <object>, [callback]);
```

Example (assumes there is an HTML object with id="bomb"):
```
var countdown = Countdown(100, 'BOMB!!! You have %s seconds to survive', document.getElementById('bomb'), function() { alert('BOOM'); });
countdown.start();
```

###CountdownDate (countdown.date.js)###
```
var countdown = CountdownDate(<date>, <format>, <object>, [callback]);
``

Example (assumes there is an HTML object with id="y2k38"):
```
var countdown = CountdownDate(new Date('03:14:07 Tuesday, 19 January 2038 UTC'), 'You have %y years, %d days, %h hours, %m minutes, and %s seconds before <a href="http://en.wikipedia.org/wiki/Year_2038_problem">Y2K38</a>.', document.getElementById('y2k38'));
```

Disclaimer
----------
This library isn't particularly fancy and should not be relied on for an accuracy of more than one second.
