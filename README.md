# ShopKeep Coding Test - Michael Mathews

## Setup

The app comes pre built, it can be viewed by opening the `index.html` file in `dist`.

When you run the app you will see two persisted stock items. The main view lists out the current stock. To add an item to the stock you can click the burger menu in the upper left corner then select `Add a New Stock Item`. You will be presented with a dialog to enter the stock details.

----

To build the app or run from a development server you will need to install the dependencies with `npm install`
Once this is complete there are a few different tasks defined in `package.json` > `scripts`

`npm run serve` This starts a server hosting the `dist` folder.

`npm run dev` This starts a dev server watching and compiling on changes.

`npm run build:serve` This builds a production verison of the app and serves the files.

##Choice of stack

After reading the brief I choose the following stack. I feel it suited the requirements of the task, with each lib serving a different purpose.

- React
- Redux
- React Material
- Webpack
- Budo

###React
React was suggested in the brief and it's my preference for front-end lib. It's perfect for creating and composing small components into full web apps.

###Redux
Redux solves the issue of state. Again it is my prefered lib for managing front-end state. It works well at scale and is perfect working with backend apis and persisted data on the server. There are a number of differnt async plugins which help with this.

###React Material UI.
Altho a little bloated I felt it would be perfect for this brief. Material UI is a suite of UI components that are easily pieced together. It helped take away some of the pressure of creating my own presentational layer for this demo. I was able to focus on JS/react.

###Webpack
I used webpack to create the production builds of the app. Using webpack 2.0 I was able to take advantage of tree shaking with es2015 modules. This leads to a lighter final output.

### Budo
Budo is a dev server that is super quick and easy to setup. I use it all the time to quickly fire up a server that watches and builds my files. It works with browseriify so can take advantage of the various browserify transform plugins.
