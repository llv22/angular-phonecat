#End 2 End Testing (Protractor)
To run the end-2-end tests against the application you use [Protractor](https://github.com/angular/protractor).

### Must enter '$npm start' and then invoke '$npm run protractor' 

## Starting the Web Server
In either case you will need the application to be running via the web-server.
From the root folder of the repository run:

```
npm start
```

The application should now be available at `http://localhost:8000/app/index.html`

## Testing with Protractor

As a one-time setup, download webdriver.
```
npm run update-webdriver
```

Start the Protractor test runner using the e2e configuration:

```
npm run protractor
```

## Protractor logging level  

see reference in https://github.com/angular/protractor/blob/master/docs/faq.md  
logging level https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities#loggingpreferences-json-object   

default level - warning and above  
so console.log() should be OK to output parameters.