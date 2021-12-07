import React, {Component} from 'react';
import logo from '../images/thor.PNG'
import { FaUser } from 'react-icons/fa';
import './Header.css';
import {Link, BrowserRouter as Router} from 'react-router-dom';

class Header extends Component{
    render(){
    return(
        <div className="header" style={{width: "100%", backgroundColor:"#34495E", height: 60, display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"90%", alignItems:"center"}}>
            <div style={{display:"flex", alignItems:"center"}}>
            <img style={{width:100, height: 50}} src={logo} />
            <text style={{marginLeft: 10, fontSize: 30, fontWeight:"bold", color:"white"}}>God of War</text>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:120}}>
            <FaUser className="toggle_button" onClick={this.props.drawerEvent} style={{height:60, color:"white"}} />
                <Link to="/admin"><button class="btn btn-outline-secondary"><text style={{color:"white", fontWeight:"bold"}}>admin</text></button></Link>
           </div>
            </div>
        </div>
    );
    }

}

export default Header;