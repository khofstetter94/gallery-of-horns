import React from 'react';
import HornedBeast from './HornedBeast';
import'./Main.css';

class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((beast, idx) => {
      return <HornedBeast
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        key={idx}
        handleOnShowModal={this.props.handleOnShowModal}
        />
    });

    return (
      <main>
        {beasts}
      </main>
    )
  }
}

export default Main;

