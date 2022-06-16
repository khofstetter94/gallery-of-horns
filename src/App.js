import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Modal from 'react-bootstrap/Modal'
import data from './data.json';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showModal: false,
      modal: {}
    };
  };

  handleOnHideModal = () => {
    this.setState({
      showModal: false,
      modal: {}
    });
  };

  handleOnShowModal = (title, image_url, description) => {
    this.setState({
      showModal: true,
      modal: {
        title, image_url, description
      }
    });
  };

  render() {
    return (
      <>
        <Header/>
        <Main
          data={data}
          handleOnShowModal={this.handleOnShowModal}
        />
        <Footer/>
        <Modal
          show={this.state.showModal}
          onHide={this.handleOnHideModal}
          size="xs"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >

          <Modal.Header closeButton>
          </Modal.Header>
            <Modal.Body>
              <SelectedBeast
                title={this.state.modal.title}
                image_url={this.state.modal.image_url}
                description={this.state.modal.description}
              />
            </Modal.Body>
        </Modal>
      </>
    );
  };
};

export default App;
