# Simple APp


#### Development and production servers
* heroku: [dev-4tune.4tius.com](http://dev-4tune.4tius.com/)

## Configuration for Local Development

### Environment and Requirements
* [NodeJS](https://nodejs.org/en/)

We recommend nvn for managing different versions as well as avn for automatic node version switching.

* https://github.com/creationix/nvm#installation
* https://github.com/wbyoung/avn

Once you have nvm and avn setup, install the required node version with nvm :
```
nvm install v4.2.4
```

### Dependency Management
* [NPM](https://www.npmjs.com/): **NodeJS** package management.
* [Bower](http://bower.io/): **Front-End** dependencies management.

### Frameworks and Libraries
* [Angular](https://angularjs.org/): MVVM framework.
* [Bootstrap](http://getbootstrap.com/): Responsive Front-End development framework.

### App Setup
```
cd ./web-app
npm install
bower install
```

### Run

Type in the command shell:
```bash
npm start
#or
gulp serve
```

- The default API is pointing to localhost server (you need to run this first)
- To point to a different target specify the destination target:, e.g.: ```gulp serve --prod```

#### Available targets
* **--local** (API points to ```http://localhost:1337/api``` in ```debug mode on```)
* **--dev** (API points to ```http://dev-api.4tius.com/api``` in ```debug mode on```)
* **--stg** (API points to ```http://stg-api.4tius.com/api``` in ```debug mode off```)
* **--prod** (API points to ```http://api.4tius.com/api``` in ```debug mode off```)
* **--heroku** (API points to ```http://4tiusExercise.herokuapp.com/api``` in ```debug mode on```) (this serve will be removed soon)

#### Some other useful flags
* **--nobrowser** prevent the app to open in a new window of the Web Browser
    * e.g.: ```gulp serve --heroku --nobrowser```
* **--nosync** prevent browser sync at all
    * e.g.: ```gulp serve --heroku --nosync```


### Build

You must specify a target. Available targets:

* **--dev** (run on ```./build/www-dev```, E.g.: ```gulp build --dev```)
* **--stg** (run on ```./build/www-stg```, E.g.: ```gulp build --stg```)
* **--prod** (run on ```./build/www-prod```, E.g.: ```gulp build --prod```)
* **--heroku** (run on ```./heroku/app```, E.g.: ```gulp build --heroku```)

If the target is not specified will default to ```--dev```

#### How to use

To build the development app type:

```bash
gulp build --dev
```

To run the app from dev folder(./build/www-dev):
```bash
gulp serve-build --dev
```

To build the heroku app type:
```bash
gulp build --heroku
```

To run the app from heroku folder(./build/heroku):
```bash
gulp serve-build --heroku
```

An instance of the application is running in local environment over the port 8080, to see it open your web browser and go to [http://localhost:8080/](localhost:8080/).

In order to emulate the web version of the app running in heroku use the following command:
```bash
npm run heroku-local
```


