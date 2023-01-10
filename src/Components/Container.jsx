import styled from "styled-components";

const Container = (props) => {

    return (
        <>    
    {!props.active ? <MainContainer>
        <Title>{props.details.title}</Title>
        <Price><Currency>$</Currency>{ !props.isClicked ? props.details.price.monthly : props.details.price.yearly}</Price>
        <Line></Line>
        <Detail>{props.details.storage}</Detail>
        <Line></Line>
        <Detail>{props.details.users}</Detail>
        <Line></Line>
        <Detail>{props.details.send}</Detail>
        <Line></Line>
        <LearnButton onClick={props.handleClick}>learn more</LearnButton>
    </MainContainer> : <MainContainerActive>
        <TitleActive>{props.details.title}</TitleActive>
        <PriceActive><CurrencyActive>$</CurrencyActive>{!props.isClicked ? props.details.price.monthly : props.details.price.yearly}</PriceActive>
        <LineActive></LineActive>
        <DetailActive>{props.details.storage}</DetailActive>
        <LineActive></LineActive>
        <DetailActive>{props.details.users}</DetailActive>
        <LineActive></LineActive>
        <DetailActive>{props.details.send}</DetailActive>
        <LineActive></LineActive>
        <LearnButtonActive onClick={props.handleClick}>learn more</LearnButtonActive>
    </MainContainerActive> }
    </>
    )
}

export default Container;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: center;
    width: 327px;
    height: 453px;
    box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);
    border-radius: 10px;
    background-color: white;
    padding: 31px 29px;
        @media (min-width: 375px) {
        width: 350px;
    }
`;

const Line = styled.div`
    width: 269px;
    height: 1px;
    background-color: #6e728e;
    `;

const LearnButton = styled.button`
    margin-top: 20px;
    background: linear-gradient(135deg, #a2a7f0 0%, #696edd 100%);
    border-radius: 6px;
    width: 269px;
    height: 44px;
    border: 0;
    color: white;
    text-transform: uppercase;
    font-family: inherit;
    font-size: 13px;
    line-height: 15.85px;
    letter-spacing: 1.39px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        background: transparent;
        border: 1px solid #6d72de;
        color: #6d72de;
    }
    &:active {
        transform: scale(.98);
    }
    @media (min-width: 375px) {
        width: 288px;
    }
`;

const Title = styled.h3`
    color: #6e728e;
    font-size: 18px;
    line-height: 28px;
`;

const Price = styled.h1 `
    color: #4A4D60;
    font-size: 72px;
    line-height: 71px;
    letter-spacing: -2.16px;
    padding-top: 12px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    column-gap: 8px;
`

const Detail = styled.h4`
    color: #6e728e;
    font-size: 15px;
    line-height: 28px;
    `;

    const Currency = styled.p`
    font-size: 40px;
    line-height: 49px;
    letter-spacing: -1.2px;
`;

const MainContainerActive = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: center;
    width: 327px;
    height: 453px;
    background: linear-gradient(135deg, #a2a7f0 0.06%, #696edd 100.06%);
    box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);
    border-radius: 10px;
    padding: 31px 29px;
        @media (min-width: 375px) {
        width: 350px;
        height: 500px;
        padding: 54.5px 31px;
    }
`;

const LineActive = styled.div`
    width: 269px;
    height: 1px;
    background-color: white;
    opacity: 0.5;
`;

const LearnButtonActive = styled.button`
    margin-top: 20px;
    background: white;
    border-radius: 6px;
    width: 269px;
    height: 44px;
    border: 0;
    color: #6d72de;
    text-transform: uppercase;
    font-family: inherit;
    font-size: 13px;
    line-height: 15.85px;
    letter-spacing: 1.39px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
    }
    &:active {
        transform: scale(.98);
    }
    @media (min-width: 375px) {
        width: 288px;
    }
`;

const TitleActive = styled.h3`
    color: white;
    font-size: 18px;
    line-height: 28px;
`;

const PriceActive = styled.h1 `
    color: white;
    font-size: 72px;
    line-height: 71px;
    letter-spacing: -2.16px;
    padding-top: 12px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    column-gap: 8px;
`

const DetailActive = styled.h4`
    color: white;
    font-size: 15px;
    line-height: 28px;
    `;

    const CurrencyActive = styled.p`
    font-size: 40px;
    line-height: 49px;
    letter-spacing: -1.2px;
`;