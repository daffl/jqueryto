# JavaScript? __Testing?__

<img src="images/smiley_confused.png" alt="JavaScript? Testing?" />

---

## __Who__ Am I?

### David Luecke

<i class="icon-twitter-bird large"></i>
[@daffl](https://twitter.com/daffl)

<i class="icon-github large"></i>
[github.com/daffl](https://github.com/daffl)

<i class="icon-picture large"></i>
[http://daffl.github.com/jqueryto](http://daffl.github.com/jqueryto)

![Bitovi Logo](images/bitovi_logo_black.png)

---

## __Open Source__?

<img src="images/canjs_logo.png" alt="CanJS Logo" />
<img src="images/jqueryplusplus_logo.png" alt="jQuery++ Logo" style="margin-bottom: 1em;" />

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

<!--
	More important as applications get bigger
	JavaScript testing smiley is not happy (yet)
	We as a community should work on making this easier
-->
---

## But __...__

### 51% of respondents said they don’t write tests

<img src="images/smiley_unhappy.png" alt="JavaScript testing smiley is not happy" />

---

## Can We Do __Better__?

<img src="images/smiley_thinking.png" alt="JavaScript testing smiley is thinking" style="float: right; margin-top: 3em; margin-right: 2em;" />

- Build and use tools that make testing easier
	- [GruntJS](http://gruntjs.com/)
	- [TravisCI](https://travis-ci.org)
- Simplify workflows
	- [Yeoman](http://yeoman.io/)
- Talk about it!
- Automate as much as possible

<!--
	If there is no solution to automate yet, because developers are inherently lazy there are two
	options: Still do it manually or develop a solution.
	Ideally we want to make testing as easy as what jQuery did with cross-browser DOM manipulation
-->

---

## A __Holy Grail__?

[Adam Hawkins]() at [RejectJS 2012](https://speakerdeck.com/twinturbo/javascript-testing-the-holy-grail) ([watch](http://www.youtube.com/watch?v=YdFQ29oK50M))

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

## So __how__ do we solve this?

### There will always be some holy grail!

<i class="icon-trophy" style="float: right; font-size: 250px; margin-top: 100px;"></i>

- Break things down into smaller pieces
- Try and find the best possible solution
- Build something on top of it

<smal>Also: There is no holy grail</small>

<!--
	In the bigger picture: Look at how things have evolved in recent time.
	jQuery -> Structuring (MVC) -> Live-binding MVC
-->

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

## __Testee__ - A test reporter

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

Run remote tests on Chrome Canary and output code coverage statistics:

	testee http://underscorejs.org/test/index.html --browser canary --coverage

Test with IE 9.0 on BrowserStack:

	testee test/index.html --browser ie:9.0@win --launch browserstack

---

## Configuration File

Run test in CI using Browserstack and the Samsung Galaxy Nexus emulator:

	!javascript
	{
	  "browser": {
	    "version": "4.0",
	    "device": "Samsung Galaxy Nexus",
	    "os": "android"
	  },
	  "launch": {
	    "type": "browserstack",
	    "username": "browserstackusername",
	    "password": "browserstackpassword"
	  },
	  "reporter": "Dot"
	}

And run like:

	testee --config testee.json > testresults_galaxy_tab.xml

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
