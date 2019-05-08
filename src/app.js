import { render } from 'react-dom';
import Root from './root';
import store from './store';
import 'whatwg-fetch';

render(<Root store={store}/>, document.getElementById('app'));