import styled from "styled-components";

export const Header = styled.header`
heigth: 100px; 
padding: 5px;
border-bottom: 1px solid black;
width: auto;
display: flex; 
justify-content: center;
font-size: 15px;
`


export const TickersTitles = styled.div`
  width: 700px; 
  heigth: 30px;
  border-radius: 10px;
  padding: 5px;
  margin: 0;
  display: flex; 
  flex-direction: rows;
  justify-content: space-between;

  ul {
    width: 700px; 
    heigth: 20px;
    display: inherit; 
    flex-direction: inherit;
    justify-content: inherit;
    list-style-type: none

  }
  li {
      min-width: 65px;
      display: inherit;
      align-items: center;
      justify-content: center;
      border-radius: inherit;
     
        
  }
  
`
export const TickersWrapper = styled.div`
  width: 700px; 
  heigth: 40px;
  border: 0.5px solid #264653;
  border-radius: 10px;
  padding: 5px;
  margin: 2px 0;
  display: flex; 
  flex-direction: rows;
  justify-content: space-between;

  img  {
      width: 20px;
      height: 20px;
      background-color: inherit;
    }
  div {
      min-width: 65px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      heigth: 50px;
      border-radius: inherit;
      padding: 5px;
      
      
  }
`



export const TickersName = styled.div`
  border-radius: inerit;
  padding: inherit;
  margin: 5px;
  background-color: #eda268;
`





