import { render } from 'react-dom';
import Root from './root';
import store from './store';

render(<Root store={store}/>, document.getElementById('app'));