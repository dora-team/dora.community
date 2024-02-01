January 22, 2024 by Amanda

## Discussion Topic: Metrics

The DORA Community Discussions start with a brief introduction talk, and then a discussion with the attendees using the <a href="https://leancoffee.org/" target="_blank">Lean coffee</a>.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3lDNZz_WaBw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen > </iframe>

### Topics discussed:

### **How do you measure the success of features you add to your software?**

##### From the community:

- Measure if the feature was a success - possible measures: net promoter score (NPS), Click throughs, Knowledge base, did this drop off, increase engagement
- Define success before developing the feature
- Did it make our lives better?
- Connect to analytics, connect to dashboards
- To show value of the feature , show it to the business
- Product Analytics can be quite useful, particularly if it's in the frontend space - often they can break down which buttons are being clicked, which individual features or experiments are being used, that were batched together.
- A/B testing is a nice approach to split up the multiple improvements, too... if you have the capability to do it.
- Feature flagging different audiences would allow more experiments concurrently, as long as you have sufficient volume... although the law of multivariate testing is expect most experiments to end up making no measurable impact

### **How are your teams defining and measuring failed changes?**

##### From the community:

- Deployment - system is offline, but that misses crucial features are broken, even if the site is still up, also consider non-functional requirements - ex. the page load is taking longer than expected.
- When something needs to be remediated
- What if several teams are working on same product , deploying multiple features, make it very complicated

### **How to involve Product management in Engineering Metrics Discussion?**

##### From the community:

- Embed the PM within the application team, integrated them, and include them in team discussions.
- By working on improving lead time for changes and/or cycle time as a team, the PM can eventually move away from building up a backlog of requests - this becomes possible when there is an efficient feedback cycle.
- Encourage them to discuss with their PM to break work into buckets, big wins,continuous improvement, service health, - deliberate discussion

### **Is there a metric that points towards the maintainability of the application? Or is it something we need to derive from multiple metrics?**

##### From the community:

- Application health
- Code health
- Audience is important, the metrics need to be valuable to the audience
- Surveying the people that work on the system, their satisfaction
- Developers tends to say things are really bad with the code, but sometimes it is not true, but sometimes they overestimate
- Technical debt
- How often is the codebase changing?
- How much do the team like / not like the codebase
- How much revenue is it bringing in / are customers using it?
- How much test coverage do we have?
- How do you define bad code? Is it not how it is currently being written? Does that impact users?
- Build time, fixing production,

### **What's more important - the definition of your metric, or how consistently you measure it?**

##### From the community:

- Yes! Capture and share the definition of the metric as well as a timeline for when to revisit its definition

### **Are SLOs the only way to add meaning to 'availability'/'uptime' metrics? How else do you do this?**

##### From the community:

- SLO usually starts with using system metrics, such as cpu usage. With proper implementation it leads to using business metrics, such as bookings, and booking value.

### **What are good metrics for technical debt?**

##### From the community:

- Technical debt usually has a drag factor, so you'd expect your DORA metrics to highlight when this is causing too much friction... either due to throughput reducing, or stability deteriorating.
- Establish a technical debt assessment
- Identify it, have plan to address it

### **Tips for summarizing comparisons? (eg. before/after)**

##### From the community:

- <a href="https://asq.org/quality-resources/control-chart" target="_blank">Control Chart - Statistical Process Control Charts | ASQ</a>
- <a href="https://www.statisticshowto.com/control-chart/" target="_blank">Probability and Statistics Topics Index - Statistics How To</a>
- <a href="https://deming.org/a-beginners-guide-to-control-charts/" target="_blank">A Beginner’s Guide to Control Charts</a>

### **How do you communicate these metrics to leadership in a way that they will care or see the value in collecting them?**

##### From the community:

- Comparing lack of business intelligence in software delivery with analytics journey maturity that the organization has in other areas, IT, sales, etc.
- Give context to the metrics whether it is going up or down
- Give insights, and make suggestions
- DORA's <a href="https://dora.dev/publications/#additional-publications" target="_blank">The ROI of DevOps Transformation</a> report - might help leaders see the impact and possibilities that improved software delivery performance may have
- Have a hypothesis, "We believe X will result in Y and we will know this when <insert metric> improves by X %"?

### **How precise do the metrics need to be?**

##### From the community:

- Precise enough to support the decision you are trying to make or change you are trying to drive.
- <a href="http://vitrina.readthedocs.io/" target="_blank">Vitrina: a portfolio development kit for DevOps</a>

### **Where to start to make improvements that will reflect in the key metrics?**

##### From the community:

- <a href="https://img2.storyblok.com/filters:format(webp)/f/84825/1920x1080/2dbfcf4f15/value-vs-effort-matrix.jpeg" target="_blank">The Value vs. Effort Matrix</a>
- let's all work to achieve continuous delivery, and here are some measurements that may help guide you
- locus of control might help, too. An individual contributor might not be able to change how incentives work in the org but can change their practice of writing tests

### **When is it too early for a company/product to start tracking DORA metrics?**

##### From the community:

- When the team does not want to work on continuous improvement

### **Avoiding weaponizing metrics i.e., pursuing a better number at any cost**

##### From the community:

- "It's not a metrics problem, it's a culture problem"
- Weaponizing comes from the understanding that the metrics provide absolute values. In fact they provide relative ones against a reference that you make up.
- Setting a goal for all teams in the org to work for, and helping them find metrics that track progress to it, while carefully avoiding comparing each team's progress with other teams

Join the <a href="https://groups.google.com/g/dora-community" target="_blank">DORA Community google group</a> to receive invitations to future DORA Community events.
