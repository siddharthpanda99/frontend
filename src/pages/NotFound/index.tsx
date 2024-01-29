import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      Page Not Found. Please go back to <Link to="/home">Home</Link> page
    </div>
  );
}

export default NotFound