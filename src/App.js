import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router';
import Homepage from './container/Homepage/index.js';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import DocumentPage from './container/DocumentPage/index.js';
import DefaultPage from './container/DefaultPage/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BrowserRouter >
          <div className="App-container">
              <Route path="/:path" component={Sidebar}/>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/:path/:id" component={DocumentPage} />
                <Route exact path="/:path" component={DefaultPage} />
                
              </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
