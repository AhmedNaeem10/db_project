import React from 'react';
import logo from '../images/thor.PNG';
import { LogoFacebook, LogoInstagram, LogoYoutube, LogoReddit } from 'react-ionicons'
import 'bootstrap/dist/css/bootstrap.min.css';
const CurrentEvent = () => {
    return (
        <div style={{ backgroundColor: "#34495E", borderRadius: 10, opacity:0.8}}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 80 }}>
                <div style={{ width: "60%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img style={{ width: 140, height: 100, marginTop: 50 }} src={logo} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <text style={{ color: "white", fontSize: 25, fontWeight: "bold", marginTop: 20 }}>Event Name Here</text>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ marginTop: 40 }}>
                                <text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>20 – 21 November 2021</text>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div>
                                <text style={{ color: "white" }}>Karachi, Pakistan</text>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ marginTop: 20 }}>
                                <text style={{ color: "white", textAlign: "center" }}>The world finals for the ultimate 2v2 CS:GO tournament culminate at Red Bull Flick Invitational Helsinki this November.</text>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div>
                                <button type="button" class="btn btn-outline-secondary" style={{ width: 200, height: 40, marginTop: 20 }}><text style={{ fontWeight: "bold", color: "white" }}>View Event</text></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 40 }}>
                <div style={{ width: "80%", marginBottom: 50, borderBottomColor: "white", borderBottomWidth: 3 }}>
                    <text style={{ color: "white" }}>The ultimate 2v2 Counter-Strike: Global Offensive tournament, Red Bull Flick first launched in 2019 with a local event in Turkey, growing to a whole new level in 2020 with a global campaign and 45,000 competitors from over 30 countries signing up. Now, Red Bull Flick is back again for 2021, seeing skilled pairs of gamers battle it out in national, regional or international online qualifiers for the chance to be crowned number one. Winners will also get to challenge their CS:GO idols in the official Pro-AM competition, the Red Bull Flick Invitational Helsinki, to conclude the season.</text>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <text style={{ color: "white" }}>Share this event!</text>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 15 }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: 200, marginBottom: 50 }}>
                    <LogoFacebook
                        color={'white'}
                        height="40px"
                        width="40px"
                        onClick={() => alert('Hi!')}
                    />
                    <LogoInstagram
                        color={'white'}
                        height="40px"
                        width="40px"
                        onClick={() => alert('Hi!')}
                    />
                    <LogoYoutube
                        color={'white'}
                        height="40px"
                        width="40px"
                        onClick={() => alert('Hi!')}
                    />
                    <LogoReddit
                        color={'white'}
                        height="40px"
                        width="40px"
                        onClick={() => alert('Hi!')}
                    />
                </div>
            </div>
        </div>
    );
}

export default CurrentEvent;