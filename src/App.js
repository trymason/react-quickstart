import React, { Component } from 'react';

import Mason, { Canvas } from '@mason-api/react-sdk';

class App extends Component {
  componentDidMount() {
    Mason({
      apiKey:'YOUR_API_KEY_HERE',
      projectId: 'YOUR_PROJECT-ID_HERE',
    });
  }

  render() {
    return (
      <div class="bg-gray pa3 w-100 min-vh-100 border-box" >
        <div class="w-100 pa3">
          <p class="h1">Mason starter kit</p>
          <p class="h2">This project is a simple bare-bones application that's set up for you to deploy your Mason features into.</p>
          <p class="h2">This is just custom HTML. Mason features live right alongside any of your frontend custom code.</p>
        </div>
        <div className="w-100 bg-black items-center justify-center pa3 border-box">
          <Canvas id="COMPONENT_ONE_ID_HERE" />
          <Canvas id="COMPONENT_TWO_ID_HERE" />
          <Canvas id="COMPONENT_THREE_ID_HERE" />
        </div>
      </div>
    );
  }
}

export default App;