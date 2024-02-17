import React from 'react'
import { IMG_CDN_URL } from '../../utils/constant'

const MovieCards = ({poster_path}) => {
  if(!poster_path) return;
  return (
    <div className='w-48 p-2  hover:opacity-40 inline-block cursor-pointer'>
      <img alt='movie card'
       src={IMG_CDN_URL+poster_path}
      />
    </div>
  )
}

export default MovieCards