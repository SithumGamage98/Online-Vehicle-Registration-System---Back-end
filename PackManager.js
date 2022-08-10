import React, { Component } from "react";
import mana from '../images/manage.png'


export default class manager extends Component {
  render() {



    return (

      <div class="p-3 mb-2 bg-secondary text-white">
        <div class="p-3 mb-2 bg-dark text-white"><h1 ><strong>Vehicle Registration Manager's Page</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;

          <a href="/front" class="text-light bg-dark" style={{ width: "100px" }}><strong><i className="fa-solid fa-house"></i>&nbsp;</strong></a></h1>

        </div>

        <img src={mana} height={400} width={350} style={{
          position: 'absolute',
          right: 500,
          top: 250,
        }} alt="Card image cap" />


        <div class="card text-dark bg-light mb-3" style={{ width: "300px", position: 'absolute', right: 300, top: 350, }}>
          <div class="card-header"> <b>Hello..Mr.Gamage</b></div>
          <div class="card-body">
            <h5 class="card-title">Welcom to Registration Manager's Page</h5>
            <p class="card-text"><i>Your Company user name -</i>  STGSS</p>
            <p class="card-text"><i>Your Registration Nubmer -</i> REG998</p>
            <p class="card-text"><i>Your Login Password -</i> Gama@Man34</p>
            <a href="/test" class="p-3 mb-2 " style={{ width: "100px", height: "50px" }}><strong><i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back to Admin panel</strong></a>

          </div>
        </div>

        <div  class="p-3 mb-2 bg-dark text-white card" style={{ width: '24rem' }}>
          <div class="card-body">
            <h5  class="text-warning card-title"><strong>Register New Vehicles</strong></h5>
            <p class="card-text" class="text-info">Enter vehicle & owner's details</p>
            <a href="/vehi" class="btn btn-danger"><i className="fa-solid fa-angles-right"></i>&nbsp;<strong>Lets Go..</strong></a>
          </div>
        </div>

        <div class="card" class="p-3 mb-2 bg-dark text-white" style={{ width: '24rem' }}>
          <div class="card-body">
            <h5 class="card-title" class="text-warning"><strong>Manage Registred Vehicle Details</strong></h5>
            <p class="card-text" class="text-info">View,Delete,Update Vehicle Details</p>
            <a href="/search" class="btn btn-danger"><i className="fa-solid fa-angles-right" ></i>&nbsp;<strong>Lets Go..</strong></a>
          </div>
        </div>

        <div class="card" class="p-3 mb-2 bg-dark text-white" style={{ width: '24rem' }}>
          <div class="card-body">
            <h5 class="card-title" class="text-warning"><strong>View User's Feedbacks</strong></h5>
            <p class="card-text" class="text-info">View and delete user entered Feedbacks..</p>
            <a href="all2" class="btn btn-danger"><i className="fa-solid fa-angles-right"></i>&nbsp;<strong>Lets Go..</strong></a>
          </div>
        </div>



      </div>

    )
  }

}