import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { saveBookAPI } from '../services/allAPI';

const Add = () => {
    const [bookDetails, setBookDetails] = useState({
        title: "", imgUrl: "", author: "", genre: "", year: ""
    });
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBookDetails = async () => {
        const { title, imgUrl, author, genre, year } = bookDetails;
        if (title && imgUrl && author && genre && year) {
            try {
                const result = await saveBookAPI(bookDetails);
                if (result.status >= 200 && result.status < 300) {
                    alert("Added Successfully");
                    handleClose();
                } else {
                    alert("Failed to add book");
                    console.log(result);
                }
            } catch (err) {
                alert("An error occurred while adding the book");
                console.log(err);
            }
        } else {
            alert("Please fill out all fields completely");
        }
    };

    return (
        <>
            <Button 
                onClick={handleShow} 
                className="me-5 rounded" 
                style={{ backgroundColor: 'transparent', color: '#A07856', fontSize: '20px', border: 'solid 1px', borderColor: '#A07856' }}
            >
                ADD BOOK
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD BOOK DETAILS</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="border rounded p-3">
                        <FloatingLabel className='mt-2' controlId="floatingTitle" label="Title">
                            <Form.Control 
                                onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })}  
                                type="text" 
                                placeholder="Title" 
                                value={bookDetails.title}
                            />
                        </FloatingLabel>
                        <FloatingLabel className='mt-2' controlId="floatingImgUrl" label="Image URL">
                            <Form.Control 
                                onChange={e => setBookDetails({ ...bookDetails, imgUrl: e.target.value })}  
                                type="text" 
                                placeholder="Image URL" 
                                value={bookDetails.imgUrl}
                            />
                        </FloatingLabel>
                        <FloatingLabel className='mt-2' controlId="floatingAuthor" label="Author">
                            <Form.Control 
                                onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })}  
                                type="text" 
                                placeholder="Author" 
                                value={bookDetails.author}
                            />
                        </FloatingLabel>
                        <FloatingLabel className='mt-2' controlId="floatingGenre" label="Genre">
                            <Form.Control 
                                onChange={e => setBookDetails({ ...bookDetails, genre: e.target.value })}  
                                type="text" 
                                placeholder="Genre" 
                                value={bookDetails.genre}
                            />
                        </FloatingLabel>
                        <FloatingLabel className='mt-2' controlId="floatingYear" label="Year">
                            <Form.Control 
                                onChange={e => setBookDetails({ ...bookDetails, year: e.target.value })}  
                                type="text" 
                                placeholder="Year" 
                                value={bookDetails.year}
                            />
                        </FloatingLabel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleBookDetails}>
                        ADD
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Add;
