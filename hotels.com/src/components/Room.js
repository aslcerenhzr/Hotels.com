import React, { useState } from "react";
import { Modal, Button, Carousel } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Room({ room }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="row bs">
            <div className="col-md-4">
                <img src={room.imageurls[0]} className="smalling" />
            </div>
            <div className="col-md-7">
                <h1>{room.name}</h1>
                <p>Max Number of Guests : {room.number_of_guests}</p>
                <p>Rent Per Day : {room.rent_per_day}</p>
                <p>Average Rating : {room.average_rating}</p>
            </div>

            <div>
                <Link to = {'/book/${room.id}'}>
                    <button className="btn btn-primary m-2">Book Now</button>
                </Link>
                <button className="btn btn-primary" onClick={handleShow}>View Details</button>
            </div>


            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header>
                    <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {room.imageurls.map(url=>{
                            return <Carousel.Item>
                                <img
                                className="d-block w-100 bigimg"
                                src={url}
                                />
                            </Carousel.Item>
                        })}
                        
                    </Carousel>
                    <p>{room.description}</p>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>

        </div >
    )
}

export default Room;