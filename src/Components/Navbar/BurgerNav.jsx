import React, { useState } from 'react';
import styled from 'styled-components';
import Items from './Items';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#f00'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

  }
`;

const BurgerNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <React.Fragment>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
            </StyledBurger>
            <Items open={open}/>
        </ React.Fragment>

    )
};

export default BurgerNav;