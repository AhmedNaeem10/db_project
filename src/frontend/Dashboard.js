import React, { Component } from 'react';
import Header from './Header'
import CurrentEvent from './CurrentEvent';
import background from '../images/bg.jpeg';
import Backdrop from './Backdrop';
import Signup from './Signup';
import SuperTab from './SuperTab';
import axios from 'axios';
import Usercard from './Usercard';
import './Usercard.css'
import Slider from './Slider';
import picture from '../images/thor.PNG';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      sideDrawerOpen: false,
      isLogin: true,
      user: []
    };
  }
  componentDidUpdate = (prevProps) => {
    if(this.props != prevProps){
      this.componentDidMount();
    }
  }
  componentDidMount = async () => {
    const name = this.props.location.search.split("name=")[1];
    const res = await axios({
      method: "GET",
      url: "http://localhost:4500/playerProfile/" + name
    });
    this.setState({ user: [...this.state.user, ...res.data.data.docs] })
    // this.user = [res.data.data.docs[0]];
    console.log("userobjectdash:", this.user);
  }
  drawerEvent = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  }

  backdropEvent = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropEvent} />
    }
    return (
      <div>
        {/* <Usercard /> */}
        {this.state.user.map((user, index) => (
          <div style={{ backgroundImage: `url(${background})` }}>
          <Header drawerEvent={this.drawerEvent} />
          <div style={{ display: "flex", width: "95%", justifyContent: "space-between", marginTop: 40 }}>
            <text></text>
            <div className="card" style={{ width: 200, backgroundColor: "white", borderRadius: 10, alignItems: "center" }}>
              <div className="avatar">
                <img
                  src={picture}
                  className="card-img-top"
                  alt=""
                />
              </div>
              <h5 className="card-title">
                {user.userName}
              </h5>
              <p className="card-text">
                {user.EMAIL}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "90%" }}>
            <CurrentEvent />
          </div>
        </div>
        <div style={{ position: "absolute", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <SuperTab show={this.state.sideDrawerOpen} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 100 }}>
          <div style={{ width: "80%" }}>
            <text style={{ color: "#ffbf00", fontSize: 20, fontWeight: "bold" }}>On Going Events</text>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "80%" }}>
            <Slider name={user.userName}/>
          </div>
        </div>
        {backdrop}
      </div>
        ))
        }
      </div>
    );
  }
}

export default Dashboard;