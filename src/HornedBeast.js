import React from 'react';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  };

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render () {
    return (
      <article>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title} onClick={this.handleLikes}/>
          <Card.Body>
            <Card.Title><h2>{this.props.title}</h2></Card.Title>
            <Card.Text>
              Like this horned beast!
            </Card.Text>
            <Card.Text>
              {this.state.likes} 💚
            </Card.Text>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </article>
    )
  }
}

export default HornedBeast;

