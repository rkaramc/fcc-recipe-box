import React from 'react';
import ReactDOM from 'react-dom';
import { RecipeBox, RECIPE_SAMPLES, RKARAMCH_RECIPEBOX } from './recipe-box';
import './index.css';

var recipes = JSON.parse(localStorage.getItem(RKARAMCH_RECIPEBOX)) || RECIPE_SAMPLES();

ReactDOM.render(
  <RecipeBox recipes={recipes}/>,
  document.getElementById('recipe-box-app')
);
