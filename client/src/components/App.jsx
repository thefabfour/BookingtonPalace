import React from 'react';
import axios from 'axios';
import CategoryControl from './categoryButtons/CategoryControl';
import CategoryGraphs from './categoryGraphs/CategoryGraphs';
import UserReviews from './userReviews/UserReviews';
import Modal from './modal/Modal';
import classes from './App.module.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      categories: [],
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
          reviewRatings: response.data.review_ratings,
          reviewCategories: response.data.review_categories,
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
          <div> Hi from modal</div>
        </Modal>
    <button type="button" onClick={this.handleClick.bind(this)}> Show all reviews</button>

      </div>
    );
  }
}

export default App;
