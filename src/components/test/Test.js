import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  ////////////////////////////////////////////
  ///////// LIFECYCLE METHODS ////////////////
  ////////////////////////////////////////////

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // // when something updates or component updates such as state
  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // // when your component receives new properties this will run
  // // going away with react 17
  // // turning into static getDerivedStateFromProps(nextProps, previousState)
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps');
  // }

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
