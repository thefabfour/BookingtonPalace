import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // bind statements go here

  componentDidMount() {
    axios.get('/api/listing/reviews')
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>Hi from App!</div>
    );
  }
}

export default App;
