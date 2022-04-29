---Volvo-A million more-Automation Test Task---

--> Before the test; please install npm

npm install

-- > To Run Test

npx wdio run wdio.conf.js

--> After test; Reports should created in "reports" folder(json and junit)

Note: Below code provides parallel execution of tests

capabilities: [{
    
        
        maxInstances: 5,
		
        browserName: 'chrome',
        acceptInsecureCerts: true
        
    }, {
    
        
        maxInstances: 5,
        
        browserName: 'firefox',
        acceptInsecureCerts: true
        
    }]

