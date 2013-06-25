# if( __js__ && __testing__ ) { __level__++; }

<img src="images/smiley_confused.png" alt="JavaScript? Testing?" />

---

## __Who__ Am I?

### David Luecke

<i class="icon-twitter-bird large"></i>
[@daffl](https://twitter.com/daffl)

<i class="icon-github large"></i>
[github.com/daffl](https://github.com/daffl)

<i class="icon-picture large"></i>
[https://github.com/daffl/jqueryto](http://github.com/daffl/jqueryto)

![Bitovi Logo](images/bitovi_logo_black.png)

---

## __Open Source__?

<a href="http://canjs.us"><img src="images/canjs_logo.png" alt="CanJS Logo" /></a><br />
<a href="http://jquerypp.com"><img src="images/jqueryplusplus_logo.png" alt="jQuery++ Logo" /></a>

---

## Testing, __What's__ Out There?

[DailyJS survey](http://dailyjs.com/2012/12/24/javascript-survey-results/) from December 2012:

<div id="jasmine" class="framework-stat" title="Jasmine">
	45% <a href="http://pivotal.github.com/jasmine/" target="_blank">
		<img src="images/jasmine_logo.png" alt="Jasmine Logo" />
	</a>
</div>

<div id="qunit" class="framework-stat" title="QUnit">
	31% <a href="http://qunitjs.com" target="_blank">
		<img src="images/qunit_logo.png" alt="QUnit Logo" />
	</a>
</div>

<div id="mocha" class="framework-stat" title="Mocha">
	41% <a href="http://visionmedia.github.com/mocha/" target="_blank">
		<img src="images/mocha_logo.png" alt="Mocha Logo" />
	</a>
</div>

---

## But __...__

### 51% of respondents said they don’t write tests

<img src="images/smiley_unhappy.png" alt="JavaScript testing smiley is not happy" />

---

## Getting started __is easy__

Set up a page:

	!html
	<!DOCTYPE html>
	<html>
	<head>
	  <meta charset="utf-8">
	  <title>My QUnit Test</title>
	  <link rel="stylesheet" href="/resources/qunit.css">
	</head>
	<body>
	  <div id="qunit"></div>
	  <div id="qunit-fixture"></div>
	  <script src="/resources/qunit.js"></script>
	  <script src="/resources/underscore.js"></script>
	  <script src="tests.js"></script>
	</body>
	</html>

---

## Your Own __Underscore Test__

And in __tests.js__:

	!javascript
	module("My Underscore Test");

	test("values", function() {
    	equal(_.values({one: 1, two: 2}).join(', '), '1, 2',
    		'can extract the values from an object');
		equal(_.values({one: 1, two: 2, length: 3}).join(', '),
			'1, 2, 3', '... even when one of them is "length"');
	});

---

## Can We Do __Better__?

<img src="images/smiley_thinking.png" alt="JavaScript testing smiley is thinking" style="float: right; margin-top: 3em; margin-right: 2em;" />

- Build and use tools that make testing easier
	- [GruntJS](http://gruntjs.com/)
	- [TravisCI](https://travis-ci.org) [![Build Status](https://travis-ci.org/bitovi/canjs.png?branch=master)](https://travis-ci.org/bitovi/canjs)
	- [BrowserStack](http://www.browserstack.com/)
- Simplify workflows
	- [Yeoman](http://yeoman.io/)
- Talk about it!
- Automate as much as possible

---

## A __Holy Grail__?

[Adam Hawkins](https://github.com/twinturbo) at [RejectJS 2012](https://speakerdeck.com/twinturbo/javascript-testing-the-holy-grail) ([watch](http://www.youtube.com/watch?v=YdFQ29oK50M))

- Browser independent
- All tests written in JavaScript
- Unit and functional testing
- Test against a single browser in development
- Test against all target browsers in CI
- Runs from the CLI

---

## Not __Again__!

<div style="margin-top: 1em;"><img src="images/monty_python.jpg" id="holygrail" alt="The Holy Grail!" /></div>

---

# Test __Reporting__

<i class="icon-edit-alt large"></i>

---

## __Starting__ Tests

__Open the test page URL in the target browser(s)__

Automate with [Launchpad](https://github.com/ekryski/launchpad):

- NodeJS module for starting browsers
- Common browser launching API
- Dynamic local browser discovery
- Launch [BrowserStack](http://www.browserstack.com/start) workers
- [BrowserStack API](http://www.browserstack.com/automated-browser-testing-api) compatible server
- [Remote Preview](https://github.com/viljamis/Remote-Preview)

---

## [Testee](daffl.github.com/testee.js) - A __test reporter__

__Automated cross-browser test reporter for QUnit, Jasmine and Mocha__

<img src="images/testee_logo.png" alt="Testee Logo" style="float: right; margin-top: 4em;" />

Some neat features:

- Runs on all browsers
- Many output formats
- Easy CI integration
- BrowserStack support
- Code coverage
- GruntJS task

---

## __Get started__ with Testee

Install:

	npm install -g testee

Go to your project folder:

	cd underscore

Point to your test page and run with PhantomJS:

	testee test/index.html

Point to your test page and run with local Firefox:

	testee test/index.html --browser firefox

---

## __More__ Testing!

Output XML test results for CI:

	testee test/index.html --browser safari --reporter XUnit > testresults.xml

Run tests on Chrome Canary and output code coverage statistics:

	testee test/index.html --browser canary --coverage

Test with IE 9.0 on BrowserStack:

	testee test/index.html --browser ie:9.0@win --launch browserstack

---

## Configuration File

Set up [Remote Preview](https://github.com/viljamis/Remote-Preview) to open tests on other devices:

	!javascript
	{
		"tunnel": {
			"type": "local",
			"hostname": "airblubber"
		},
		"launch": "remotePreview",
		"browser": {
			"file": "remote-preview/url.txt"
		}
	}

And run like:

	testee --config testee.json

---

## Are We __There Yet__?

- *Browser independent* <i class="icon-ok"></i>
- *All tests written in JavaScript* <i class="icon-ok"></i>
- Unit and functional testing
- *Test against a single browser in development* <i class="icon-ok"></i>
- *Test against all target browsers in CI* <i class="icon-ok"></i>
- *Runs from the CLI* <i class="icon-ok"></i>

---

# __Functional__ Testing

<i class="icon-cog-alt large"></i>

---

## __What__ Is It?

__Automated tests performed from a user perspective__

- Emulate user input
- Examine the result
- Black box testing

__Used for__

- Testing component interaction
- Verifying UI heavy widgets
- Application smoke tests

---

## __FuncUnit__

Functional testing library built on top of __jQuery__ and __QUnit__:

- Use jQuery syntax to emulate user input
- Write QUnit style tests

__Testing a [TodoMVC](http://todomvc.com) app__

	!javascript
	test('TodoMVC app', function() {
		S('#new-todo').click().type('Do some nerdy stuff\r').wait(500);
		S('#todo-list li').size(1, 'Got one Todo');
		S('#todo-list li:first label')
			.html('Do some nerdy stuff', 'Todo has correct text');
		S('#todo-count').html(/<strong>1<\/strong>(.*)item(.*)left/,
			'Todo count text is correct');
	});

---

## Are We __There Yet__?

- *Browser independent* <i class="icon-ok"></i>
- *All tests written in JavaScript* <i class="icon-ok"></i>
- *Unit and functional testing* <i class="icon-ok"></i>
- *Test against a single browser in development* <i class="icon-ok"></i>
- *Test against all target browsers in CI* <i class="icon-ok"></i>
- *Runs from the CLI* <i class="icon-ok"></i>

---

## Keep it on your __Radar__

<i class="icon-signal large"></i>
