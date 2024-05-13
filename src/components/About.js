import Userclass from "./Userclass";
import User from "./user";
import { Component } from "react";
class About extends Component{

    constructor (props){
        super(props);
        console.log("parent constructor");
    }
    render()
    {
        console.log("parent render");
        return(
            <div className="about-page">
                {/* <h1>
                    this is about page
                </h1> */}
                <User/>
                {/* <Userclass name={"MEENAKUAMRIMADHAM"} location={"Karimnagar"}/> */}
            </div>
        );

    }

   
}
export default About;