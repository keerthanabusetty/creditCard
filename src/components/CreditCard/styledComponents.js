// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  background-color: #ffffff;
  background-size: cover;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`
export const LeftCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: 100vh;
  background-color: #3b4b69;
  background-size: cover;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 35px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 25px;
  }
`
export const HrLine = styled.hr`
  border: 3px solid #ffd773;
  width: 20%;
`
export const CreditCardDetails = styled.div`
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 225px;
  width: 350px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  padding-left: 10px;
  margin-top: 70px;
  @media screen and (max-width: 576px) {
    height: 150px;
    width: 200px;
  }
`
export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 27px;
  font-family: 'Roboto';
  font-weight: bold;
  @media screen and (max-width: 576px) {
    font-size: 19px;
  }
`

export const CardHolderName = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`

export const Name = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const RightCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  background-size: cover;
  width: 50%;
  height: 100vh;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  background-size: cover;
  height: 200px;
  width: 250px;
  box-shadow: 2px 2px 2px 2px #d3d9e0;
`

export const Title = styled.h2`
  color: #344e7a;
  font-size: 20px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`

export const Input = styled.input`
  background-color: transparent;
  color: #475569;
  border: 1px solid #c3cad9;
  padding: 5px;
  margin-top: 10px;
`
