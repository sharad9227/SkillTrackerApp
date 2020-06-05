import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
const API_URL="http://localhost:8080"
class signUp extends Component {
    constructor() {
        super();

        this.state = {
            emailId: '',
            password: '',
            fullName: '',
            hasAgreed: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }





   signUpAction = e => {
    e.preventDefault();
console.log("submitted");
axios.post('http://localhost:8080/testjpa_war_exploded/api/register', this.state).then(response => {
if(response.data!=null)
{
    alert("Hello "+this.state.fullName +"!" + "You are now registered on our portal");
    alert("Please sign in with your credentials");
}
else
{
alert("User not Registed:Error");


}
})
.catch(error =>{
    console.log(error);
    alert(error);
})



}


        
    

    render() {
        return (
        <div className="FormCenter">
            <form  onSubmit={this.signUpAction}  className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="emailId" value={this.state.emailId} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20"  type="submit" >Sign Up</button> 
                  
                  
                  
                  <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default signUp;