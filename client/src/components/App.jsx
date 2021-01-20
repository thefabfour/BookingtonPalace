import React from 'react';
import axios from 'axios';
import CategoryControl from './categoryButtons/CategoryControl.jsx'
import Modal from './modal/Modal'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      users: [],
      categories: [],
      showModal: false,
    };

  }

  componentDidMount() {
    axios.get('/api/listing/reviews')
      .then((response) => {
        console.log(response);
        this.setState({reviews: response.data})
        console.log('the state is now', this.state)
      })
      .catch(function(error) {
        if (!error.status) {
          // network error
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
        <Modal show={this.state.showModal} close={this.closeModal.bind(this)}>
          <div> Hi from modal</div>
        </Modal>
    <button type="button" onClick={this.handleClick.bind(this)}> Show all reviews</button>

      </div>
    );
  }
}

export default App;


