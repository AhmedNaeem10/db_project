import React, { Component } from 'react';
import Header from './Header'
import CurrentEvent from './CurrentEvent';
import background from '../images/bg.jpeg';
import Backdrop from './Backdrop';
import Signup from './Signup';
import SuperTab from './SuperTab';


class Home extends Component {
  state = {
    sideDrawerOpen: false,
    isLogin: true
  };
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
    const handleLogin = (val) => {
     this.setState({isLogin: !val})
    }
    return (
      <div style={{ backgroundImage: `url(${background})` }}>
        <Header drawerEvent={this.drawerEvent} handleLogin={()=>handleLogin(this.state.isLogin)} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 100 }}>
          <div style={{ width: "90%" }}>
            {/* current event info */}
            <text style={{ color: "white", fontSize: 40 }}>God of War Ongoing Event:</text>
            <div style={{ marginTop: 20 }}>
              <text style={{ color: "white" }}>Grab a buddy and register for the online 2v2 Counter-Strike: Global Offensive tournament with a twist. Enter now!</text>
            </div>
            <CurrentEvent />
          </div>
        </div>
        <link rel={"stylesheet"} href={"./style.css"} />
        <div id="particles-js"></div>
        <script type={"text/javascript"} src={"./particles.js"}></script>
        <script type={"text/javascript"} src={"./app.js"}></script>
        <div style={{position:"absolute", height: "100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <SuperTab show={this.state.sideDrawerOpen} handleLogin={()=>handleLogin(this.state.isLogin)}/>
        </div>
        {backdrop}
      </div>
    );
  }
}

export default Home;