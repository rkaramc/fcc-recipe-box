import React, { Component } from 'react';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

import RecipeList from './RecipeList';
import RecipeEditor from './RecipeEditor';
import { RKARAMCH_RECIPEBOX } from './RecipeData';

export class RecipeBox extends Component {
  state = {
    recipes: this.props.recipes || JSON.parse(localStorage.getItem(RKARAMCH_RECIPEBOX)),
    editing: undefined,
  }
  saveState = (recipes, editing = undefined) => {
    this.setState({
      recipes: recipes,
      editing: editing,
    })
    localStorage.setItem(RKARAMCH_RECIPEBOX, JSON.stringify(recipes));
  }
  addRecipe = () => {
    var newRecipe = { id: Date.now(), name: "New Recipe", ingredients: [""], method: [""] };
    this.editRecipe(newRecipe);
  }
  editRecipe = (recipe) => {
    var newRecipe = Object.assign({}, recipe);
    var isNewRecipe = true;
    var recipes = this.state.recipes.map((element) => {
      if (element.id === recipe.id) {
        isNewRecipe = false;
        return newRecipe;
      } else {
        return element;
      }
    });
    if (isNewRecipe) {
      recipes = [...recipes, newRecipe];
    }
    this.saveState(recipes, newRecipe);
  }
  deleteRecipe = (recipe) => {
    var recipes = this.state.recipes.filter((element) => element !== recipe);
    this.saveState(recipes);
  }
  closeEditor = (e) => {
    this.saveState(this.state.recipes);
  }
  onChange = (recipe) => {
    this.editRecipe(recipe);
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Recipe Box</a>
            </div>
            <div className="navbar-header navbar-right">
            <button type="button" className="btn btn-primary navbar-btn"
              onClick={this.addRecipe}
              >Add Recipe</button>
            </div>
          </div>
        </nav>
        <div className="content-area">
          <RecipeList recipes={this.state.recipes}
            onEdit={this.editRecipe}
            onDelete={this.deleteRecipe}
            />
          {this.state.editing ?
            <div>
              <ModalContainer onClose={this.closeEditor}>
                <ModalDialog width="70%" onClose={this.closeEditor}>
                  <RecipeEditor key={this.state.editing.id}
                    recipe={this.state.editing}
                    onChange={this.onChange} />
                </ModalDialog>
              </ModalContainer>
            </div>
            : null}
        </div>
      </div>
    );
  }
}
