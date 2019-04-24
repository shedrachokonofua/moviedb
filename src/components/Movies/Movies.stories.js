import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { action } from '@storybook/addon-actions';
import reducedMovies from '../../fixtures/reducedMovies';
import Movies from './Movies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  error: false,
  loadingMovies: false,
  movies: reducedMovies
});

const withProvider = (story) => (
  <Provider store={store}>
    { story() }
  </Provider>
);

storiesOf('Movies', module)
  .addDecorator(withProvider)
  .addDecorator(StoryRouter())
  .addDecorator(story => <div style={{ padding: '20px', width: '50%' }}>{story()}</div>)
  .add('default', () => <Movies loadMovies={() => action('Dispatched Load Movies')}/>)