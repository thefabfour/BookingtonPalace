import React from 'react';
import axios from 'axios';
import classes from './App.module.css'

import CategoryControl from './categoryButtons/CategoryControl';
import CategoryGraphs from './categoryGraphs/CategoryGraphs';
import UserReviews from './userReviews/UserReviews';
import Modal from './modal/Modal';
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
      reviewRatings: [],
        showModal: false,
    };

  }

  componentDidMount() {
    axios.get('/api/listing/reviews')
      .then((response) => {
        console.log(response);
        this.setState({
          reviews: response.data.all_reviews,
          categories: response.data.review_categories,
          reviewRatings: response.data.review_ratings,
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
      <div className={classes.container}>
        Hi from App!
        <CategoryGraphs ratings={this.state.reviewRatings} />
        <CategoryControl categories={this.state.categories}/>
        <UserReviews reviews={this.state.reviews}/>
        <Modal show={this.state.showModal} close={this.closeModal.bind(this)}>
          <Modal.Header >
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          {/* <ShowAll reviews={this.state.reviews} categories={this.state.categories} ratings={this.state.reviewRatings}/> */}
        </Modal>
    <button type="button" onClick={this.handleClick.bind(this)}> Show all reviews</button>

      </div>
    );
  }
}

export default App;
