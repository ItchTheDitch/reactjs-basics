import React from "react";

export class Home extends React.Component{
  render(){
    // let content = "";
    // if(true){
    //   content = <p>Hello!</p>
    // }
    // console.log(this.props);
    var text = "Something";
    return (
        <div>
          <p>In a new Component!</p>
          {/* { 5 == 2 ? "yes" : "No" } */}
          <p>{text}</p>
          <p>Your name is {this.props.name}, your age is {this.props.age}</p>
          <p>User Object => Name: {this.props.user.name}</p>
          <p>{this.props.user.name}</p>
          <div>
            <h4>Hobbies</h4>
            <ul>
              {/* Loop throurgh array */}
              {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby} </li>)}
            </ul>
          </div>
          <hr/>
          {this.props.childre}
        </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object
};
