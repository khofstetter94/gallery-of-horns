import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import'./Main.css';

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hornFilter: NaN
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let selected = parseInt(event.target.selected.value)
    this.setState({
      hornFilter: selected,
    });
  }

  render() {
    let data = this.props.data.filter(beast => {
      if(isNaN(this.state.hornFilter)){
        return true;
      }
      if(this.state.hornFilter === beast.horns){
        return true;
      }
      return false;
    })

    let beasts = data.map((beast, idx) => {
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>View beasts based on their number of horns</Form.Label>
          <Form.Group>
            <p>Number of horns:</p>
            <Form.Select name="selected">
              <option value="all">view all</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
        {beasts}
      </main>
    )
  }
}

export default Main;

