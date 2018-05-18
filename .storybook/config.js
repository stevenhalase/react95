import { configure, addDecorator } from '@storybook/react';
import backgroundColor from 'react-storybook-decorator-background';

addDecorator(backgroundColor(['#57a8a8', '#000000', '#ffffff']));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
