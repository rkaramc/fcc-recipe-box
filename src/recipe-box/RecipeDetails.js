import React, { Component } from 'react';
import ListViewer from './ListViewer';

class RecipeDetails extends Component {
  createListItem(item, index) {
    return (
      <li key={index}>{item}</li>
    );
  }
  render() {
    return (
      <div className="recipe-details well">
        <div className="recipe-ingredients">
          <ListViewer
            title="Ingredients"
            list={this.props.recipe.ingredients} />
        </div>
        <div className="recipe-method">
          <ListViewer
            title="Method"
            list={this.props.recipe.method} />
        </div>
      </div>
    );
  }
}

export default RecipeDetails;
