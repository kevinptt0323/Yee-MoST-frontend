import React from 'react';
import { render } from 'react-dom';
import Container from './components/Container';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render( <Container></Container>, document.getElementById('container') );
