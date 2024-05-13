import React from "react";
class Userclass extends React.Component{

    constructor (props)
    {
        super(props);

        this.state={
            name:"DUMMY",
            location:"Default",
        };
        // console.log("child consructor");
    }
   async componentDidMount()
    {
        // console.log("component did mount")
        const data=await fetch("https://api.github.com/users/Meenakumari106");
        const json=await data.json();
        this.setState({
            userInfo:json,
        });
        console.log(json)
    }
    render()
    {
        // console.log("child render");
        const {name,location}= this.state.userInfo;
        // const {count2}=this.state;
        return (
            <div className="user-card"> 
            {/* <h2>count:{this.state.count}</h2> */}
            {/* <button onClick={()=>
            {
                this.setState(
                    {
                        count:this.state.count+1
                    }
                );
            }}>Count Increase</button> */}
            {/* <h2>count2:{this.state.count2}</h2> */}
            <h1>Name:{name}</h1>
            <h1>Location:{location}</h1>
            <h1>Contact:madhammeenakumari@gmail.com</h1>
            </div>
           
        )
    }
}
export default Userclass;