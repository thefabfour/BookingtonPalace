import React from 'react';
import axios from 'axios';
import classes from './App.module.css'

import CategoryControl from './categoryButtons/CategoryControl';
import CategoryGraphs from './categoryGraphs/CategoryGraphs';
import UserReviews from './userReviews/UserReviews';
import ShowAll from './showAll/ShowAll'
import ListingHeader from './ListingHeader';

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
        { title: 'Great location', count: 1 },
      ],
      reviewRatings: [],
      showModal: false,
      numReviews: undefined,
      overallRatingAvg: undefined,
      categorySelected: {
        title: undefined, count: undefined,
      },
    };
  }

  componentDidMount() {
    axios.get('/api/listing/reviews')
      .then((response) => {
        this.setState({
          reviews: response.data.all_reviews,
          categories: response.data.review_categories,
          reviewRatings: response.data.review_ratings,
          numReviews: response.data.num_reviews,
          overallRatingAvg: response.data.overall_rating_avg,
        });
      })
      .catch((error) => {
        if (!error.status) {
          return;
        }
      });
  }

  handleClick() {
    this.setState({
      showModal: true,

    });
  }

  handleCategorySelect() {
    const categoryIndex = event.target.id;
    const categorySelected = this.state.categories[categoryIndex]
    this.setState({
      categorySelected: categorySelected,
    });
    this.handleClick();
  }

  closeModal() {
    this.setState({
      showModal: false,
      categorySelected: {
        title: undefined, count: undefined,
      },
    });
  }

  render() {
    let reviewsInModal;

    if (!this.state.categorySelected.title) {
      reviewsInModal = this.state.reviews
    } else {
      // eslint-disable-next-line max-len
      reviewsInModal= this.state.reviews.filter(review => review.category === this.state.categorySelected.title)
      console.log(reviewsInModal);
    }

    return (
      <div className={classes.container}>
        <ListingHeader
        overallRatingAvg={this.state.overallRatingAvg}
        numReviews={this.state.numReviews}
        />
        <div>
          <CategoryGraphs ratings={this.state.reviewRatings} isForModal={false}/>
          <CategoryControl categories={this.state.categories}
            clicked={this.handleCategorySelect.bind(this)}/>
          <UserReviews reviews={this.state.reviews}/>

          <ShowAll show={this.state.showModal} close={this.closeModal.bind(this)}
          categorySelected={this.state.categorySelected} overallRatingAvg={this.state.overallRatingAvg} numReviews={this.state.numReviews}>
            <CategoryGraphs ratings={this.state.reviewRatings} isForModal={true}/>
            <CategoryControl categories={this.state.categories}
            clicked={this.handleCategorySelect.bind(this)}/>
            <UserReviews reviews={reviewsInModal} dummyFunc={() => {}} />
          </ShowAll>

          <button className={classes.showAllBtn} type="button" onClick={this.handleClick.bind(this)}> Show all reviews</button>
        </div>
      </div>
    );
  }
}

export default App;

// export default function App() {
//   const [reviews, setReviews] = useState([]);
//   const [categories, setCategories = useState([
//     { title: 'Central location', count: 1 },
//     { title: 'Responsive host', count: 2 },
//     { title: 'Helpful host', count: 2 },
//     { title: 'Great restaurants', count: 2 },
//     { title: 'Easy check-in', count: 4 },
//     { title: 'Friendly host', count: 2 },
//     { title: 'Great views', count: 1 },
//     { title: 'Thoughtful touches', count: 1 },
//     { title: 'Great location', count: 1 },
//   ]);
//   const [reviewRatings, setReviewRatings] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [numReviews, setNumReviews] = useState(undefined);
//   const [overallRatingAvg, setOverallRatingAvg] = useState(undefined);
//   const [categorySelected, setCategorySelected] = useState({
//     title: undefined, count: undefined,
//   });

//   useEffect(() => {
//     if (categories.length >= 5) {
//       setIsLongList(true);
//     }
//   }, []);



//   return(

//   )
// }
