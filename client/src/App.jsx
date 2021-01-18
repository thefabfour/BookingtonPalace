import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      users: []
    };

     // bind statements go here
  }

  componentDidMount() {
    axios.get('/api/listing/reviews')
      .then((response) => {
        console.log(response);
        this.setState({reviews: response.data})
        console.log('the state is now', this.state)
      })
      .then(axios.get('/api/users'))
      .then((users) => {
        console.log(users)
        this.setState({users: users.data})
        console.log('the state is now', this.state)
      })

  }

  render() {
    return (
      <div>Hi from App!</div>
    );
  }
}

export default App;
