import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { action } from '@storybook/addon-actions';
import Header from './Header';

storiesOf('Header', module)
  .addDecorator(StoryRouter())
  .addDecorator(storyFn => <div style={{ padding: '20px', width: '25%' }}>{storyFn()}</div>)
  .add('default', () => <Header title="Hello"/>)
  .add('withBack', () => <Header title="Hello" withBack/>)