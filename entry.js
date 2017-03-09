import React from 'react';
import ReactDOM from 'react-dom';

// require("file?name=[name].[ext]!./index.html");
require("./styles.scss");

import App from './components/app';

// Include your React components like this:
// import MyComponent from 'components/my_component';

ReactDOM.render(<App />, document.getElementById("placeholder"));
