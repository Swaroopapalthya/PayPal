import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// gulpfile.js

// Define a task to run other build processes
gulp.task('build', gulp.series('compress-images', (done) => {
  // Other build processes like CSS processing, JS minification, etc.
  done();
}));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

