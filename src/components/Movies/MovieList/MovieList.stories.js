import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { action } from '@storybook/addon-actions';
import MovieList from './MovieList';

const mockMovies = [
  {
    "id": "19404",
    "title": "Dilwale Dulhania Le Jayenge",
    "posterUrl": "http://image.tmdb.org/t/p/w185/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
  },{
    "id": "278", 
    "title":"The Shawshank Redemption",
    "posterUrl":"http://image.tmdb.org/t/p/w185/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg"
  },{
    "id": "238",
    "title":"The Godfather",
    "posterUrl":"http://image.tmdb.org/t/p/w185/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
  },{
    "id": "372058",
    "title":"Your Name.",
    "posterUrl":"http://image.tmdb.org/t/p/w185/xq1Ugd62d23K2knRUx6xxuALTZB.jpg"
  }
];

storiesOf('MovieList', module)
  .addDecorator(StoryRouter({
    '/movie/:id': action('Redirect to movie details')
  }))
  .addDecorator(storyFn => <div style={{ padding: '20px', width: '50%' }}>{storyFn()}</div>)
  .add('loading', () => <MovieList loading movies={[]}/>)
  .add('error', () => <MovieList error='Error loading movies.'/>)
  .add('default', () => <MovieList movies={mockMovies}/>);