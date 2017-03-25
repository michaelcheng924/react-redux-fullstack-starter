#react-redux-fullstack-starter

<ol>
    <li><a href="#gettingstarted">Getting Started</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#features">Features</a></li>
</ol>

<h2 id="gettingstarted">Getting Started</h2>
Here's how you get started:

<h4>Requirements</h4>
Make sure you have node + npm installed. Preferably, use node v6.10.0, since that is the version used to write this starter.

<h4>Step 1: Get the Repository</h4>

<code>git clone git@github.com:michaelcheng429/react-redux-fullstack-starter.git</code>

<h4>Step 2: Install Dependences</h4>
<code>npm i</code>

You may also need to install some packages globally:
<code>npm i -g nodemon webpack webpack-dev-server</code>

For better debugging, install Redux DevTools for Chrome here:
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

<h4>Step 3: Start the MongoDB daemon</h4>
This will involve installing MongoDB and then running <code>mongod</code> from the terminal.

<h4>Step 4: Start the webpack-dev-server to view the app and start developing</h4>
<code>npm run dev</code>

Then, go to <code>localhost:8080</code> in your browser and start developing with live reload/react hot loading!

Note: For Windows, you will need to run <code>webpack-dev-server</code> and <code>nodemon .</code> in separate terminals.

<h4>Step 5: Deploy to Heroku</h4>
To easily deploy to Heroku, just follow these simple steps:

<ol>
    <li>Download the Heroku toolbelt and create a Heroku account</li>
    <li>Log in with <code>heroku login</code></li>
    <li><code>git init</code></li>
    <li>Create App: <code>heroku create (APPNAME)</code></li>
    <li>Set up MongoDB<code>heroku addons:create mongolab</code><br>
    <code>heroku config:get MONGODB_URI</code><br>
    <code>heroku config:set MONGODB_URI=VALUE_FROM_LAST_STEP(COPY HERE)</code></li>
    <li>Build the files: <code>npm run build</code></li>
    <li>Push to Heroku<code>git push heroku master</code></li>
    <li>Go to <code>APPNAME.herokuapp.com</code></li>
</ol>

<h2 id="stack">Stack</h2>
This starter includes the following (among other smaller dependencies):

<ul>
    <li><strong>React</strong> - Great framework for building scalable, performant web apps</li>
    <li><strong>react-router</strong> - Routing library for React</li>
    <li><strong>Redux</strong> - Great philosophy for managing data, data flow, and state with a single state tree</li>
    <li><strong>Redux-Thunk</strong> - Used for asynchronous actions in Redux</li>
    <li><strong>Webpack</strong> - Amazing module bundler that basically replaces Grunt and Gulp</li>
    <li><strong>webpack-dev-server + react-hot-loader</strong> - Makes development a joy with easy testing and live reload</li>
    <li><strong>Node + Express</strong> - Asynchronous JavaScript back-end. Node is fast, and Express makes writing Node easier and more fun.</li>
    <li><strong>MongoDB</strong> - Easy to use database for Node</li>
    <li><strong>Mocha + Chai (testing)</strong> - Great testing framework and assertion library (Not up to date)</li>
</ul>

<h2 id="features">Features</h2>
Why use this starter/stack?

<ul>
    <li><strong>React + Redux is awesome</strong> - React and Redux go together beautifully. Uni-directional data flow. Have a single immutable state tree for your app, pass what you need into top level components, and then let these props trickle into lower level, "dumb" components. Know exactly where all data-manipulation happens, and prevent unintended side effects.</li>
    <li><strong>Isomorphic</strong> - Server side rendering for improved load times and easy server-side routing</li>
    <li><strong>Save hours of setting up the stack above to work together</strong> - One of the primary obstacles to using this great stack is how long it takes to get set up. Get all of the basics of this stack, without a ton of fancy junk you don't want.</li>
    <li><strong>Comments and examples to help you learn and get started</strong> - There is some complexity to this stack. That's why there is so much information here about how to use this stack and this starter.</li>
    <li><strong>Easy deployment to Heroku</strong> - Everything is set up for you to easily deploy your app to Heroku (or another place of your choice).</li>
</ul>
