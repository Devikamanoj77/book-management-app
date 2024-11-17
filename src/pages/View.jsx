import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAllBooksAPI } from '../services/allAPI';

const View = () => {
  const { id } = useParams(); // Retrieve the book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const result = await getAllBooksAPI(); // Fetch all books (or modify API for a specific book by ID)
        if (result.status >= 200 && result.status < 300) {
          const selectedBook = result.data.find((book) => book.id === id);
          setBook(selectedBook);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading book details...</div>;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F5F5DC', paddingTop: '20px', paddingBottom: '20px' }}>
      {/* Link to go back to Home at the top right */}
      <div style={{ position: 'absolute', top: '100px', right: '20px' }}>
        <Link to="/home" style={{ textDecoration: 'none', color: '#A07856', fontSize: '18px',fontSize:'20px',border:'solid 1px',borderColor:'#A07856' }}
        className='p-2 rounded'>
          Back to Home
        </Link>
      </div>

      {/* Book details with border and shadow */}
      <div className='border shadow' style={{ width: '1000px', marginLeft:'300px',marginTop: '200px',  backgroundColor: 'white' }}>
        <h1 className='text-center mt-4'style={{color:'#A07856'}}><strong>{book?.title}</strong></h1>
        <div className='row'>
          <div className="col-lg-6 d-flex justify-content-center">
            <img className='p-5' width={'350px'} height={'350px'} src={book?.imgUrl} alt={book.title} />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h3 style={{color:'#A07856'}}>Author: {book.author}</h3>
            <h3 style={{color:'#A07856'}}>Genre: {book.genre}</h3>
            <h3 style={{color:'#A07856'}}>Year: {book.year}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
