import React from 'react';
import "./CSS/footer.css"

function footer ({currentPage, handlePageChange}) {
  return (
    <div className="footer" id="footer">
      <a id="links" href="https://github.com/WillYazdani">GITHUB</a>
      <a id="links" href="https://www.linkedin.com/in/will-yazdani/">LINKEDIN</a>
      <a id="links" href="https://stackoverflow.com/users/19103672/will-yazdani?tab=profile">STACKOVERFLOW</a>

    </div>
);
}

export default footer;