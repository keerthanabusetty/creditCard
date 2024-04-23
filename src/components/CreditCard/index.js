// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  LeftCardContainer,
  Heading,
  HrLine,
  CreditCardDetails,
  CardNumber,
  CardHolderName,
  Name,
  RightCard,
  Card,
  Title,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState()
  const [name, setName] = useState()

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }
  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <BgContainer>
      <LeftCardContainer>
        <Heading>CREDIT CARD</Heading>
        <HrLine />
        <CreditCardDetails data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <Name>{name}</Name>
        </CreditCardDetails>
      </LeftCardContainer>
      <RightCard>
        <Card>
          <Title>Payment Method</Title>
          <Input
            type="digit"
            placeholder="Card Number"
            value={number}
            onChange={onChangeNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </Card>
      </RightCard>
    </BgContainer>
  )
}
export default CreditCard
