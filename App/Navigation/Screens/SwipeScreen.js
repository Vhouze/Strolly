import React, { useState } from 'react'
import styled from 'styled-components/native'
import TinderCard from 'react-tinder-card'
// import Activités from '../Db/Activités.json'

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

const InfoText = styled.Text`
    height: 28px;
    justify-content: center;
    display: flex;
    z-index: -100;
`

const db = [
  {
    name: 'Richard Hendricks',
    img: require('../../assets/img/Swipe/1.jpeg')
  },
  {
    name: 'Erlich Bachman',
    img: require('../../assets/img/Swipe/2.jpeg')
  },
  {
    name: 'Monica Hall',
    img: require('../../assets/img/Swipe/3.png')
  },
  {
    name: 'Jared Dunn',
    img: require('../../assets/img/Swipe/1.jpeg')
  },
  {
    name: 'Dinesh Chugtai',
    img: require('../../assets/img/Swipe/2.jpeg')
  }
]

export default function SwipeScreen({navigation,route}) {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    if (direction === 'right') {
      console.log('right');
      move();
    }
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  const move = () => {navigation.navigate('Maps Screen')};


  return (
    <Container>
      <Header>Where do you want to go ?</Header>
      <CardContainer>
        {characters.map((character) =>
          <TinderCard key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
          {/* <TinderCard key={character.Name} onSwipe={(dir) => swiped(dir, character.Name)} onCardLeftScreen={() => outOfFrame(character.Name)}> */}
          <Card>
            <CardImage source={character.img}>
            {/* <CardImage source={character.Photo}> */}
            {/* <CardTitle>{character.Name}</CardTitle> */}
            <CardTitle>{character.name}</CardTitle>
              </CardImage>
            </Card>
          </TinderCard>
        )}
      </CardContainer>
      {lastDirection ? <InfoText>You swiped {lastDirection}</InfoText> : <InfoText />}
    </Container>
  )
}