import React from 'react';
import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {

  render () {
    return (
      <article>
        <Card style={{ width: '28rem' }}>
          <Card.Img
            variant="top"
            src={this.props.image_url}
            alt={this.props.title}
            title={this.props.title}/>
          <Card.Body>
            <Card.Title><h2>{this.props.title}</h2></Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </article>
    )
  }
}

export default SelectedBeast;

