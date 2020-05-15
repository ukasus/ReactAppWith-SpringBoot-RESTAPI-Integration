import React,{Component} from 'react';
import FrontView from './FrontView.js';
import axios from 'axios';
import Table from './Table.js';
import {Route,Switch} from 'react-router-dom';
import AddUser from './addUser.js'

var user=[]
class AppMain extends Component{
    
    constructor(props){
        super(props)
        this.state={
            userData:[],
           next:"True",
        }
        this.fetchfromSpringBoot=this.fetchfromSpringBoot.bind(this)
    }

    UNSAFE_componentWillMount()
    {
         
     axios.get("https://fathomless-falls-47870.herokuapp.com/getUser").then(res=>{
       user=res.data
        this.setState({
            userData:user,
            next:"True"
       });
    
    });
    }
    componentDidUpdate(){
        axios.get("https://fathomless-falls-47870.herokuapp.com/getUser").then(res=>{
       user=res.data
        this.setState({
            userData:user,
            next:"True"
       });
    
    });

    }
    fetchfromSpringBoot()
    {
      
        this.setState({
        
            next:"False"
       });
        
    }
 
  
    render(){
        
    
        return(
            
            <div >
                <h1>Welcome to React-SpringBoot-Firebase Integration App</h1>
                <Switch>
                    <Route exact path="/" >
                      <FrontView OnFetchData={this.fetchfromSpringBoot}></FrontView>
                    </Route>
                    <Route exact path="/listUsers" >
                    <Table userData={this.state.userData}></Table>
                    </Route>
                    <Route exact path="/addUser" >
                    <AddUser></AddUser>
                    </Route>
 
                    
                   
       


                </Switch>
             
           
              
            
            
             
             
            </div>)
        
    }
}

export default AppMain