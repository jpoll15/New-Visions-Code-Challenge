## Julia Pollack's New Visions Code Challenge
### For Local Deployment:
If you don't already have npm, install it: https://www.npmjs.com/

Then, in the project directory, just:
```
npm install
```
and
```
npm run start
```
Please wait a few moments for the project to finish bundling, then navigate to localhost:8080, and use the number input to change the percentage of absenteeism threshold of students to view.
### Justification of technological/architectural choices

•	Node – allows me to use JavaScript, the programming language in which I am most comfortable, on the back end

•	Express – quickly makes an HTTP server in Node

•	React – makes single-page application development easier; UI automatically reflect changes in application state

•	Webpack – makes front-end development easier, as it bundles all my front-end modules in the right order

•	Babel – allows me to develop in ES6 without worrying about which browsers use older versions of ECMAScript

•	Single-page app – loads faster than a traditional app, as only parts of the page must be reloaded upon application state change

•	Regarding data and styling – given more time, I would have set up a way to selectively access data from the back end so initial site loading did not take as long, and I would have styled the front end for more pleasant use.
