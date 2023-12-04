import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateTimeSinceMount, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTimeSinceMount = () => {
    this.setState((prevState) => ({
      timeSinceMount: prevState.timeSinceMount + 1,
    }));
  };

  render() {
    const { person } = this.props;
    const { timeSinceMount } = this.state;

    return (
        <>
      <div>
            <Card border="secondary" style={{ width: '18rem', marginLeft:'510px',marginTop:'15px',color:'#fff',background: 'rgba(255, 255, 255, 0.1)',backdropFilter: 'blur(20px)' }}>
              <Card.Img variant="top" src={person.imgSrc} alt={person.fullName} />
              <Card.Body>
                <Card.Title style={{textDecoration:'underline'}}>{person.fullName}</Card.Title>
                <Card.Text>
                  Profession: {person.profession} <br />
                  <small> {person.bio}</small>
                </Card.Text>
              </Card.Body>
            </Card>
            <small style={{color:'#fff'}}>Mounted {timeSinceMount} seconds ago</small>
          </div>
        </>
    );
  }
}

export default Profile;