NSS Mocha Example
-----------------

### Option 1: qUnit style

1. `bower init`
2. `bower install chai --save`
3. `bower install mocha --save`
4. make boilerplate index.html spec runner
5. `open index.html`

### Option 2: Node.js style

1. `npm init` with test script: `mocha spec --recursive --reporter spec` [See: Reporter List](http://mochajs.org/#reporters)
2. `npm install chai --save-dev`
3. `npm install mocha --save-dev`
4. `npm test`
