const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://172.24.0.1:9000/',
       options : {
       'sonar.sources': '.',
       //'sonar.inclusions' : '.' // Entry point of your code
       }
     }, () => {});
