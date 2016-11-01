import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';

class Recipe extends Component {
  state = {
    showRecipe: false,
  }
  onClick = () => {
    this.setState({ showRecipe: !this.state.showRecipe });
  }
  onEdit = () => {
    this.props.onEdit(this.props.recipe);
  }
  onDelete = () => {
    this.props.onDelete(this.props.recipe);
  }
  render() {
    return (
      <div className="recipe-viewer panel panel-default">
        <div className="panel-heading">
          <div className="panel-title">
            <div className="recipe-name"
              onClick={this.onClick}>{this.props.recipe.name}</div>
          </div>
        </div>
        {this.state.showRecipe ?
          <div className="recipe-details panel-body">
            <RecipeDetails recipe={this.props.recipe} />
            <div>
              <span className="btn btn-danger"
                onClick={this.onDelete}>Delete</span>
              <span className="button-spacer">&nbsp;</span>
              <span className="btn btn-default"
                data-toggle="modal" data-target="#myModal"
                onClick={this.onEdit}>Edit</span>
            </div>
          </div>
          : null
        }
      </div>
    );
  }
}

export default Recipe;
