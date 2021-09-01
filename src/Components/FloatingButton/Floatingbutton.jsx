import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import React, { useState } from 'react'
import {MdAdd, MdClose} from 'react-icons/md';

const Floatingbutton = () => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <FloatingMenu
                slideSpeed={400}
                size="1rem"
                direction="up"
                spacing={6}
            >
                <MainButton
                    iconResting={<MdAdd style={{ fontSize: 25 }} />}
                    iconActive={<MdClose style={{ fontSize: 25 }} />}
                    iconColor="black"
                    background="red"
                    onClick={() => setOpen(!open)}
                    size="3rem"
                />
                <ChildButton
                    iconButton={<MdAdd style={{ fontSize: 25 }} />}
                    iconColor="black"
                    backgroundColor="red"
                    size={50}
                    onClick={() => console.log('Pokemania')}
                />
                <ChildButton
                    iconButton={<MdAdd style={{ fontSize: 25 }} />}
                    iconColor="black"
                    backgroundColor="red"
                    size={50}
                    onClick={() => console.log('PokeApi')}
                />
            </FloatingMenu>
        </div>
    )
}

export default Floatingbutton

