// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.


import React from 'react';
import { render } from 'react-dom';
import Provider from '../components/Provider';
import Library from '../components/Library';

render(<Provider>
          <Library />
       </Provider>,
   document.querySelector('#root')
);