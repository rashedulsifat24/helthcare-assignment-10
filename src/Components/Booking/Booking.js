import React from 'react';
import { useParams } from 'react-router';
import {useEffect,useState} from 'react'
import { Card, Button, Form, Row ,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert';
const Booking = () => {


    const {bookingId}=useParams();
    const [booking,setBooking]=useState([]);
    

    useEffect(()=>{
        fetch("/fackdata.json")
        .then(res=>res.json())
         .then(data=>setBooking(data))
    },[])
    const filterService=booking.filter(sr=>(sr.id==bookingId))
    const sd=filterService[0];
    console.log(sd);
    
    
    return (
        <div className="pb-5 ">
            <h1 style={{color:"#153D8F"}} className="pt-5 pb-5">Book Your Instructor</h1>
            <div className="row d-flex">
                <div className="col-lg-5 col md-6 col-sm-12">
                    <div className="card">
                    <img className="img-fluid" src={sd?.img} alt=""/>
                    <div className="card-body">
                        <span>{sd?.sdes}</span>
                        <h4 style={{color:"#153D8F"}} className="card-title mb-3 mt-3">{sd?.name}</h4>
                        <p className="card-text">{sd?.des}</p>
                    </div>
                    <div className="card-footer" >
                        <Link to="">
                                <button  className="btn border" style={{color:"black",backgroundColor:"#FAE20D"}}>Booking {sd?.name}</button>
                        </Link>
                    </div>
                </div>
                </div>
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <div class="row ">
					<div class="col-md-12 login-form-1">
						<h3>Workout Plan</h3>

						<div class="form-group">
							<input type="text" class="form-control" placeholder="Your Name" value="" />
						</div>
                        <div class="form-group">
							<input type="text" class="form-control" placeholder="Your Address" value="" />
						</div>
                        <div class="form-group">
							<input type="date" class="form-control" placeholder="selected date" value="" />
						</div>
                         <div class="form-group">
						<input type="text" class="form-control" placeholder="your problem short description" value="" />
						</div>
						
						<div class="form-group">
							<input type="submit" class="btnSubmit" value="Booking" />
                            
						</div>
                       
						
					</div>
				</div>

                    </div>
                

            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Booking;