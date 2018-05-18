import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import StoryContainer from '../components/StoryContainer/StoryContainer';
import Button from '../components/Button/Button';
import StoryIcon from '../components/StoryIcon/StoryIcon';
import Window from '../components/Window/Window';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images16 = importAll(require.context('../assets/images/icons/16', false, /\.(png|jpe?g|svg)$/));
const images32 = importAll(require.context('../assets/images/icons/32', false, /\.(png|jpe?g|svg)$/));

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => (
    <StoryContainer>
      <Button onclickevent={action('clicked')} text="Welcome" />
    </StoryContainer>
  ))
  .add('with image', () => (
    <StoryContainer>
      <Button onclickevent={action('clicked')} text="Options" image="applications-utilities" />
    </StoryContainer>
  ))
  .add('with bold', () => (
    <StoryContainer>
      <Button onclickevent={action('clicked')} text="Start" image="start-here" bold={true} />
    </StoryContainer>
  ))

storiesOf('Window', module)
  .add('with title', () => (
    <StoryContainer>
      <Window title="Online Services" />
    </StoryContainer>
  ))
  .add('without title', () => (
    <StoryContainer>
      <Window />
    </StoryContainer>
  ))
  .add('with icon', () => (
    <StoryContainer>
      <Window title="Online Services" icon="folder-open" />
    </StoryContainer>
  ))

storiesOf('Icons', module)
  .add('16px', () => (
    <StoryContainer>
      {Object.keys(images16).map((img, ind) => {
        return (
          <StoryIcon icon={images16[img]} text={img.replace('.png', '')} />
        )
      })}
    </StoryContainer>
  ))
  .add('32px', () => (
    <StoryContainer>
      {Object.keys(images32).map((img, ind) => {
        return (
          <StoryIcon icon={images32[img]} text={img.replace('.png', '')} />
        )
      })}
    </StoryContainer>
  ))
