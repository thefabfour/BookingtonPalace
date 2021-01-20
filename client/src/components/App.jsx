import React from 'react';
import axios from 'axios';
import CategoryControl from './categoryButtons/CategoryControl';
import CategoryGraphs from './categoryGraphs/CategoryGraphs';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      users: [],
      categories: [],
      reviewRatings: {},
    };
  }

  componentDidMount() {
    axios.get('/api/listing/reviews')
      .then((response) => {
        console.log(response);
        this.setState({
          reviews: response.data,
          reviewRatings: response.data.review_ratings
        })
        console.log('the state is now', this.state)
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
        <CategoryGraphs ratings={this.state.reviewRatings}/>
        <CategoryControl categories={this.state.categories}/>

      </div>
    );
  }
}

export default App;


