import "./styles.scss";

import template from './index.hbs';
import page404 from './pages/404';
import input from './components/input'
import field from './components/field'
import button from './components/button'
import page500 from './pages/500'
import pagePlaceholder from './components/page-placeholder'
import account from './pages/account'

document.getElementById('root').innerHTML = template();