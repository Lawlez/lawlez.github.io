[![Known Vulnerabilities](https://snyk.io/test/github/Lawlez/Lawlez.github.io/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Lawlez/Lawlez.github.io?targetFile=package.json)

![run test CI](https://github.com/Lawlez/Lawlez.github.io/workflows/run%20test%20CI/badge.svg?branch=master)

# lawlez.github.io

## using the PERN stack

The PERN stack: [PostgresSQL](https://www.postgresql.org/), [Express](https://expressjs.com/), [React](https://reactjs.org/), &amp; [Node](https://nodejs.org/en/)

Here's what is powering our PERN application:

-   [ESLint](https://eslint.org/): Style guide, syntax, and developer error finder and enforcer
-   [Webpack 4](https://webpack.js.org/): Static module bundler, complier, & hot-reloader
-   [Redux](https://redux.js.org/): Predictable state container/manager for JavaScript apps
-   [React-Router](https://github.com/ReactTraining/react-router#readme): “Dynamic Routing” (navigation) for React client
-   [React Material UI](https://material-ui.com/): Component library implementing Google's [Material Design](https://material.io/)
-   [Material-UI Kit](https://www.creative-tim.com/product/material-kit-react): Curated mid-level component library complete with view examples
-   [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js
-   [Jest](https://github.com/facebook/jest): A comprehensive JavaScript testing solution that Works out of the box for most JavaScript projects.

## Using this project

First, make sure you have a recent version of PostgreSQL installed and running. Visit [the PostgreSQL home page](https://www.postgresql.org/) to download the install file and get more guidance.

Open a terminal in your user home and type the following to create a new Postgre database:

    $ createdb lawlez_io

Now we are ready to install our react Application & Server

cd into the project directory and install the dependencies:

    $ cd lawlez.github.io
    $ npm install

> If you have npm v6+ installed and noticed there were more than 0 vulnerabilities are found, run: `npm audit fix`

This should be done regularly: check your dependencies and update them. Snyk and Dependabot will help you automate this. More about npm's audit functionality [here](https://docs.npmjs.com/getting-started/running-a-security-audit).

To start the Webpack dev server run:

    $ yarn dev

And to build for deployment/production run:

    $ yarn build
    $ yarn start

Also, don't forget that the API won't work unless you created a users table like this:

> Does this look familiar?
> ![no tables](https://raw.githubusercontent.com/tg970/PERN-Advanced-Starter/master/src/assets/img/newdb.png)

To create this table, hit the following route, either in your browser or with [Postman](https://www.getpostman.com/).

http://localhost:3000/api/users/create

> Successful return:
> ![null](https://raw.githubusercontent.com/tg970/PERN-Advanced-Starter/master/src/assets/img/null.png)

If you want to seed use:

http://localhost:3000/api/users/init

> Successful return:
> ![id's](https://raw.githubusercontent.com/tg970/PERN-Advanced-Starter/master/src/assets/img/ids.png)

## What's happening under the hood

#### pg-promise: [Read up on it.](https://github.com/vitaly-t/pg-promise)

#### Other Config files:

_.babelrc_ - [Babel](https://babeljs.io/) is a toolchain used by Webpack to convert ECMAScript 2015+ code into a backward-compatible version of JavaScript for old browsers or environments. This file tells Babel our presets and plugins.

_.eslintrc.json_ - This config file tells [ESLint](https://eslint.org/) our settings for interpreting and reporting errors and warnings while writing our code. Delete or add rules, change style guide, whatever you want, this is where you do it. For this to work, you'll need to make sure you have a linter and eslint installed in your code editor.

_nodemon.json_ - When Webpack spins up a dev server, it also starts [nodemon](https://nodemon.io/) in the background to proxy for API calls. This file tells nodemon which directory to watch for changes and restart when files are updated.

_.webpack.config.js_ - Oh, the magic of Webpack! This file gives Webpack all the important details for doing what it does. Again this file is configurable; for more information visit [the configuration docs](https://webpack.js.org/configuration/).

## How did we get here?

There are so many resources out there to help developers resolve issues and build new skills and tools. I'm very thankful for the sharing of knowledge, and I wanted to put this project together to help other devs hoping to try their hand at a full-stack React application.

This starter app was inspired and guided by the following resources:

-   [React-slingshot](https://github.com/coryhouse/react-slingshot)
-   [Webpack 4 Quickstart](https://github.com/valentinogagliardi/webpack-4-quickstart)
-   [Postgres Advanced Demo](https://github.com/vitaly-t/pg-promise-demo)
