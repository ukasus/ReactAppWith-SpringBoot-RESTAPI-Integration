import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class addUser extends Component{
    updateUser(event){
        
        const user={
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone
        }
        axios.post("http://restapibyuk.herokuapp.com/addUser",user)
       


    }
    render()
    {
        return(
            <div id="div-input-form">
                
                <form >
                    <input type="text" name="firstName"  placeholder="First Name" onChange={event=>this.firstName=event.target.value}></input>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={event=>this.lastName=event.target.value}></input>
                    <input type="text" name="email" placeholder="Email" onChange={event=>this.email=event.target.value}></input>
                    <input type="text" name="phone" placeholder="Phone Number" onChange={event=>this.phone=event.target.value}></input><br></br>
                    
                </form>
                <Link to="/" class="button" id="submit-detail-button" onClick={
                    this.updateUser.bind(this)
                     }>Submit Details</Link>
                
            </div>
        )
    }
}

export default addUser