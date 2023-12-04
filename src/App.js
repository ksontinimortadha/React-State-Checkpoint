import React, { Component } from 'react';
import Profile from './component/Profile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

// person class
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Ksontini Mortadha',
        bio: 'its going to happen because Im going to make it happen',
        imgSrc: 'https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-6/387776197_3828084084091347_7930266646949856607_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Lt-J9hIkFIwAX-ILbEx&_nc_ht=scontent.ftun4-2.fna&oh=00_AfB2u6wVPdHT9qbvPEGudyRO3CADAMCWcqKE736iHPPaeg&oe=656DF702',
        profession: 'Student',
      },
      show: false,
    };
  }
  
  // toggle button
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows } = this.state;
    return (
      <div className="App">
        {/* toggle button */}
          <ToggleButtonGroup type="checkbox" size="lg" defaultValue={[1, 3]} className="mb-2" style={{marginTop:'15px'}}>
            <ToggleButton variant="light"id="tbg-check-1" value={0} size="lg" onClick={this.toggleShow} style={{alignContent:'center'}}>
              <img src='https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png' alt='eye' style={{width:'25px',marginRight:'5px',marginBottom:'4px'}}></img>Show Profile
            </ToggleButton>
          </ToggleButtonGroup>
        {/* profile card */}
        {shows && <Profile person={person} />}
      </div>
        
      );
  }
}

export default App;
