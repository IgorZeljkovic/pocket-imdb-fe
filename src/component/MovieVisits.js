import React from 'react';
import Octicon, { Eye } from '@primer/octicons-react';

const MovieVisits = ({ visitsNumber }) => {
  return (
    <span className='text-muted'>
      <Octicon icon={Eye} /> { visitsNumber }
    </span>
  )
}

export default MovieVisits;