import React from 'react';
import HornedBeast from './HornedBeast';
import goat from './img/goat.jpg';
import rhino from './img/rhino.jpg';

class Main extends React.Component {
  render() {
    return (
      <main>
        <article>
          <HornedBeast title="Goat" imageUrl={goat} description="Goats have two horns"/>
          <HornedBeast title="Rhino" imageUrl={rhino} description="A rhino has two horns"/>
        </article>
      </main>
    )
  }
}

export default Main;
