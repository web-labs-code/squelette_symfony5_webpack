/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app_backoffice.scss';
import './styles/style_backoffice.css';
// start the Stimulus application
import './bootstrap';

// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';