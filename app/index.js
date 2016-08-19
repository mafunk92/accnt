import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Navpane';
import Title from './components/Titlebar';


var App = React.createClass({

   render: function () {
       return (
           <div>
               <Title></Title>
               <Nav></Nav>
           </div>
       )
   }
});

ReactDOM.render(<App/>, document.getElementById('app'));