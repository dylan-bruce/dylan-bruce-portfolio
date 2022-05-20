import React from 'react'

const CurrentDate = () => {

    let today = new Date();
    let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

    return (
        <p className='date'>{ date }</p>
    )
}

export default CurrentDate