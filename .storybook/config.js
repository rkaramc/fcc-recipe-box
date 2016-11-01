import { configure } from '@kadira/storybook';
import 'bootstrap-loader';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
