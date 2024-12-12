import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error  from "../components/Error";
import moment from "moment";


function BookingScreen(match) {
    const [room, setRoom] = useState([]);
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()

    const fromdate= moment(match.params.fromdate, 'DD-MM-YYYY')
    const todate = moment(match.params.todate, 'DD-MM-YYYY')
    
    const totaldays = moment.duration(todate.diff(fromdate)).asDays;
    const totalamount = totaldays * room.rent_per_day

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                setloading(true)
                const response = await axios.post('/api/rooms/getroombyid');
                setRoom(response.data);
                setloading(false)

            } catch (error) {
                setloading(false)
                setloading(true)   
            }
        };

        fetchRooms();
    }, []);

    return (
        <div>
            {loading?(<h1><Loader/></h1 >) : error ? (<h1>Error</h1>) : (<div>

                <div className="row">
                    <div className="col-md-5">
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className="bigimg"/>
                    </div>

                    <div className="col-md-5">
                        <div>
                            <h1>Booking Details</h1>
                            <hr />
                            <b>
                                <p>Name: </p>
                                <p>From Date: {fromdate}</p>
                                <p>To Date: {match.params.todate}</p>
                                <p>Max Count: {room.number_of_guests}</p>
                            </b>
                        </div>

                        <div>
                            <h1>Amount</h1>
                            <hr />
                            <b>
                                <p>Total Days: {totaldays}</p>
                                <p>Rent Per Day: {room.rent_per_day}</p>
                                <p>Total Amount: {totalamount}</p>
                            </b>
                        </div>

                        <div style={{float:'right'}}>
                            <button className="btn btn-primary">Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
}
export default BookingScreen;
