import React, { useContext } from 'react'
import { GlobalContext } from '../../context';
const Error = () => {
    const { error } = useContext(GlobalContext);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">ERROR!</h2>
    <p>{error}</p>
  </div>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="error" />
  </figure>
</div>
  )
}

export default Error