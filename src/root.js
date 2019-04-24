import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Movies from './components/Movies';
import Movie from './components/Movie';

const hasMovie = (state, movieId) => Object.keys(state.movies).includes(movieId);

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={Movies} />
      <Route path='/movie/:id' render={(props) => {
        const id = props.match.params.id;
        if(!hasMovie(store.getState(), id)) return <Redirect to='/'/>;
        return <Movie {...props} />;
      }}/>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root