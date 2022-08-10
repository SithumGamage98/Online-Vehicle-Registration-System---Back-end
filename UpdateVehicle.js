import React,{useEffect, useState} from "react"
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import tour from '../images/mirissa.jpg'



export default function EditVehiDetails(){

    const [name,setName] = useState("");
    const [nic,setNic] = useState("");
    const [vehiCateg,setVehi] = useState("");
    const [vehiNum,setNum] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");


  const { id } = useParams();

  useEffect(() => {
    getVehicles();
    }, []);
  
    //let navigate= useNavigate();
  
    function getVehicles() {
      let VehiC = true;
  
      fetch(`http://localhost:8070/vehicle/get/${id}`)
        .then((res) => res.json())
  
        .then((result) => {
          if (VehiC) {

            setName(result.name);
            setNic(result.nic);
            setVehi(result.vehiCateg);
            setNum(result.vehiNum);
            setAddress(result.address);
            setPhone(result.phone);
           
           
          }
          console.log(result);
        });
  
      return () => (VehiC = false);
    }

  
  function updateData(e){

      e.preventDefault();

      //alert("Insert");

      const updateVehicle ={
        name,
        nic,
        vehiCateg,
        vehiNum,
        address,
        phone
    
      }

      axios
    .patch(`http://localhost:8070/vehicle/update/${id}`, updateVehicle)
    .then((_res) => {
      alert("Your Vehicle Updated Successfully!");
     // navigate("/front");
      console.log(updateVehicle);
    })
    .catch((_err) => {
      
      alert("Database Error");
    });
  }



return(
    <div className="container" class="p-3 mb-2 bg-dark text-white">
        <h2 class="p-3 mb-2 bg-success text-dark"><center>Update Vehicle Details</center></h2>
        <img  src={tour} style={{ position:"absolute", right:170,top:120}} height={600} width={500}  alt="Card image cap"></img>
        <form className =  "CusPackages" >
          
        <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Owner's name</label>
                    <input type="text" className="form-control" id="uname" placeholder="Enter name" value={name} onChange={(e)=>{setName(e.target.value);}}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="iinputPid">NIC</label>
                    <input type="text" className="form-control" id="Pid" placeholder="988988765V" value={nic} onChange={(e)=>{setNic(e.target.value);} }/>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputSugges">Vehicle Category</label>
                    <input type="text" className="form-control" id="suggest" placeholder="Car/Van/Bike/Lorry" value={vehiCateg} onChange={(e)=>{setVehi(e.target.value);} }/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputFande">Your conuntry</label>
                    <input type="text" className="form-control" id="fande" placeholder="Enter your country" value={vehiNum} onChange={(e)=>{setNum(e.target.value);} }/>
                </div>
            </div>

          
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputRate">Address</label>
                    <input type="text" className="form-control" id="rate" placeholder="Enter address" value={address} onChange={(e)=>{setAddress(e.target.value);} }/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputDate">Mobile number</label>
                    <input type="text" className="form-control" id="date" placeholder="07x 0000000" value={phone}  onChange={(e)=>{setPhone(e.target.value);} }/>
                </div>
            </div>
           
                
          
            
        </form><br></br><div>
                 <a href="/allCuz" class="btn btn-success" style={{width:"300px"}}><strong><i className="fa-solid fa-user-clock"></i>&nbsp;&nbsp;Priviouse Page</strong></a>&nbsp;&nbsp;
                <button  type="button" class="btn btn-danger"   onClick={updateData}> <i className="fa-solid fa-wrench "></i>&nbsp;&nbsp; Update My Vehicle&nbsp;&nbsp;&nbsp;</button>&nbsp;&nbsp;
            
            </div>
            
            
    </div>
)

}


