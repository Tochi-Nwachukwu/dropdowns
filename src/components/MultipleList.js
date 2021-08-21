import React from 'react'
import './css/multiple-list.css'

function MultipleList(props) {

    const listItems = props.items.map((units) => <li onClick={props.main}>{units}</li>);

    return (
        <div className='multiple-list-container'>
            <ul>
                <h1>MULTIPLE</h1>
                {listItems}
                <p>{props.description}</p>
            </ul>
        </div>
    )
}

export default MultipleList
