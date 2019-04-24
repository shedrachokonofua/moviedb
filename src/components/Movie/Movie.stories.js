import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { action } from '@storybook/addon-actions';
import Movie from './Movie';

const mockData = {
  title: 'The Godfather',
  posterUrl: 'http://image.tmdb.org/t/p/w185/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
  overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
  rating: 8.6,
  releaseYear: '1972',
  length: 120
}

storiesOf('Movie', module)
  .addDecorator(StoryRouter())
  .addDecorator(storyFn => <div style={{ margin: '20px', width: '50%' }}>{storyFn()}</div>)
  .add('default', () => <Movie data={mockData}/>);