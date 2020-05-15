import React,{Component} from 'react';
import ShowUser from './ShowUser.js';
import {Link} from 'react-router-dom';

class Table extends Component{


render()
    {
        var userData=this.props.userData
        return(
            <div id='div-table'>
               
               <table>
                   <thead>
                       <tr>
                           <th>First Name</th>
                           <th>Last Name</th>
                           <th>Email</th>
                           <th>Phone Number</th>
                       </tr>
                   </thead>
                   <tbody>
                       
                        {  userData.map(user=>
                            <ShowUser key={user.email} userInfo={user}></ShowUser>
                            )
                        }
                       
                   </tbody>
               </table>
               
               <Link to="/addUser" id="add-user-button" class="button" >Add User</Link>

            </div>


        )
    }
}
export default Table;