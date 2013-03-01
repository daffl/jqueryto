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
[http://bitovi.github.com/jqueryto](http://bitovi.github.com/jqueryto)

![Bitovi Logo](images/bitovi_logo_black.png)

---

## __Open Source__?

<img src="images/jqueryplusplus_logo.png" alt="jQuery++ Logo" style="margin-bottom: 1em;" />
<img src="images/canjs_logo.png" alt="CanJS Logo" />

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

- Create tools that make things easier
	- [GruntJS](http://gruntjs.com/)
	- [TravisCI](https://travis-ci.org)
- Simplify workflows
	- [Yeoman](http://yeoman.io/)
- Talk about it!
- Automate stuff

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

### There will always be a holy grail!

- Break things down into smaller pieces
- Find the best possible solution
- Evolve
- Repeat

<!--
	In the bigger picture: Look at how things have evolved in recent time.
	jQuery -> Structuring (MVC) -> Live-binding MVC
-->

---

# Test __Reporting__

<i class="icon-edit-alt large"></i>

---

## Starting Tests

__Open the test page URL in the target browser(s)__

Automate with [Launchpad](https://github.com/ekryski/launchpad):

- NodeJS module for starting browsers
- Common browser launching API
- Dynamic local browser discovery
- Launch [BrowserStack](http://www.browserstack.com/start) workers
- [BrowserStack API](http://www.browserstack.com/automated-browser-testing-api) compatible server
- [Remote Preview](https://github.com/viljamis/Remote-Preview)

---

## Testee

__Automated cross-browser test reporter for QUnit, Jasmine and Mocha__

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

Run test in CI with the BrowserStack iPad emulator:

	!javascript
	// testee.json
	{
		"browser": {
			"browser": "ie",
			"os": "win",
			"version": "latest"
		},
		"launch": {
			"type": "browserstack",
			"username": "your username",
			"password": "your password"
		},
		"reporter": "XUnit"
	}

And run like:

	testee --config testee.json

---

## Are We __There Yet__?

- *Browser independent*
- *All tests written in JavaScript*
- Unit and functional testing
- *Test against a single browser in development*
- *Test against all target browsers in CI*
- *Runs from the CLI*

---

# __Functional__ Testing

<i class="icon-cog-alt large"></i>

---

## __What__ Does It Do?

__Automated tests performed from a user perspective:__

- Emulate user input
- Examine the result
- Black box testing
- Ideal for testing component interaction
- Application smoke tests

---

## What __if...__

<!--
	jQuery + QUnit -> Evolve
-->

... we could use __jQuery syntax__ and __QUnit tests__ for functional testing?

__Something like:__

	!javascript
	test('Application login works', function() {
		// Click in username field and type
		S('[name="username"]').click().type('testing-smiley');
		// Click in password field and input password
		S('[name="password"]').click().type('supersecret');
		// Submit the form
		S('[type="submit"]').click();
		// Make sure that our application loaded
		S('#application').exists();
		// And our status field shows the username
		S('#status .info').html('testing-smiley');
	});

### Use [FuncUnit]()

---

# Making things testable

---

## When to do what?

### Unit tests

- Low level

### Functional tests

- Existing UI headvy widgets
- Integration tests

---

## Application structure

__MVC__ doesn't

