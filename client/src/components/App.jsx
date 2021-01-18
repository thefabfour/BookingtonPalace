import React from 'react';
import axios from 'axios';
import CategoryControl from './categoryButtons/CategoryControl.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      users: [],
      categories: [
        {title: "Responsive host",
        count: 2},
        {title: "Great location",
        count:5},
        {title: " Helpful host",
        count: 12},
        {title: "Comfortable beds",
        count: 12},
        {title: "Easy check-in",
        count: 15},
        {title: "Great views",
        count: 17},
        {title: "A quiet neighborhood",
        count: 1},
        {title: "Central location",
        count: 19},
        {title: "Thoughtful touches",
        count: 12}
      ]
    };

     // bind statements go here

  }

  componentDidMount() {
    axios.get('/api/listing/reviews')
      .then((response) => {
        // console.log(response);
        this.setState({reviews: response.data})
        // console.log('the state is now', this.state)
      })
      .catch(function(error) {
        if (!error.status) {
          // network error
        }
      });

    axios.get('/api/users')
      .then((users) => {
        // console.log(users)
        this.setState({users: users.data})
        // console.log('the state is now', this.state)
      })
      .catch(function(error) {
        if (!error.status) {
          // network error
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

