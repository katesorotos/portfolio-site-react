import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Index from './containers/Index/Index';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Index/>
        </Layout>
      </div>
    );
  }
}

export default App;
