import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error  from "../components/Error";

function BookingScreen(match) {
    const [room, setRoom] = useState([]);
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                setloading(true)
                const response = await axios.get('/api/rooms/getroombyid', {roomid : match.params.roomid});
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
                                <p>From Date: </p>
                                <p>To Date: </p>
                                <p>Max Count: {room.number_of_guests}</p>
                            </b>
                        </div>

                        <div>
                            <h1>Amount</h1>
                            <hr />
                            <b>
                                <p>Total Days: </p>
                                <p>Rent Per Day: {room.rent_per_day}</p>
                                <p>Total Amount: </p>
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
