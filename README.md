# Angular2 latest
## What's this
Simple example of Angular2 trying to keep up with the latest code
explained in their tutorial[https://angular.io/docs/ts/latest/quickstart.html]

## Install
Clone the repository
```
git clone https://github.com/pxai/angular2-latest
```

You may need to install node modules
```
npm install
```

When it failed (win), I just tried:
```
npm -g install typings
```
And then don't forget to:
```
npm run postinstall
```

## Transpile and watch
Just type this on console:
```
npm start
```
If concurrent or lite-server does not work properly, just run them in different consoles.
This will run typescript transpilation and set a watch on any further changes
```
npm run tsc:w
```
And this runs a little web server with a rest API
```
npm run rest
```

## About
Pello Altadill[http://pello.io]
