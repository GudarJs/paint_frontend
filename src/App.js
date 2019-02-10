import React, { Component } from 'react';
import "antd/dist/antd.css";
import './App.css';
import { FaGithub } from 'react-icons/fa';

import FreeDrawingCanvas from 'containers/freeDrawingCanvas';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Channels Workshop</h1>
        </header>

        <main>
          <FreeDrawingCanvas
            width={640}
            height={360}
          />
        </main>
        
        <footer>
          <a href="https://github.com/gudarjs"><FaGithub /> Github GudarJs © 2019</a>
        </footer>
      </div>
    );
  }
}

export default App;
