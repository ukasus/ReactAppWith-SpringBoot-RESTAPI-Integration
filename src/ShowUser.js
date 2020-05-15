import React,{Component} from 'react';

class showUser extends Component{
    render()
    {
        
        return(
            <tr>
               <td>{this.props.userInfo.firstName}</td>
               <td>{this.props.userInfo.lastName}</td>
               <td>{this.props.userInfo.email}</td>
               <td>{this.props.userInfo.phone}</td>
            </tr>
                 
            
        )
    }
}

export default showUser