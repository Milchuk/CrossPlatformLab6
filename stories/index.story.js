import React from 'react'
import {storiesOf} from '@storybook/react'

import Button from '../src/components/Button'
import Input from '../src/components/Input'
import PollListItem from '../src/components/PollListItem'
import MyPolls from '../src/containers/MyPolls'
import Option from '../src/components/Option'
import OptionLine from '../src/components/OptionLine'
import Poll from '../src/containers/Poll'

storiesOf('Button', module)
  .add('Button', () => (
    <Button>Add new poll</Button>
  ))
  .add('Button With Spinner', () => (
    <Button loading={true}>Add new poll</Button>
  ))
  .add('Button [disabled]', () => (
    <Button disabled={true}>Add new poll</Button>
  ))
  .add('Button Disabled With Spinner', () => (
    <Button loading={true} disabled={true}>Add new poll</Button>
  ))

storiesOf('Input', module)
  .add('Basic Input', () => (
    <Input label = {"P1"} placeholder={'needs to be at least 3 characters'} errorMessage={'The username needs to be at least 3 characters'}  onChange = {(value) => value.length < 3}/>
  )
  )
  
storiesOf('Option', module)
  .add('Option  Input', () => (
    <Option label = {"Option 1"} placeholder={'needs to be at least 3 characters'} errorMessage={'The username needs to be at least 3 characters'}  onChangeText = {(value) => value.length < 3}/>
  )
  )
  .add('OptionLine', () => {
    const line =[{
      tittle:"Option1",
      color:"#F26B3A",
      votes:41,
      vote:40,
      prevVote:"MGxgX",
      id:"MGxgX1"
  },
  {
      tittle:"Option2",
      color:"#F04F2B",
      votes:0,
      vote:0,
      prevVote:"MGxgX",
      id:"MGxgX1",
      
  },
  {
      tittle:"Option3",
      color:"#31B786",
      vote:6,
      votes:25,
      prevVote:"MGxgX",
      id:"MGxgX"
  }]
  
  return line.map(({tittle,color,votes,vote,prevVote, id})=>(<OptionLine tittle={tittle} color={color} vote={vote} votes={votes} prevVote={prevVote} id={id}/>))
  }
  )
  


storiesOf('PollListItem', module)
  .add('PollListItemsSample', () => {
    const polls = [{
      id: "5fae5f1c68992ec350f6b79d",
      letters: "WF",
      question: "What is your favourite programming language?",
      votes:21,
      days: 2
    }, {
      id: "5fae5f4368992ec350f6b79e",
      letters: "GD",
      question: "Game Development vs Mobile Development",
      votes:51,
      days: 10
    }, {
      id: "5fae8090d43732c81bd9f6bc",
      letters: "CD",
      question: "Cats or Dogs",
      votes:51,
      days: 10
    }]

    return polls.map(({id, letters, question, votes,days}) => (
      <PollListItem
        key={id}
        letters={letters}
        question={question}
        votes={votes}
        days={days}
      />
    ))
  })

.add('Poll', ()=>{
  const polls = [{
    id: "5fae5f1c68992ec350f6b79d",
    letters: "WF",
    question: "What is your favourite programming language?",
    votes:21,
    days: 2
  }, {
    id: "5fae5f4368992ec350f6b79e",
    letters: "GD",
    question: "Game Development vs Mobile Development",
    votes:51,
    days: 10
  }, {
    id: "5fae8090d43732c81bd9f6bc",
    letters: "CD",
    question: "Cats or Dogs",
    votes:51,
    days: 10
  }]
  return <Poll data={polls}> </Poll>
})

 .add('MyPolls', ()=>{
  const polls = [{
    id: "5fae5f1c68992ec350f6b79d",
    letters: "WF",
    question: "What is your favourite programming language?",
    votes:21,
    days: 2
  }, {
    id: "5fae5f4368992ec350f6b79e",
    letters: "GD",
    question: "Game Development vs Mobile Development",
    votes:51,
    days: 10
  }, {
    id: "5fae8090d43732c81bd9f6bc",
    letters: "CD",
    question: "Cats or Dogs",
    votes:51,
    days: 10
  }]
  return <MyPolls data={polls}></MyPolls>
 }
 )



