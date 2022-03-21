import { Link } from 'wouter';
import React from 'react';
import './Gif.css'

function Gif ({title, id, url}) {
  return (
    <> 
    <Link  to={`/gif/${id}`}  className="Gif">
      <h6>{title}</h6>
      <img loading='lazy' src={url} alt={title} />
    </Link>
    </>
  );
}

export default React.memo(Gif)
