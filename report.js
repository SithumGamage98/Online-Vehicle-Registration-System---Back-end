/*import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../navbar.component"

const Event = (props) => ( 
    <tr>
    <td > { props.Event.EID } </td> 
    <td> {props.Event.Name} </td > { " " } 
    <td > { props.Event.Location } </td> 
    <td > { props.Event.Date } </td> 
    <td > { props.Event.Description } </td> 
    

    <td >
    <Link to = { "/Event/" + props.Event._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteEvent(props.Event._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class EventList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Event: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Event/")
            .then((response) => {
                this.setState({ Event: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Event/")
            .then((response) => {
                this.setState({ Event: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    EventList() {
        return this.state.Event.map((currentEvent) => {
            return ( <
                Event Event = { currentEvent }
                deleteEvent = { this.deleteEvent }
                key = { currentEvent._id }
                />
            );
        });
    }

    myfunction(){
   
        window.print();
       }


   

   

    render() {
        return ( 
            <div className = "container" >
            
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Event Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Event ID </th> 
            <th>  Name </th >
             < th > Location </th> 
            <th > Date </th> 
             <th >  Description </th> 
            

            </tr> </thead > 
            <tbody >  {
                this.state.Event.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.EID } </td> 
                    <td> {props.Name} </td > 
                    <td > { props.Location } </td>
                     <td > { props.Date } </td> 
                     <td > { props.Description } </td> 
                    
                    </ tr >))}  </tbody> </table > 
                     <
                     div style = {
                         { float: 'right' }
                     } >
                     
                     
                     <Button type="button" class="btn btn-danger" id="1" variant = "primary"  onClick ={this.myfunction} > Print </Button>
                     
                     </div>
            </div >
        );
    }
} */


import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
//import Package from "../../../TourPackage/BACKEND/models/Package";

export default class AllPacks2 extends Component {


    constructor(props) {

        super(props);

        this.state = {

            packages: []
        };

    }
    componentDidMount() {

        this.retrivePackages();
    }
    retrivePackages() {

        axios.get("http://localhost:8070/package/all").then(res => {

            if (res.data.success) {
                this.setState({

                    packages: res.data.existingPackages

                });

                console.log(this.state.packages)

            }


        })



    }
   
 
    repotGen=()=>{

         window.print();

    }




    render() {

        return (

            <div className="container" class="p-3 mb-2 bg-secondary text-white">

                <h1><center><strong>All Packages</strong></center></h1>
                <table class="table table-dark table-hover">
                    <thead>
                        <tr class="text-danger">
                            <th scope="col">Count</th>
                            <th scope="col">PackageName</th>
                            <th scope="col">PackageID</th>
                            <th scope="col">Destination</th>
                            <th scope="col">NumberofDays</th>
                            <th scope="col">NumberofPassengers</th>
                            <th scope="col">Hotel</th>
                            <th scope="col">Transport</th>
                            <th scope="col">TourGuide</th>
                            <th scope="col">TotalPrice(Rs)</th>
                           


                        </tr>
                    </thead>
                    <tbody>

                        {this.state.packages.map((packages, index) => (

                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{packages.name}</td>
                                <td>{packages.packId}</td>
                                <td>{packages.destination}</td>
                                <td>{packages.numofdays}</td>
                                <td>{packages.nopass}</td>
                                <td>{packages.hotel}</td>
                                <td>{packages.transport}</td>
                                <td>{packages.tourGuide}</td>
                                <td>{packages.totPrice}</td>


                            </tr>

                        ))}



                    </tbody>

            

                </table>

            <button onClick={this.repotGen}>Print</button>

            </div>



        )
    }

}