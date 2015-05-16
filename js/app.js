import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import About from './components/About.js';
// import InboxHandler from './components/Inbox.js';
// import MessageHandler from './components/Message.js';
var Company = React.createClass({
  render: function() {
    return (
      <h2>NGen Labs (R)</h2>
    );
  }
});

var Inbox = React.createClass({
  render: function () {
    return (
      
        <h1>Inbox Pls</h1>

    );
  }
});

var Footer = React.createClass({
  render: function () {
    return <h2>Footer pls</h2>;
  }
});

var Message = React.createClass({
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  componentDidMount: function () {
    var id = this.props.params.id;
    // fetchMessage(id, function (err, message) {
    //   this.setState({ message: message });
    // });
      console.log('componentDidMount', id);
  },
  render: function () {
    return <h2>Message #{this.props.params.id}</h2>;
  }
});

let App = React.createClass({  
  render() {
    return (
      <div className="nav">
        <h1>App Home</h1>
        <Link to="app">Home</Link>
        <Link to="inbox">Inbox</Link>
        <Link to="about">About</Link>


        {/* this is the importTant part */}
        <RouteHandler/>
        <Footer />
      </div>
    );
  }
});

var routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="about" path="about" handler={About}/>
    <Route name="company" path="about/company" handler={Company}/>
    <Route name="inbox" path="inbox" handler={Inbox}>
      <Route path="messages/:id" handler={Message}/>
      <Route path="/archive/messages/:id" handler={Message}/>
    </Route>
    <Route name="messages2" path="messages/:id" handler={Message}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});