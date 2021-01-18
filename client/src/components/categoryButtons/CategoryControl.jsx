import React from 'react';
import ButtonsDisplay from './ButtonsDisplay.jsx'

class categoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numCategories: undefined,
      isLongList: false,
      showMoreButton: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState(
      { numCategories: this.props.categories.length }, () => {
        if (this.state.numCategories >= 5) {
          this.setState({
            isLongList: true });
        }
      },
    );
  }

  handleClick() {
    this.setState({ showMoreButton: !this.state.showMoreButton }, () => {});
  }

  formatCategories() {
    if (this.state.isLongList && !this.state.showMoreButton) {
      const shortCategoryList = this.props.categories.slice(0, 4);
      return <ButtonsDisplay categories={shortCategoryList} />
    } else {
      return <ButtonsDisplay categories={this.props.categories} />
    }
  }

  formatShowButton() {
    if (this.state.isLongList) {
      return <button onClick={this.handleClick}> {this.state.showMoreButton ? 'Show Less' : 'Show More'} </button>
    } else {
      return <div></div>
    }
  }


  render() {
    let catsRendered = this.formatCategories();
    let showButton = this.formatShowButton();

    return (
      <div>
        {catsRendered}
        {showButton}
      </div>
    );
  }
}

export default categoryControl;
