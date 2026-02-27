import React from 'react';

// VolleyballCategoryIcon renders a gray volleyball icon for category nav
const VolleyballCategoryIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="8" cy="8" r="7" stroke="#B0B0B0" strokeWidth="2" fill="#F5F5F5" />
    <path d="M8 1a7 7 0 0 1 7 7" stroke="#B0B0B0" strokeWidth="2" fill="none" />
    <path d="M8 15a7 7 0 0 1-7-7" stroke="#B0B0B0" strokeWidth="2" fill="none" />
    <path d="M1 8a7 7 0 0 1 7-7" stroke="#B0B0B0" strokeWidth="2" fill="none" />
    <path d="M15 8a7 7 0 0 1-7 7" stroke="#B0B0B0" strokeWidth="2" fill="none" />
  </svg>
);

export default VolleyballCategoryIcon;
