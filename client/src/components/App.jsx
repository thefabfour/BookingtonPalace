import React from 'react';
import axios from 'axios';
import CategoryControl from './categoryButtons/CategoryControl.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      users: [],
      categories: [],
    };
  }

  componentDidMount() {
    axios.get('/api/listing/reviews')
      .then((response) => {
        console.log(response);

        this.setState({
          reviews: response.data,
        })
        console.log('the state is now', this.state)
      })
      .catch((error) => {
        if (!error.status) {
          return;
        }
      });
  }

  render() {
    return (
      <div>
        Hi from App!
        <CategoryControl categories={this.state.categories}/>

      </div>
    );
  }
}

export default App;


