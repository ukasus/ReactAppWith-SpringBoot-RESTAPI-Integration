import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class FrontView extends Component{
    constructor(props)
    {
        super(props);
        this.props=this.props
    }


    render()
    {
      
        return(
            <div id='div-button'>
                
                 <Link to="/listUsers" onClick={()=>{this.props.OnFetchData()}} class="button">View All Users</Link>
                 <Link to="/addUser" class="button">Add New User</Link>

            </div>
            
        )
    }
}

export default FrontView;