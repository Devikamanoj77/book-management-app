import React, { useEffect, useState } from 'react';
import Add from '../components/Add';
import { getAllBooksAPI, removeBookAPI } from '../services/allAPI';
import Edit from '../components/Edit';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [allBooks, setAllBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    try {
      const result = await getAllBooksAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllBooks(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeBook = async (id) => {
    try {
      await removeBookAPI(id);
      getAllBooks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ marginTop: '0px', height: '100vh', backgroundColor: '#F5F5DC' }}>
      <div className="d-flex justify-content-between" style={{ paddingTop: '100px' }}>
        <h3 className="ms-5" style={{ color: '#A07856' }}>BOOK DETAILS</h3>
        <Add />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '300px' }}>
        <table style={{
          width: '100%',
          maxWidth: '1200px',
          borderCollapse: 'separate',
          borderSpacing: '0',
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: 'white',
        }} className='shadow rounded'>
          <thead>
            <tr style={{ backgroundColor: '#E0E0E0', color: 'black' }}>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Title</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Author</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Genre</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Year</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allBooks?.length > 0 ? (
              allBooks.map((book) => (
                <tr key={book?.id} style={{ color: 'black' }}>
                  <td style={{ border: '1px solid #ddd', padding: '12px' }}>{book?.title}</td>
                  <td style={{ border: '1px solid #ddd', padding: '12px' }}>{book?.author}</td>
                  <td style={{ border: '1px solid #ddd', padding: '12px' }}>{book?.genre}</td>
                  <td style={{ border: '1px solid #ddd', padding: '12px' }}>{book?.year}</td>
                  <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>
                    <div className="d-flex justify-content-center align-items-center">
                      <Edit book={book} onUpdate={getAllBooks} />
                      <button
                        style={{ border: 'none', background: 'none' }}
                        onClick={() => navigate(`/view/${book?.id}`)}
                      >
                        <i className="fas fa-eye m-2" style={{ cursor: 'pointer', color: 'blue' }} title="View"></i>
                      </button>
                      <button onClick={() => removeBook(book?.id)} style={{ border: 'none', background: 'none', marginLeft: '5px' }}>
                        <i className="fas fa-trash-alt m-2" style={{ cursor: 'pointer', color: 'red' }} title="Delete"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center fw-bolder text-danger" style={{ padding: '20px', color: 'black' }}>
                  No Books Uploaded
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
