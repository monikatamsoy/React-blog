import React, {Component} from 'react';

import Form from './components/form'
import Blog from './components/pages/blog'
import User from './components/pages/user'
import Login from './components/pages/login'
import './Assets/css/default.min.css';

class App extends Component {
  render()
  {
    window.localStorage.user = 0;
    switch (window.location.pathname) {
      case "/":
      if (window.localStorage.user != 1) {
        return (<div className="app">

          <Login/>

        </div>);
      } else {
        window.location = "/blog"
      }

        break;
      case "/blog":
        if (window.localStorage.user == 1) {
          return (<div className="app">
            <Blog/>
          </div>);
        } else {
          window.location = "/"
        }
        break;
      case "/logout":
        window.localStorage.user = 0
        window.location = "/"
        break;
      default:
        return 'error'
    }
    // if (window.location.pathname == "/") {
    //   return (<div className="app">
    //
    //     <ExampleForm1/>
    //
    //   </div>);
    // } else if (window.location.pathname == '/blog') {
    //   return (<div className="app">
    //     {/* <h1>{window.localStorage.blog}</h1> */}
    //     <Blog/>
    //   </div>);
    // }

  }
}

export default App;
