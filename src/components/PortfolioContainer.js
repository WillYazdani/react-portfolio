import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Folio from './pages/Folio';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Folio') {
      return <Folio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Folio') {
      return <Folio />;
    }
    if (currentPage === 'Contact') {
    return <Contact />;
    }
    return <Folio />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}
