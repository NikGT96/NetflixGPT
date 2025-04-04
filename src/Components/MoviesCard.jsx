import React from 'react'
import { TMBD_URL } from '../Utils/constants'

const MoviesCard = ({poster}) => {
  return (
    <div>
      <img src={TMBD_URL + poster} alt="pic" />
    </div>
  )
}

export default MoviesCard
