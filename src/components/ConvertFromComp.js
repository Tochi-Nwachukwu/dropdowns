import React, { useState } from 'react'
import './css/convert-from.css'


function ConvertFromComp(props) {

    let [open, setOpen] = useState(false);
    let [openMenu2, setOpenMenu2] = useState(false);
    const [rotateChevron, setRotateChevron] = useState(false);
    const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"

    function handleClick() {
        setOpen(!open);
        setRotateChevron(!rotateChevron)
        setOpenMenu2(!openMenu2)
        console.log('this is from convert component')

    }



    return (

        <div className='convertfrom-box'>
            <label htmlFor="convertFrom" className='convertfrom-label'>{props.label}</label>
            <div className="convert-from-input-container" >
                <input type="text" placeholder={props.value} className='convertfrom-input' onClick={handleClick} />
                <div style={{ transform: rotate, transition: 'all 0.2s linear', transformOrigin: 'center' }} className="dropdown-icon" onClick={handleClick} >

                </div>
                {open && props.dropdown}


            </div>

        </div>
    )


}


export default ConvertFromComp