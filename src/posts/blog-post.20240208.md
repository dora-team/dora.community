February 8, 2024 by Amanda

## Discussion Topic: Code Reviews

The DORA Community Discussions start with a brief introduction talk, and then a discussion with the attendees using the <a href="https://leancoffee.org/" target="_blank">Lean coffee</a>.

<iframe width="560" height="315" src="https://youtu.be/N4dq5fY4WyI?si=qpaLCerjGkEiPmjL" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen > </iframe>

### Topics discussed:

### **Suggestions around code review metrics- code review velocity, PR cycle time etc.**

##### Recap from the community discussion:

- The Need for Clear Terminology: The terms "velocity", "code review", and "inspection" are often used inconsistently. Participants agreed on the importance of using specific terms like cycle-time, response-time, or review-rate to improve clarity.
- Metrics: The group emphasized defining metrics based on clear business goals and aligning them with company culture. <a href="https://chaoss.community/kb/metric-review-cycle-duration-within-a-change-request/" target="_blank">CHAOSS recommended metrics</a>.
- Potential good metrics: time to merge, iterations, time waiting for a submitter action, how are the reviews distributed across the team, and time waiting for a reviewer action.
- <a href="https://linkedin.github.io/dph-framework/example-metrics.html#code-reviewer-response-time%20rrt" target="_blank">LinkedIn DPH Framework</a>
- Context matters - weekends, holidays, vacations, etc. can affect metrics.
- <a href="https://github.com/lowlighter/metrics" target="_blank">https://github.com/lowlighter/metrics</a>

### **Where is the value of code review on a high trust team?**

##### Recap from the community discussion:

- Knowledge sharing across the organization, learning the way others work, make code more homogeneous
- Code review is more valuable when _learning_ is the result

### **Code Review vs. Automated Testing**

##### Recap from the community discussion:

- Automating Reviews and Testing: using automated testing to streamline review processes, along with reviewing the tests themselves to ensure overall code quality.
- Linters and Auto-Fixing: The value of linters for enforcing style and catching errors was emphasized, along with using auto-fixes within CI pipelines.
- Testing can help save time -- make conversations more valuable: first, check the tests and _then_ ask the more complicated questions
- Adding automation & static analysis into CI pipeline is often called "Continuous Review" (Duvall, 2007). Adding AI into that was getting dubbed as "Continuous Intelligence" ca. 2018 or so (along with "Continuous Compiance")
- Context matters -- age of codebase, team culture, team expertise, industry
- Paul Hammant's blog - <a href="https://paulhammant.com/2014/11/13/code-review-the-unit-of-work-should-be-a-single-commit/" target="_blank">The Unit of Work Should Be a Single Commit</a>
- <a href="https://itrevolution.com/articles/trust-and-test-driven-development-for-people/" target="_blank">Trust and Test-Driven Development for People</a>

### **AI replace a human in code review? When, where, and how?**

##### Recap from the community discussion:

- AI vs. Traditional Code Analysis: The potential of AI-powered code reviewing tools was discussed and compared with existing code analysis approaches. It was noted that AI reviewers could go beyond traditional tools, but it's important to see how they function in practice.
- Code Written by AI vs. Code Reviewed by AI: The conversation highlighted the distinction between these two scenarios, with implications for code quality and the role of human developers.
- Be aware of the AI training set
- Human judgement is important
