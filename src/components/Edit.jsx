import React, { useState } from 'react';
import { updateBookAPI } from '../services/allAPI';

const Edit = ({ book, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  const [bookDetails, setBookDetails] = useState(book);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleSave = async () => {
    try {
      await updateBookAPI(bookDetails);
      onUpdate(); 
      setShowModal(false);
    } catch (err) {
      console.log("Error updating book: ", err);
    }
  };

  return (
    <>
      
      <button onClick={() => setShowModal(true)} style={{ border: 'none', marginRight: '5px' }}>
        <i className="fas fa-edit m-2" style={{ cursor: 'pointer', color: 'blue' }} title="Edit"></i>
      </button>

      {/* Modal for editing book details */}
      {showModal && (
        <div className="modal show" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Book Details</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label >Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={bookDetails.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Author</label>
                  <input
                    type="text"
                    className="form-control"
                    name="author"
                    value={bookDetails.author}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Genre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="genre"
                    value={bookDetails.genre}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label>Year</label>
                  <input
                    type="text"
                    className="form-control"
                    name="year"
                    value={bookDetails.year}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSave}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Edit;
