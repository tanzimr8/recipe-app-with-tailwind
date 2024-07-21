import React from 'react'

const Noresult = ({text}) => {
    return (
        <div className="card bg-red-500 text-white w-96">
            <div className="card-body">
                <h2 className="card-title text-center">{text}</h2>
            </div>
        </div>
    )
}

export default Noresult