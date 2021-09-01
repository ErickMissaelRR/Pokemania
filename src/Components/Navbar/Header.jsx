import React from 'react';
import styled from 'styled-components';
import BurgerNav from './BurgerNav'

const Head = styled.nav`
    width: 100%;
    height: 60px;
    border-bottom: 2px solid #cb3234;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
 
`;

const Header = () => {
    return (
        <Head>
            <div>
               <h2>Pokemania</h2> 
            </div>
            <BurgerNav />
        </Head>
    )
}

export default Header;

