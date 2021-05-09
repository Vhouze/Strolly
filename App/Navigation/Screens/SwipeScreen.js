import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import TinderCard from 'react-tinder-card';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '../../Constant/Color';

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
    img:'https://www.lyoncapitale.fr/wp-content/uploads/2019/06/010_guillotiere_lyon_nuit_bar.jpg'
  },
  {
    name: 'Bar Two',
    img: 'https://static.wixstatic.com/media/80ddee_7e9d138c4b13426b907b6d841368e92a~mv2.png/v1/fill/w_1328,h_890,al_c/80ddee_7e9d138c4b13426b907b6d841368e92a~mv2.png'
  },
  {
    name: 'Bar Three',
    img:'https://www.herminenantes.fr/wp-content/uploads/2018/04/Meilleurs-bars-de-Nantes-pour-suivre-le-sport-1280x640.jpg'
  },
  {
    name: 'Bar four ',
    img: 'https://cdn.galaxy.tf/unit-media/tc-group/uploads/images/restaurant_photo/001/557/832/duke-s-bar-overview-back-2.jpg'
  },
  {
    name: 'Bar five',
    img: 'https://ik.imagekit.io/youshould/tr:w-1500,rt-auto/2018/edi-libedinsky-709320-unsplash_SydUiuaPX.jpg'
  }
]

const alreadyRemoved = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

export default function SwipeScreen({navigation}) {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
    if (direction === 'right') {
      console.log('right');
      move();}

  }

  const move = () => {navigation.navigate('Maps Screen')};

  const back = () => { navigation.goBack()} 

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
      childRefs[index].current.swipe(dir)
      if (dir === 'right') {
        console.log('right');
        move(); // Swipe the card!
    }}

  }

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={back} style={{top:45, left: 10 , position : 'absolute'}}>
        <MaterialCommunityIcons name="arrow-left-circle" color={Color.first} size= {37} /> 
      </TouchableOpacity>
      <View style={{flex: 7, marginTop: 180, }}>
        <Container>
          <CardContainer>
            {characters.map((character, index) =>
              <TinderCard ref={childRefs[index]} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                <Card>
                  <CardImage source={{uri : character.img}}>
                    <CardTitle>{character.name}</CardTitle>
                  </CardImage>
                </Card>
              </TinderCard>
            )}
          </CardContainer>

        <View style={{flexDirection:'row', marginVertical: 100}}>
          <TouchableOpacity style={{marginHorizontal: 35}} onPress={() => swipe('left')}>
            <View>
              <MaterialCommunityIcons name="close-circle" color={Color.second} size= {100} /> 
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 35}} onPress={() => swipe('right')}>
            <View>
              <MaterialCommunityIcons name="checkbox-marked-circle" color={Color.first} size= {100} /> 
            </View>
          </TouchableOpacity>

        </View>      
        </Container>
      </View>
    </View>
  )
}

