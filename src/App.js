import Container from "./Components/Container";
import Toggle from "./Components/Toggle";
import styled from "styled-components";
import { useState } from "react";

function App() {

  const basic = {title: "Basic", price: {monthly: "19.99", yearly: "199.99"}, storage: "500 GB Storage", users: "2 Users Allowed", send: "Send up to 3 GB"}
  const professional = {title: "Professional", price: {monthly: "24.99", yearly: "249.99"}, storage: "1 TB Storage", users: "5 Users Allowed", send: "Send up to 10 GB"}
  const master = {title: "Master", price: {monthly: "39.99", yearly: "239.99"}, storage: "2 TB Storage", users: "10 Users Allowed", send: "Send up to 20 GB"}

    const [isClicked, setIsClicked] = useState(false);
    const [activeComponent, setActiveComponent] = useState("professional");
    const handleClick = (component) => {
      setActiveComponent(component);
    }


  return (
    <Main>
      <Toggle isClicked={isClicked} setIsClicked={setIsClicked} />
      <List>
        <Container details={basic} active = {activeComponent === "basic"} handleClick={() => {handleClick("basic")}} isClicked={isClicked} setIsClicked={setIsClicked}/>
        <Container details={professional} active = {activeComponent === "professional"} handleClick={() => {handleClick("professional")}} isClicked={isClicked} setIsClicked={setIsClicked}/>
        <Container details={master} active = {activeComponent === "master"} handleClick={() => {handleClick("master")}} isClicked={isClicked} setIsClicked={setIsClicked}/>
      </List>
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

`; 

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  @media (min-width: 375px) {
    flex-direction: row;
    align-items: center;
  }
`;