import React, { useState } from 'react'
import './css/dropdown-menu.css'
import MultipleList from './MultipleList'



function DropDownMenu({ selectedUnit }) {

    const [menu, setMenu] = useState({ menu1: true, menu2: false, menu3: false, menu4: false, menu5: false, menu6: false, menu7: false, menu8: false, menu9: false, menu9: false });

    //changing the color of the items
    const [color, setColor] = useState({ color1: '#0e80c0', color2: '#252525', color3: '#252525', color4: '#252525', color5: '#252525', color6: '#252525', color7: '#252525', color8: '#252525', color9: '#252525', color9: '#252525' });

    //opening and closing of the menus

    // functions that controls the opening of the Menus and changing the color
    function openMenu1() {
        setColor({ color1: '#0e80c0' });
        setMenu({ menu1: true });


    }

    function openMenu2() {
        setMenu({ menu2: true });
        setColor({ color2: '#0e80c0' });

    }
    function openMenu3() {
        setMenu({ menu3: true });
        setColor({ color3: '#0e80c0' });

    }
    function openMenu4() {
        setMenu({ menu4: true });
        setColor({ color4: '#0e80c0' });

    }
    function openMenu5() {
        setMenu({ menu5: true });
        setColor({ color5: '#0e80c0' });

    }
    function openMenu6() {
        setMenu({ menu6: true });
        setColor({ color6: '#0e80c0' });

    }
    function openMenu7() {
        setMenu({ menu7: true });
        setColor({ color7: '#0e80c0' });

    }
    function openMenu8() {
        setMenu({ menu8: true });
        setColor({ color8: '#0e80c0' });

    }
    function openMenu9() {
        setMenu({ menu9: true });
        setColor({ color9: '#0e80c0' });

    }
    function openMenu10() {
        setMenu({ menu10: true });
        setColor({ color10: '#0e80c0' });

    }


    return (

        <div>

            <div className='dropdown-menu-container'>

                {/* conditionals that render the various components based on true or false values of the state, and passes in the required props into them */}

                {menu.menu1 && <MultipleList main={selectedUnit} items={['watt-hour [wH]', 'kilowatt-hour [kWh]', 'megawatt-hour [MWh]', 'gigawatt-hour [GWh]', 'terawatt-hour [TWh]']} description='Unit of energy equivalent to one watt of power expended for one hour of time' />}

                {menu.menu2 && <MultipleList main={selectedUnit} items={['therms [th]', 'decatherms [Dth]', 'million therms [MMth]']} description='Unit of heat energy equal to 100000 British thermal units (Btu)' />}

                {menu.menu3 && <MultipleList main={selectedUnit} items={['joule [J]', 'kilojoule [kJ]', 'gigajoule [GJ]', 'terajoule [TJ]', 'petajoule [PJ]']} description='Unit of measure of the capacity to do work or generate heat. ' />}


                {menu.menu4 && <MultipleList main={selectedUnit} items={['calorie [cal]', 'kilocalorie [kcal]', 'gigacalorie [Gcal]', 'petacalorie [Pcal]']} description='Unit of energy equivalent to one watt of power expended for one hour of time' />}

                {/* CODE TO DISPLAY LIST ITEMS IN 5TH DROPDOWN OPTION */}

                {menu.menu5 && <MultipleList main={selectedUnit} items={['cubic foot [ft3]', 'thousand cubic feet [Mft3]', 'million cubic feet [MMft3]', 'billion cubic feet [Bft3]', 'trillion cubic feet [Tft3]']} description='Unit of volume of natural gas at standard temperature and standard pressure according to the Imperial system of units' />}

                {/* CODE TO DISPLAY LIST ITEMS IN 6TH DROPDOWN OPTION */}

                {menu.menu6 && <MultipleList main={selectedUnit} items={['cubic meter (Natural Gas) [m3]', 'thousand cubic meters (Natural Gas) [Mm3]', 'million cubic meters (Natural Gas) [MMm3]', 'billion cubic meters (Natural Gas) [Bm3]',]} description='Unit of volume of natural gas at standard temperature and standard pressure according to the International system of units (SI)' />}

                {menu.menu7 && <MultipleList main={selectedUnit} items={['barrel of oil equivalent [BOE]', 'million barrels of oil equivalent [MBOE]']} description='Unit of energy based on the approximate energy released by the combustion of one barrel of crude oil (159 L)' />}

                {/* CODE TO DISPLAY LIST ITEMS IN 7TH DROPDOWN OPTION */}

                {menu.menu8 && <MultipleList main={selectedUnit} items={['tonne oil equivalent [toe]', 'thousand tonnes oil equiv [ktoe]']} description='Unit of energy based on the approximate energy released by the combustion of one tonne of crude oil' />}


                {menu.menu9 && <MultipleList main={selectedUnit} items={['tonne of coal equivalent [tce]', "million tonnes of coal equivalent [MMtce]"]} description='Unit of energy based on the approximate energy released by the combustion of one tonne of coal' />}

                {menu.menu10 && <MultipleList main={selectedUnit} items={['tonne of LNG', 'million tonnes of LNG ']} description='Unit of weight of liquefied natural gas (LNG)' />}




                {/* Rendering of list items with the onClick functions added in */}

                < ul >
                    <h1>UNIT OF MEASURE</h1>
                    <div id='l1' style={{ background: color.color1 }} onClick={openMenu1} className="list-container">
                        <li value='watt-hour [wH]'>watt-hour [wH]</li>
                    </div>

                    <div id='l2' style={{ background: color.color2 }} onClick={openMenu2} className="list-container">
                        <li >therms [th]</li>
                    </div>


                    <div id='l3' style={{ background: color.color3 }} onClick={openMenu3} className="list-container">
                        <li >joule [J]</li>
                    </div>

                    <div id='l4' style={{ background: color.color4 }} onClick={openMenu4} className="list-container">
                        <li >calorie [cal]</li>

                    </div>


                    <div id='l5' style={{ background: color.color5 }} onClick={openMenu5} className="list-container">
                        <li  >cubic foot (Natural Gas) [ft3]</li>
                    </div>

                    <div id='l6' style={{ background: color.color6 }} onClick={openMenu6} className="list-container">
                        <li>cubic meter (Natural Gas) [m3]</li>
                    </div>

                    <div id='l7' style={{ background: color.color7 }} onClick={openMenu7} className="list-container">
                        <li >barrel of oil equivalent [BOE]</li>

                    </div>

                    <div id='l8' style={{ background: color.color8 }} onClick={openMenu8} className="list-container">
                        <li >tonne of oil equivalent [toe]</li>
                    </div>

                    <div id='l9' style={{ background: color.color9 }} onClick={openMenu9} className="list-container">
                        <li >tonne of coal equivalent [tce]</li>
                    </div>

                    <div id='l10' style={{ background: color.color10 }} onClick={openMenu10} className="list-container">
                        <li >tonne of LNG</li>

                    </div>
                </ul>


            </div >

        </div>


    )
}

export default DropDownMenu