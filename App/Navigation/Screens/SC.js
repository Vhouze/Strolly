import React, { useState, useMemo } from 'react'
import { Button } from 'react-native'
import styled from 'styled-components'
import TinderCard from 'react-tinder-card'

const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Header = styled.Text`
    color: #000;
    font-size: 30px;
    margin-bottom: 30px;
`

const CardContainer = styled.View`
    width: 90%;
    max-width: 260px;
    height: 300px;
`

const Card = styled.View`
    position: absolute;
    background-color: #fff;
    width: 100%;
    max-width: 260px;
    height: 300px;
    shadow-color: black;
    shadow-opacity: 0.2;
    shadow-radius: 20px;
    border-radius: 20px;
    resize-mode: cover;
`

const CardImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
`

const CardTitle = styled.Text`
    position: absolute;
    bottom: 0;
    margin: 10px;
    color: #fff;
`

const Buttons = styled.View`
    margin: 20px;
    z-index: -100;
`

const InfoText = styled.Text`
    height: 28px;
    justify-content: center;
    display: flex;
    z-index: -100;
`

const db = [
  {
    name: 'Bar One',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtppjr06hahJbvcxsl9bJwMslGEdMEC-Ozg&usqp=CAU'
  },
  {
    name: 'Bar Two',
    img: 'https://img.huffingtonpost.com/asset/5f71b0c3220000f40082b9aa.jpeg?cache=7oQUZjKk3M&ops=scalefit_630_noupscale'
  },
  {
    name: 'Bar Three',
    img:'https://www.herminenantes.fr/wp-content/uploads/2018/04/Meilleurs-bars-de-Nantes-pour-suivre-le-sport-1280x640.jpg'
  },
  {
    name: 'Bar four ',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuShFvjiM1mVcRGpHBDHS9iobL-jVVyH2fsQ&usqp=CAU'
  },
  {
    name: 'Bar five',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6HPg7Cde5Pf5j4YfATjS0j8YTE7zA9nXzEg&usqp=CAU'
  }
]

const alreadyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

const SC = () => {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <Container>
      <Header>React Native Tinder Card</Header>
      <CardContainer>
        {characters.map((character, index) =>
          <TinderCard ref={childRefs[index]} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <Card>
              <CardImage source={character.img}>
                <CardTitle>{character.name}</CardTitle>
              </CardImage>
            </Card>
          </TinderCard>
        )}
      </CardContainer>
      <Buttons>
        <Button onPress={() => swipe('left')} title='Swipe left!' />
        <Button onPress={() => swipe('right')} title='Swipe right!' />
      </Buttons>
      {lastDirection ? <InfoText key={lastDirection}>You swiped {lastDirection}</InfoText> : <InfoText>Swipe a card or press a button to get started!</InfoText>}
    </Container>
  )
}

export default SC