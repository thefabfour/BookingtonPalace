import React from 'react';
import axios from 'axios';

import CategoryControl from './categoryButtons/CategoryControl';
import CategoryGraphs from './categoryGraphs/CategoryGraphs';
import UserReviews from './userReviews/UserReviews';
import ShowAll from './showAll/ShowAll'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      categories: [
          { title: 'Central location', count: 1 },
          { title: 'Responsive host', count: 2 },
          { title: 'Helpful host', count: 2 },
          { title: 'Great restaurants', count: 2 },
          { title: 'Easy check-in', count: 4 },
          { title: 'Friendly host', count: 2 },
          { title: 'Great views', count: 1 },
          { title: 'Thoughtful touches', count: 1 },
          { title: 'Great location', count: 1 }
      ],
      reviewRatings: [
          {title: "Number Reviews", rating: 4.4},
          {title: "Cleanliness", rating: 4.5},
          {title: "Communication", rating: 5},
          {title: "Check-In", rating: 4.2},
          {title: "Accuracy", rating: 4.7},
          {title: "Looation", rating: 4},
          {title: "Value", rating: 5},
        ],
        showModal: false,
    };

  }

  componentDidMount() {
    axios.get('/api/listing/reviews')
      .then((response) => {
        console.log(response);
        this.setState({
          reviews: response.data.all_reviews,
        })
        console.log('the state is now', this.state)
      })
      .catch((error) => {
        if (!error.status) {
          return;
        }
      });
  }

  handleClick() {
    this.setState({
      showModal: true
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }


  render() {
    return (
      <div>
        Hi from App!
        <CategoryGraphs ratings={this.state.reviewRatings} />
        <CategoryControl categories={this.state.categories}/>
        <UserReviews reviews={this.state.reviews}/>

        <ShowAll show={this.state.showModal} close={this.closeModal.bind(this)}>
          <CategoryGraphs ratings={this.state.reviewRatings} />
          <CategoryControl categories={this.state.categories}/>
          <UserReviews reviews={this.state.reviews}/>
        </ShowAll>
    <button type="button" onClick={this.handleClick.bind(this)}> Show all reviews</button>

      </div>
    );
  }
}

export default App;
