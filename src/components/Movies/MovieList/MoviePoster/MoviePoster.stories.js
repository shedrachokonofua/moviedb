import React from 'react';
import { storiesOf } from '@storybook/react';
import MoviePoster from './MoviePoster';

const posterSrc = 'http://image.tmdb.org/t/p/w185/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg';

storiesOf('MoviePoster', module)
  .addDecorator(storyFn => <div style={{ width: '185px' }}>{storyFn()}</div>)
  .add('default', () => <MoviePoster title='Testing' src={posterSrc}/>)