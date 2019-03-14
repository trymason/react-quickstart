import React, { Component } from 'react';
import Mason, { Canvas } from 'mason-library';

class App extends Component {
  componentDidMount() {
    Mason({
      apiKey:'F2iH1kKvAY02h9aKMKEzOZ8tEb08jmiqVMoggpZQhOs=', // Replace this with your API key
      projectId: '5c19c9430d278900033d9b70', // Replace this with your Project ID
    });
  }

  render() {
    return (
      <div className="bg-gray pa3 w-100 min-vh-100">
        <div className="w-100 pa3">
          <p>Mason starter kit</p>
          <p>This project is a simple bare-bones application that's set up for you to deploy your Mason features into.</p>
          <p>This is just custom HTML. Mason features live right alongside any of your frontend custom code.</p>
        </div>
        <div className="w-100 bg-black flex items-center justify-center pa3">
          <Canvas id="5c8a9b48b8c8d600032644ad" />;
        </div>
      </div>
    );
  }
}

export default App;
