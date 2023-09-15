![Picture](https://github.com/mashaan14/mashaan-website/assets/61033787/f2b7da91-17df-475b-b181-aa2877333e24)


## Credit
This website design was inspired by this [repository](https://github.com/soumyajit4419/Portfolio). Any credit should be directed there.


## Installation

1. Install [Node.js](https://nodejs.org/en) on your machine.

1. Clone this repository to your local machine.

2. Open the folder on VSCode and type `npm install` in the terminal to install the dependencies.

3. Run `npm start` to start the app. It should open directly on your default browser. But if it didn't, you can find it on [http://localhost:3000](http://localhost:3000)


## Deploying the app on GitHub Pages

1. copy this to the top of `package.json`:
  - `"homepage": "https://[your username].github.io/[your repo name]",`

2. copy these commands to scripts in `package.json`:
  - `"predeploy": "npm run build",`
  - `"deploy": "gh-pages -d build"`

3. Run these commands from the terminal:
  - `npm install gh-pages --save-dev`
  - `git init`
  - `git remote add origin https://github.com/[your username]/[your repo name].git`
  - `npm run deploy`

## Colors
- main    `#4B668C`
- dark    `#2D3D54`
- light   `#EDEFF3`
- lighter `#A5B2C5`  
