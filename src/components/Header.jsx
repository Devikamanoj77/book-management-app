import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';



  const Header = () => {
    const location = useLocation();
    
    // Check if the current path is '/home'
    const isHomePage = location.pathname === '/home'

  
  return (
    <Navbar style={{zIndex:1,backgroundColor: isHomePage ? '#A07856' : '#AF8264',top:0}} className=" position-fixed w-100">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand style={{color:'white'}} className='fw-bolder'>
            <img
              alt=""
              src="https://png.pngtree.com/png-clipart/20200721/original/pngtree-book-store-logo-simple-line-logo-template-vector-illustration-png-image_4814508.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            BOOK STORE
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header