import React from 'react';
import axios from 'axios';
<<<<<<< HEAD
import CategoryControl from './categoryButtons/CategoryControl.jsx'
import Modal from './modal/Modal'
=======
import CategoryControl from './categoryButtons/CategoryControl';
import UserReviews from './userReviews/UserReviews';
>>>>>>> master

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      categories: [],
      showModal: false,
    };

  }

  componentDidMount() {
    axios.get('/api/listing/reviews')
      .then((response) => {
        console.log(response);
        this.setState({ reviews: response.data.all_reviews });
        console.log('the state is now', this.state);
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
        <CategoryControl categories={this.state.categories}/>
<<<<<<< HEAD
        <Modal show={this.state.showModal} close={this.closeModal.bind(this)}>
          <div> Hi from modal</div>
        </Modal>
    <button type="button" onClick={this.handleClick.bind(this)}> Show all reviews</button>

=======
        <UserReviews reviews={this.state.reviews} />
>>>>>>> master
      </div>
    );
  }
}

export default App;
