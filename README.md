countdown.js
============
countdown.js is a small (less than .6 KB) javascript library for creating a customizable timer on the page. It includes two versions, one for counting down a specified number of seconds and one for counting down to a date.

The source files are located in the `src` folder and the minified javascript files are located in the `min` folder.

API
---
###Countdown (countdown.js)###
| Member                                    | Description                        |
| ----------------------------------------- | ---------------------------------- |
| Countdown(time, format, object, callback) | Constructs a new Countdown object  |
| Countdown.start()                         | Starts (or resumes) the countdown  |
| Countdown.pause()                         | Pauses the countdown               |
| Countdown.stop()                          | Stops and resets the countdown     |
| Countdown.time                            | The number of seconds to countdown |
| Countdown.secs                            | The number of seconds left         |
| Countdown.running                         | Whether the timer is running       |

###CountdownDate (countdown.date.js)###
| Member                                          | Description                                                                                 |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------- |
| CountdownDate(target, format, object, callback) | Constructs a new CountdownDate object relative to the current time and begins the countdown |
| CountdownDate.secs                              | The number of seconds left                                                                  |

Usage
-----
###Format###
The format is the string that is displayed in object and updated each second. Specifiers are replaced with their values and the values are determined based on what specifiers are there.  For example, if there is no day specifier but there is an hour specifier, the hours would include multiple days. However, if there is a day specifier and an hour specifier, then the hours would always be less than one day and the days would show multiple days.

####Specifier####
| Specifier | Replacement |
| --------- | ----------- |
| %y        | Years       |
| %w        | Weeks       |
| %d        | Days        |
| %h        | Hours       |
| %m        | Minutes     |
| %s        | Seconds     |
| %t        | Deciseconds |

###Countdown (countdown.js)###
```javascript
var countdown = new Countdown(<seconds>, <format>, <object>, [callback]);
```

Example (assumes there is an HTML object with id="bomb"):
```javascript
var countdown = new Countdown(100.0, 'BOMB!!! %s.%t', document.getElementById('bomb'), function() { alert('BOOM'); });
countdown.start();
```

###CountdownDate (countdown.date.js)###
```javascript
var countdown = new CountdownDate(<date>, <format>, <object>, [callback]);
```

Example (assumes there is an HTML object with id="y2k38"):
```javascript
var countdown = new CountdownDate(new Date('03:14:07 Tuesday, 19 January 2038 UTC'), 'You have %y years, %d days, %h hours, %m minutes, and %s seconds before <a href="http://en.wikipedia.org/wiki/Year_2038_problem">Y2K38</a>.', document.getElementById('y2k38'));
```
