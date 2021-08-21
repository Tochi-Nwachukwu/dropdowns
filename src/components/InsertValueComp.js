import React from 'react'
import './css/insert-value.css'

function InsertValueComp({ inputValue }) {
    return (
        <div className='insert-value-box'>
            <label htmlFor="insert-value-field" className="insert-value-label">Insert value</label>
            <input style={{ color: 'white' }} type="number" className='insert-value-input' placeholder='5.000,00' onKeyUp={inputValue} />


        </div>
    )
}

export default InsertValueComp
