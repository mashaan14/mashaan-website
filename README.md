![Picture](https://github.com/mashaan14/mashaan-website/assets/61033787/f2b7da91-17df-475b-b181-aa2877333e24)

## :red_circle: Credit :red_circle:
_**This website design was inspired by this [repository](https://github.com/soumyajit4419/Portfolio). Any credit should be directed there.**_

## Installation

1. Install [Node.js](https://nodejs.org/en) on your machine.
   
2. If you are working on windows, add `Node.js` to your environment variables path. Follow [this answer](https://stackoverflow.com/a/27864253).

3. Clone this repository to your local machine.

4. Open the folder on VSCode and type `npm install` in the terminal to install the dependencies.

5. Run `npm start` to start the app. It should open directly on your default browser. But if it didn't, you can launch it on [http://localhost:3000](http://localhost:3000)


## Deploying the app on GitHub Pages

1. copy this line to the top of `package.json`:
      - `"homepage": "https://[your username].github.io/[your repo name]",`
      - in my case it's `"homepage": "https://mashaan14.github.io/mashaan",`

3. copy these commands to scripts in `package.json`:
     - `"predeploy": "npm run build",`
     - `"deploy": "gh-pages -d build"`

3. run these commands from the terminal:
     - `npm install gh-pages --save-dev`
     - `git init`
     - `git remote add origin https://github.com/[your username]/[your repo name].git`
     - `npm run deploy`

## Colors
|&nbsp;|*HEX code*|
| :--- | :---: |
| main blue | `#4B668C` |
| dark blue | `#2D3D54` |
| light blue | `#EDEFF3` |
| lighter blue | `#A5B2C5` |
