import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import './App.css';
import Card from './Components/Card';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

class App extends Component {
  state = {
    field: "",
    temp: "",
    user: []
  }




  handleChange = (e) => {
    this.setState({ field: e.currentTarget.value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({
      field: "",
      temp: this.state.field
    });
      {/* Fetching Data */}
    const { data: user } = await axios.get(`https://api.github.com/users/${this.state.field}`);
    this.setState({ user });

  }


  render() {
    const { user , field , temp} = this.state;
    const {handleChange , handleSubmit} = this;

    return (
      <div className="App mt-4">

        
        {/* Navbar with a searchbox */}
        <Navbar
        field={field}
        submit={handleSubmit}
        change={handleChange}
        />

        {/* Display Card */}
        {temp=="" ? <About/> : <Card
          avatar={user.avatar_url}
          name={user.name}
          bio={user.bio}
          link={user.html_url}      
        /> } 
        

        {/* Footer */}
        <Footer/>

      </div>
    );
  }
}

export default App;