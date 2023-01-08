import { useState } from "react";
import styled from "styled-components";

const Toggle = ({isClicked, setIsClicked}) => {

    function handleClick() {
        setIsClicked(prevIsClicked => !prevIsClicked);
    }

    return (
        <ToggleComponent>
            <Headline>Our Pricing</Headline>
            <PricingToggle>
                <Options>Annually</Options>
                <ToggleBtn onClick={handleClick} style={isClicked ? { justifyContent: "flex-start" } : {}} >
                    <Circle></Circle>
                </ToggleBtn>
                <Options>Monthly</Options>
            </PricingToggle>
        </ToggleComponent>
    );
}

export default Toggle;

const ToggleComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 40px;
    padding-bottom: 80px;
`

const PricingToggle = styled.div `
    display: flex;
    align-items: center;
    column-gap: 24px;
`
const ToggleBtn = styled.div`
    background: linear-gradient(135deg, #a2a7f0 0%, #696edd 100%);
    border-radius: 16px;
    width: 56px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
`;

const Circle = styled.div `
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
`

const Options = styled.p`
    color: #6e728e;
    font-size: 15px;
    line-height: 28px;
    opacity: 0.5;
    `;

    const Headline = styled.h1`
    color: #6e728e;
    font-size: 32px;
    line-height: 39px;
`;