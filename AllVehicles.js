import React,{Component} from "react";
import axios from "axios";
import Train from '../images/Car logo.jpg'
import '../App.css';
import {Link} from 'react-router-dom';
//import Package from ".../src/Package";
//import Package from "../../../TourPackage/BACKEND/models/Package";



export default class AllVehicle extends Component{


   constructor(props){

       super(props);

       this.state={

        vehicles:[]
       };

   }
  componentDidMount(){

   this.retriveVehicles();
  }
  retriveVehicles(){

   axios.get("http://localhost:8070/vehicle/all").then(res=>{

      if(res.data.success){
          this.setState({

            vehicles:res.data.existingVehicles

          });

          console.log(this.state.vehicles)

      }


   })



  }


 //Filter /Search Mechod
 filterContent(vehicles,searchTerm){

    const results=vehicles.filter((_vehicles)=>vehicles.name.toLowerCase().includes(searchTerm));
    this.setState({vehicles:results});

 }  

  
  handleTextSearch=(e)=>{

     const searchTerm=e.currentTarget.value;
     axios.get("http://localhost:8070/vehicle/all").then(res=>{

      if(res.data.success){
         this.filterContent(res.data.existingVehicles,searchTerm)
      }
  });

}; 

 


onDelete(id){

   fetch(`http://localhost:8070/vehicle/delete/${id}`,{

         method:`DELETE`




   }).then((result)=>{

       result.json().then((resp)=>{

         console.warn(resp)
         alert("Deleted Succsessfull")
         this.retriveVehicles()

       })


   })
  


}
  

 render(){

    return(

     //<i class="fa-solid fa-plane-departure"></i>

      <div class="p-3 mb-2 bg-dark text-white">
      <div className="container">  
      
      <div class="text-center"><img class="img-fluid" src={Train} height={100} width={400}  alt="Card image cap" /></div>
      <div className="row">
       <div className="col-lg-9 mt-2 mb-2">
          <h3 className="Ball"><strong>Search owner's name here </strong></h3>
          

       </div>
       
       <div className="col-lg-3 mt-2 mb-2" class="text-center">
          
        
             <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchTerm"
              onChange={this.handleTextSearch}
             
             ></input>


       </div>
     
       
     </div>

     <br></br>
      <table class="table table-striped table-dark">
      <thead>
      <tr>
           <th scope="col">Index</th>
           <th scope="col">Owner's Name</th>
           <th scope="col">NIC Number</th>
           <th scope="col">Vehicle Category</th>
           <th scope="col">Vehicle Reg Number</th>
           <th scope="col">Address</th>
           <th scope="col">Mobile Number</th>
           <th scope="col">Action</th>
        
          
  
      </tr>
     </thead>
     <tbody>

       {this.state.vehicles.map((vehicles,index)=>(

        <tr>
          <th scope="row">{index+1}</th>
          <td class="bg-danger">{vehicles.name}</td>
          <td>{vehicles.nic}</td>
          <td class="bg-danger">{vehicles.vehiCateg}</td>
          <td>{vehicles.vehiNum}</td>
          <td class="bg-danger">{vehicles.address}</td>
          <td>{vehicles.phone}</td>


          <td>
          <a className="btn btn-success"   href = {`/UpdateVehicle/${vehicles._id}`}>Update</a>&nbsp;&nbsp;
                               

         <button  type="button" class="btn btn-danger"  onClick={()=>this.onDelete(vehicles._id)}> <i className="fa-solid fa-trash-can "></i>&nbsp;&nbsp;Delete Vehicle&nbsp;&nbsp;&nbsp;</button>
        </td>
        
    
         
    


        </tr>
        

       ))}



     </tbody>



     </table>

      




     <a href="/man" class="btn btn-secondary"><strong>Back to home</strong></a>&nbsp;&nbsp;
      
      

      </div>

    </div>

    ) 
 }

 }