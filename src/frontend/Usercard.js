import React, { Component } from "react";
import picture from '../images/thor.PNG';
import axios from 'axios';
class UserCards extends Component {
    constructor() {
        super();
        this.state = {};
    }
    uppercase = word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    componentDidMount = async () => {
        //check local token or something
        // const name = this.props.location.search.split("name=")[1];
        console.log(this.props);
        // const res = await axios({
        //     method: "GET",
        //     url: "http://localhost:4500/playerProfile/" + name
        // });
        // this.state = res.data.data.docs[0];
        // console.log("userobjectsas:", this.state);
    }
    render() {
        // this.useEffect()
        return (
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
                        {this.state.userName}
                    </h5>
                    <p className="card-text">
                        {"Ahmed"}
                    </p>
                </div>
            </div>
        );
    }
}

export default UserCards;
