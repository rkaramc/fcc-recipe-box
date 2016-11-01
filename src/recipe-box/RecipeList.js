import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
  recipeTitle = (recipe) => {
    return (
      <Recipe key={recipe.id} recipe={recipe}
        onEdit={this.props.onEdit}
        onDelete={this.props.onDelete}
      />
    );
  }

  render() {
    return (
      <div className="recipe-list">
        {this.props.recipes.map(this.recipeTitle)}
      </div>
    );
  }
}

export default RecipeList;
