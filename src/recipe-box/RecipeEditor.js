import React, { Component } from 'react';
import ListEditor from './ListEditor';

class RecipeEditor extends Component {
  close = () => this.props.onClose();
  updateIngredients = (list) => {
    var recipe = Object.assign({}, this.props.recipe, { ingredients: list.slice() });
    this.props.onChange(recipe);
  }
  updateMethod = (list) => {
    var recipe = Object.assign({}, this.props.recipe, { method: list.slice() });
    this.props.onChange(recipe);
  }
  editRecipeName = (e) => {
    var recipe = Object.assign({}, this.props.recipe, { name: e.target.value });
    this.props.onChange(recipe);
  }
  render() {
    return (
      <div className="recipe-editor panel panel-default">
        <div className="panel-heading">
          <div className="panel-title">
            <div className="recipe-name">
              <input type="text" className="form-control" value={this.props.recipe.name} onChange={this.editRecipeName} />
            </div>
          </div>
        </div>
        <div className="recipe-details panel-body well">
          <div className="recipe-ingredients">
            <ListEditor
              title="Ingredients"
              list={this.props.recipe.ingredients}
              onChange={this.updateIngredients} />
          </div>
          <div className="recipe-method">
            <ListEditor
              title="Method"
              list={this.props.recipe.method}
              onChange={this.updateMethod} />
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeEditor;
/*

*/