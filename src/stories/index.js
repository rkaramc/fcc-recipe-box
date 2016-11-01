import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import { RecipeBox, RKARAMCH_RECIPEBOX, RECIPE_SAMPLES } from '../recipe-box';
import RecipeList from '../recipe-box/RecipeList';
import Recipe from '../recipe-box/Recipe';
import RecipeDetails from '../recipe-box/RecipeDetails';
import RecipeEditor from '../recipe-box/RecipeEditor';
import ListEditor from '../recipe-box/ListEditor';

import './index.scss';

var recipes = RECIPE_SAMPLES();
var recipe = recipes[0];

storiesOf('RecipeBox', module)
  .add('recipe box', () => (
    <RecipeBox
      recipes={recipes}
      />
  ))
  .add('list of recipes', () => (
    <RecipeList
      recipes={recipes}
      onEdit={action('edit-recipe')}
      onDelete={action('delete-recipe')}
      />
  ))
  .add('recipe title', () => (
    <Recipe key={recipe.id} recipe={recipe}
      onEdit={action('edit-recipe')}
      onDelete={action('delete-recipe')}
      />
  ))
  .add('recipe details', () => (
    <RecipeDetails recipe={recipe}
      onEdit={action('edit-recipe')}
      onDelete={action('delete-recipe')}
      />
  ))
  .add('recipe editor', () => (
    <RecipeEditor
      key={recipe.id}
      recipe={recipe}
      onClose={action('close-editor')}
      onChange={action('update-recipe')} />
  ))
  .add('list editor', () => (
    <ListEditor
      title="List"
      list={recipe.method}
      onChange={action('update-list')} />
  ));
