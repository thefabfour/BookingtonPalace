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
      reviewRatings: [
          {title: "Number Reviews", rating: 4.4},
          {title: "Cleanliness", rating: 4.5},
          {title: "Communication", rating: 5},
          {title: "Check-In", rating: 4.2},
          {title: "Accuracy", rating: 4.7},
          {title: "Looation", rating: 4},
          {title: "Value", rating: 5},
        ]
     ,
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
        <CategoryGraphs ratings={this.state.reviewRatings} />
        <CategoryControl categories={this.state.categories}/>

      </div>
    );
  }
}

export default App;


