# build the production

- 1 Install react-app-rewired:
- - npm install react-app-rewired --save-dev

- 2 Create a config-overrides.js File: In the root of your project, create a file named config-overrides.js with the following content:
- - 
const path = require('path');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.output.path = path.resolve(__dirname, 'dist');
  }
  return config;
};

- 3 Update package.json: Modify the scripts section in your package.json:
- - 
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "eject": "react-scripts eject"
}

- 4 Run the Build: Execute the build command:
- - npm run build
