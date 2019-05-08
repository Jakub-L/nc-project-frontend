import React, { Component } from 'react';
import './styles/App.css';
import { PinMap, NavBar, LoadingScreen } from './components';

class App extends Component {
  state = {
    loading: true,
  };

  endLoading = () => {
    this.setState({ loading: false });
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="App">
        {loading ? <LoadingScreen /> : null}
        {!loading ? <NavBar /> : null}
        <PinMap endLoading={this.endLoading} loading={loading} />
      </div>
    );
  }
}

export default App;
