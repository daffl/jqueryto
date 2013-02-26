# JavaScript? Testing?

<img src="images/smiley_confused.png" alt="JavaScript? Testing?"/>

---

## Who?

### David Luecke

@daffl
github.com/daffl

[Bitovi Logo]()

[http://bitovi.github.com/jqueryto](http://bitovi.github.com/jqueryto)

---

Open source projects

---

## The state of JavaScript testing

<img src="images/smiley_unhappy.png" alt="JavaScript testing smiley is not happy" style="float:right; margin-top: 5em;" />

[DailyJS survey](http://dailyjs.com/2012/12/24/javascript-survey-results/) from December 2012:

- 51% don't test
- Most commonly used frameworks
	- Jasmine
	- Mocha
	- QUnit

.notes: More important as applications get bigger
		JavaScript testing smiley is not happy (yet)
		We as a community should work on making this easier

---

## What can we do to make it better?

- Simplified tools
- Education
- Automation

.notes: If there is no solution to automate yet, because developers are inherently lazy there are two
options: Still do it manually or develop a solution.

---

## A Holy Grail?

.notes: What can we do to make this more accepted

### [Adam Hawkins]() at [RejectJS 2012](https://speakerdeck.com/twinturbo/javascript-testing-the-holy-grail) ([watch](http://www.youtube.com/watch?v=YdFQ29oK50M))

- Browser independent
- All tests written in JavaScript
- Unit and functional testing
- Test against a single browser in development
- Test against all target browsers in CI
- Runs from the CLI

---

.notes: Tell you what: These guys can feel our pain

Monty Python!

---

## The Secret?

Software development will never be easy!

- Break things down into smaller pieces
- Find the best possible solution
- Use it to build something awesome

.notes: Things will get complicated by itself

---

## What is a test anyway?

For a given input we expect the following result(s)

- Unit testing
- Functional (integration) testing



---

# Test reporting

---

## Testee.js

- Runs on all browsers
- Many output formats
- Easy CI integration (Mocha style)
- BrowserStack support
- Code coverage
- GruntJS task

---

## Functional Testing

Also integration tests

---

## FuncUnit

---

## Making things testable

---

## When to do what?


