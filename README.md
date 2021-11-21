# angular-chrome-extension

## Description:
This project is an angular template for creating chrome extension 

Generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.X.X  

##### More documentation on chrome extension:
[Chrome extension](https://developer.chrome.com/extensions)

## Getting Started:

#### Configure extensions:
Clone repo and install dependencies:  
```bash 
git clone --depth 1 https://github.com/radiium/angular-chrome-extension
cd angular-chrome-extension
npm install
```
Find and replace ```angular-chrome-extension``` string by your app name.
May be adjust rules in src/manifest.json like permissions, content_security_policy, etc....

#### Run extension:
All commands create artifact in /dist folder.
- dev: ```npm start``` or ```npm run watch```
- prod: ```npm run build```  
Go to page ```chrome://extensions/``` for install extension manually.
