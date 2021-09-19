Install sass:

$ node -v
$ npm -v
$ npm init
$ npm install node-sass --save-dev
$ cat package.json


dependencies -> what we need for the project (save)
devDependencies -> what we need for development (save-dev)
scripts -> to run with 'npm run' command


reinstall packages:

$ npm install

compile sass:

{
    "name": "sass-project",
    "version": "1.0.0",
    "description": "My very first sass project",
    "main": "index.js",
    "scripts": {
        "compile:sass": "node-sass styles.scss generated.css"
    },
    "author": "Jonathan Manera",
    "license": "ISC",
    "devDependencies": {
        "node-sass": "^6.0.1"
    }
}

$ npm run compile:sass


live server:

$ npm install live-server -g
$ live-server