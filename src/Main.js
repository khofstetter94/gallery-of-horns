import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import'./Main.css';

class Main extends React.Component {
  render() {
    let beasts = []
    data.map((beast, idx) => {
      beasts.push(
        <HornedBeast
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        key={idx}
        />
      )
      return beast;
    })
    return (
      <main>
        {beasts}
      </main>
    )
  }
}

export default Main;

