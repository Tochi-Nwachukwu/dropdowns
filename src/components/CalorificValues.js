import React from 'react'
import './css/calorific-values.css'

function CalorificValues() {

    const NaturalGasData = [

        { id: 1, country: "Algeria", value: 1051 },
        { id: 2, country: "Australia", value: 1061 },
        { id: 3, country: "Canada", value: 1023 },
        { id: 4, country: "Egypt", value: 1019 },
        { id: 5, country: "Mexico", value: 1109 },
        { id: 6, country: "Norway", value: 1140 },
        { id: 7, country: "Netherlands", value: 949 },
        { id: 8, country: "Russia", value: 1015 },
        { id: 9, country: "UK", value: 1047 },
        { id: 10, country: "USA", value: 1026 },
        { id: 11, country: "Other", value: 1040 }

    ]
    const CruideOilData = [

        { id: 1, country: "Saudi Arabia", value: 1.016 },
        { id: 2, country: "U.S.A.", value: 1.0286 },
        { id: 3, country: "Former USSR", value: 1.005 },
        { id: 4, country: "Iran", value: 1.019 },
        { id: 5, country: "Venezuela", value: 1.0045 },
        { id: 6, country: "Mexico", value: 1.0115 },
        { id: 7, country: "Norway", value: 1.026 },
        { id: 8, country: "UK", value: 1.0415 },
        { id: 9, country: "UAE", value: 1.018 },
        { id: 10, country: "Others", value: "" }

    ]
    const CoalData = [

        { id: 1, country: "USA", value: 0.646 },
        { id: 2, country: "India", value: 0.477 },
        { id: 3, country: "South Africa", value: 0.535 },
        { id: 4, country: "Australia", value: 0.592 },
        { id: 5, country: "Russia", value: 0.444 },
        { id: 6, country: "Poland", value: 0.57 },
        { id: 7, country: "Kazakhstan", value: 949 },
        { id: 8, country: "Ukraine", value: 0.444 },
        { id: 9, country: "Germany", value: 0.516 },
        { id: 10, country: "Others", value: "" }

    ]
    const NaturalGasListItems = NaturalGasData.map((units) => <li key={units.id} ><span id="util-width" >{units.country}</span><span id='util-spacer'>{units.value}</span></li>)

    const CrudeOilListItems = CruideOilData.map((units) => <li key={units.id}><span id="util-width">{units.country}</span><span id='util-spacer'>{units.value}</span></li>)

    const CoalListItems = CoalData.map((units) => <li key={units.id}><span id="util-width">{units.country}</span><span id='util-spacer'>{units.value}</span></li>)


    return (

        <div className='calorific-values-container'>
            <ul>
                <h1>Gross Calorific Values - Natural Gas</h1>
                {NaturalGasListItems}

            </ul>
            <ul>
                <h1>Net Calorific Values - Crude Oil</h1>
                {CrudeOilListItems}
            </ul>
            <ul>
                <h1>Net Calorific Values - Coal</h1>
                {CoalListItems}
            </ul>
        </div>
    )
}

export default CalorificValues
