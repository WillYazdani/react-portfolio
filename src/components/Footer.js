import React from 'react';
import "./CSS/footer.css"

function footer ({currentPage, handlePageChange}) {
  return (
    <div className="footer" id="footer">
      <a id="links" href="https://github.com/WillYazdani">GITHUB</a>
      <a id="links" href="https://www.linkedin.com/in/will-yazdani/">LINKEDIN</a>
      <a id="links" href="https://leetcode.com/willyazdani/">LEETCODE</a>

    </div>
);
}

export default footer;