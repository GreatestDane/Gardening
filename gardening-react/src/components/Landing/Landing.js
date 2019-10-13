import React from "react";
import "./Landing.css";
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)


class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        title: "THE GARDENS"
        // this.handleClick = this.handleClick.bind(this);
        }
    }

     
    handleClick() {
        // event.preventDefault();
        let taryn = prompt("Taryn is a Goddess");
        for (let i = 0; i <= 100; i++) {
            console.log(taryn)
        }
    }

    

    render() {
        return (
            <div className="landing-box container-fluid">
                <div id="landing-div" className="jumbotron bg-transparent rounded-0">
                    {/* <h1 id="landing-title">T H E    G A R D E N S</h1> */}
                    <h1 id="landing-title">{this.state.title}</h1>
                    <div className="text-center">
                        {/* <a href="/login" className="top-button btn-lg m-1 btn btn-success" onClick={()=> this.handleClick()}>Login</a> */}
                        <button className="top-button btn-lg m-1 btn btn-success" onClick={()=> this.handleClick()}>Login</button>
                        {/* <button onClick={()=> this.handleClick()}>Console Log </button> */}
                        <a href="/express_backend" className="top-button btn-lg m-1 btn btn-success">Register</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;