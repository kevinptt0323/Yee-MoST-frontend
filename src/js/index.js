import React from 'react';
import { render } from 'react-dom';
import Routes from './Routes';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render( <Routes />, document.getElementById('container') );
