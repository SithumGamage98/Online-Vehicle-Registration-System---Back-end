import React,{useState} from "react";
//import React,{Component} from "react"
import axios from "axios";
import pic2 from '../images/Car.png'

//import axios from "axios";
//import {setErrors} from "./../components/setErrors";
 







function AddVehicle(){

  const [name,setName] = useState(""); 
  const [nic,setNic] = useState("");
  const [vehiCateg,setCateg] = useState("");
  const [vehiNum,setNum] = useState("");
  const [address,setAddres] = useState("");
  const [phone,setMobile] = useState("");
 



  // (local function) sendData(e: any):void
  function sendData(e){
   e.preventDefault();
   
   const newVehicle={

   name,
   nic,
   vehiCateg,
   vehiNum,
   address,
   phone



   }
   axios.post("http://localhost:8070/vehicle/add",newVehicle).then(()=>{

     alert("Your Vehicle Added Successfully....!!!")
   }).catch((err)=>{

     alert(err)

   })

  }

 return(
   

   <div className="container" class="p-3 mb-2 bg-dark" >
     <div class="row">

    <form onSubmit={sendData} class="p-3 mb-2 bg-dark text-light">
    <h1 class="p-3 mb-2 bg-success text-white"><cental><strong>Please Enter Vehicle Details</strong></cental></h1><br></br>
    
     <img  src={pic2} height={600} width={500} style={{position:"absolute",top:100,right:150}} alt="Card image cap" />
    <div class="form-group col-md-6">
      <label for="uname"><strong>Owner's Name</strong></label>
      <input type="text" class="form-control" id="uname" placeholder="Enter your name here"
      onChange={(e)=> {

        setName(e.target.value);

       } }/>
  
    </div><br></br>
    
    <div  class="form-group col-md-6">
      <label for="NIC"><strong>NIC</strong></label>
      <input type="NIC" class="form-control" id="email" placeholder="986766565V"
       onChange={(e)=> {

        setNic(e.target.value);

       } }/>
      
      
  
    </div><br></br>
  
    <div class="form-group col-md-6">
      <label for="Categ"><strong>Vehicle Category</strong></label>
      <input type="text" class="form-control" id="Mobi" placeholder="Car/Van/Bike/Lorry"
      onChange={(e)=> {

        setCateg(e.target.value);

       } }/>
      
  
    </div><br></br>

    <div class="form-group col-md-6">
      <label for="VehNumber"><strong>Vehicle Registered Number</strong></label>
      <input type="text" class="form-control" id="Country" placeholder="252-4565/KB-6964/BHA 7866.."
      onChange={(e)=> {

        setNum(e.target.value);

       } }/>

    
    </div><br></br>

    <div class="form-group col-md-6">
      <label for="date"><strong>Address</strong></label>
      <input type="text" class="form-control" id="date" placeholder="Enter your home address"
      onChange={(e)=> {

        setAddres(e.target.value);

       } }/>

    
    </div><br></br>

    <div class="form-group col-md-6">
      <label for="Mobile"><strong>Mobile Number</strong></label>
      <input type="phone" class="form-control" id="place" placeholder="07X-0000000"
      onChange={(e)=> {

        setMobile(e.target.value);

       } }/>

      </div>

    


      <br></br>
  


    <a href="/man" class="btn btn-success" style={{width:"300px"}}><strong><i className="fa-solid fa-user-clock"></i>&nbsp;&nbsp;Previous Page</strong></a>&nbsp;&nbsp;&nbsp;
    <button type="submit" class="btn btn-danger "style={{width:"300px"}}><strong><i className="fa-solid fa-folder-plus"></i>&nbsp;&nbsp;Register Vehicle</strong></button>&nbsp;&nbsp;
    <a href="/search" class="btn btn-success" style={{width:"300px"}}><strong><i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;Manage Vehicle Details</strong></a>&nbsp;
   
    
   </form>
   </div>
   </div>

  


 )




} 

export default AddVehicle