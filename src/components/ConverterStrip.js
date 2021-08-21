//importing the REACT files
import React from 'react'
import InsertValueComp from './InsertValueComp'
import ConvertFromComp from './ConvertFromComp'
import DropDownMenu from './DropDownMenu'

//importing the CSS files
import './css/converter-strip.css'

//importing the SVG icons as components

import './css/down-arrow.css'
import { useState } from 'react'
import CalorificValues from './CalorificValues'

function ConverterStrip() {

    const [input, setInput] = useState('');
    const [convert_from_unit, setConvertFromUnit] = useState('KW')
    const [convert_to_unit, setConvertToUnit] = useState('KW')
    const [clickedOption, setClickedOption] = useState(false)
    let [open, setOpen] = useState(false);
    const [rotateChevron, setRotateChevron] = useState(false);
    const [converted, setConverted] = useState(false)
    let [result, setResult] = useState('')
    let [fromunit, setFromUnit] = useState('')
    let [tounit, setToUnit] = useState('')

    const handleClick = (e) => {
        setOpen(!open);
        setRotateChevron(!rotateChevron)
        console.log(open)
        console.log('This is from the converter strip')
    }

    const getInput = (e) => {
        // if (e.code === 'Enter')
        e.target.value === '' ? setInput(5000) : setInput(e.target.value)
    }

    const getFromUnit = (e) => {
        setConvertFromUnit(e.target)

    }
    const getToUnit = (e) => {
        setConvertToUnit(e.target)

    }

    let convertFromUnitValue = convert_from_unit.innerText
    let convertToUnitValue = convert_to_unit.innerText


    console.log(`${input} , ${convertFromUnitValue} ,  ${convertToUnitValue}`)
    let finalAnswer


    function kWH_to_kWH(num) {
        var pointNum = parseFloat(num)
        result = pointNum
        finalAnswer = result
        setConverted(true)

        console.log(input, result)
        setResult(result)
        setFromUnit('[kWh]')
        setToUnit('[kWh]')
    }
    function kWH_to_MWH(num) {
        var pointNum = parseFloat(num)
        result = pointNum / 1000
        finalAnswer = result
        setConverted(true)

        console.log(input, result)
        setResult(result)
        setFromUnit('[kWh]')
        setToUnit('[MWh]')

    }
    function kWH_to_GWH(num) {
        var pointNum = parseFloat(num)
        result = pointNum / 1000000
        finalAnswer = result
        setConverted(true)

        console.log(input, result)
        setResult(result)
        setFromUnit('[kWh]')
        setToUnit('[GWh]')

    }
    function kWH_to_TWH(num) {
        var pointNum = parseFloat(num)
        result = pointNum / 1000000000
        setConverted(true)
        setResult(result)
        setFromUnit('[kWh]')
        setToUnit('[TWh]')

    }
    function MWH_to_kWH(num) {
        var pointNum = parseFloat(num)
        result = pointNum * 1000
        setConverted(true)
        setResult(result)
        setFromUnit('[MWh]')
        setToUnit('[kWh]')

    }
    function MWH_to_MWH(num) {
        var pointNum = parseFloat(num)
        result = pointNum
        setConverted(true)
        setResult(result)
        setFromUnit('[MWh]')
        setToUnit('[kWh]')

    }
    function MWH_to_MWH(num) {
        var pointNum = parseFloat(num)
        result = pointNum
        setConverted(true)
        setResult(result)
        setFromUnit('[MWh]')
        setToUnit('[kWh]')

    }

    // _____________________________________________________________
    // SECOND MENU





    const convertFunction = (convertFrom, convertTo) => {
        convertFrom = convertFromUnitValue;
        convertTo = convertToUnitValue;
        console.log(convertFrom, convertTo)

        if (convertFrom == 'kilowatt-hour [kWh]' & convertTo == 'megawatt-hour [MWh]') {
            console.log('success')
            kWH_to_MWH(input)


        } else if (convertFrom == 'kilowatt-hour [kWh]' & convertTo == 'gigawatt-hour [GWh]') {
            console.log('success')
            kWH_to_GWH(input)


        } else if (convertFrom == 'kilowatt-hour [kWh]' & convertTo == 'terawatt-hour [TWh]') {
            console.log('success')
            kWH_to_TWH(input)

        } else if (convertFrom == 'kilowatt-hour [kWh]' & convertTo == 'kilowatt-hour [kWh]') {
            console.log('success')
            kWH_to_kWH(input)
        }
        else if (convertFrom == 'megawatt-hour [MWh]' & convertTo == 'kilowatt-hour [kWh]') {
            console.log('success')
            MWH_to_kWH(input)
        }
        else if (convertFrom == 'megawatt-hour [MWh]' & convertTo == 'megawatt-hour [MWh]') {
            console.log('success')
            MWH_to_MWH(input)
        }
        else if (convertFrom == 'megawatt-hour [MWh]' & convertTo == 'gigawatt-hour [GWh]') {
            console.log('success')
            MWH_to_MWH(input)
        }

        


    }

    return (
        <div className="converter">
            <div className="converter-strip">
                <InsertValueComp inputValue={getInput}></InsertValueComp>
                <ConvertFromComp value={convertFromUnitValue} clicked={handleClick} clicked={clickedOption} label={'Convert from'} dropdown={<DropDownMenu selectedUnit={getFromUnit} />}>

                </ConvertFromComp>

                <ConvertFromComp value={convertToUnitValue} clicked={clickedOption} label={'Convert to'} dropdown={<DropDownMenu selectedUnit={getToUnit} />} />


                <ConvertFromComp>
                    <CalorificValues>

                    </CalorificValues>
                </ConvertFromComp>

                <button onClick={convertFunction}><h1>CONVERT</h1></button>

            </div>


            {converted && <h1 style={{ fontSize: '100px', color: 'white' }}> {input}{fromunit} is {result}{tounit} </h1>}

        </div>
    )
}

export default ConverterStrip
