import React from 'react';
import ButtonsDisplay from './ButtonsDisplay.jsx'

class categoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numCategories: undefined,
      isLongList: false,
      showMoreButton: false
    };

     // bind statements go here
     this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

    this.setState(
      {numCategories: this.props.categories.length}, () => {
        if (this.state.numCategories >= 5) {
          this.setState({isLongList:true})
        }
      }
    )
  }


  handleClick() {
    // console.log('Hi from handleClick', this.state.showMoreCategories)
    this.setState({showMoreButton: !this.state.showMoreButton}, () => {

    }

    )

    // this.formatCategories(this.state.showMoreCategories)


  }

  changeView() {
const showMore = this.state.showMoreButton;

 if (showMore) {
      return <ButtonsDisplay categories={this.props.categories} />

    } else {
      return <ButtonsDisplay categories={this.props.categories} />
    }
  }


  render() {
    let catsRendered = this.changeView()

    // const showMore = this.state.showMoreBtnActive;




    return (
      <div>
        {catsRendered}
        <button onClick={this.handleClick}> {this.state.showMoreButton ? 'Show Less' : 'Show More'} </button>
      </div>
    )
  }

}



export default categoryControl;