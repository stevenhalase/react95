import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import StoryContainer from '../components/StoryContainer/StoryContainer';
import Button from '../components/Button/Button';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => (
    <StoryContainer>
      <Button onClick={action('clicked')}>Welcome</Button>
    </StoryContainer>
  ))
