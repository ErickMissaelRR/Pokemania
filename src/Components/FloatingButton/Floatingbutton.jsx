import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import React, { useState } from 'react'
import {MdAdd, MdClose} from 'react-icons/md';


const Floatingbutton = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <FloatingMenu
                slideSpeed={400}
                direction="up"
                spacing={8}
                isOpen={isOpen}
                position="fixed"
            >
                <MainButton
                    iconResting={<MdAdd style={{ fontSize: 25 }} />}
                    iconActive={<MdClose style={{ fontSize: 25 }} />}
                    iconColor="black"
                    background="red"
                    onClick={() => setOpen(!isOpen)}
                    size="3rem"
                />
                <ChildButton
                    icon={<MdAdd style={{ fontSize: 25 }}
                    iconColor="black"
                    background="white"
                    size="2rem"
                    onClick={() => console.log('Pokemania')}
                />
                <ChildButton
                    icon={<MdAdd style={{ fontSize: 25 }} />}
                    iconColor="black"
                    background="red"
                    size="2rem"
                    onClick={() => console.log('PokeApi')}
                />
            </FloatingMenu>
        </div>
    )
}

export default Floatingbutton

