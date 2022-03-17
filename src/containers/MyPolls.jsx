import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Button from "../components/Button";
import Spinner from "../components/Spinner"
import PollListItem from "../components/PollListItem"
import { Link } from "wouter"

import api from '../api'
import colors from '../colors'
import typo from '../typo'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 560px;
  margin: 70px auto 24px;
`

const H2 = styled.h2`
  ${typo.h2};
  color: ${colors.mainText};
  
  text-align: left;
`

const NewPollButton = styled.button`
  background: none;
  border: 0;
  color: ${colors.newPollButton};
  border-radius: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  &:hover{
    background: ${colors.grayBlue};
    color: ${colors.brightPrimary};
    cursor: pointer;
  }
  `


const PollList = styled.div`
  max-width: 560px;
  margin: 0 auto;
`

const DottedBox = styled.div`
  width: 94%;
  height: 50%;
  display: flex;
  flex-direction: column;
  background-color: #F1F3F5;
  border: 1px dashed #8897AD;
  box-sizing: border-box;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  max-width: 560px;
  margin: 0 auto;
  margin-top: 32px;
  padding: 16px;;
`

const Text = styled.div`
  ${typo.body1};
  color: ${colors.secondaryTextOnGray};
  text-align: center;
  max-width: ${props => props.maxWidth};
  margin: 0 auto;
  margin-top: 8px;
  max-width: 300px;
`
const ButtonSizeControl = styled.div`
    max-width: 200px;
    margin-top: 28px;
`

export default class MyPolls extends React.Component{
    constructor(props) {
      super(props);
      this.state={
        data: props.polls,
      }  
    } 
  render(){

    if(this.state.data.length>0)
    return (
      <>
        <Header>
          <H2>Your Polls</H2>
          <Link href="/new"><NewPollButton>New poll</NewPollButton></Link>
        </Header>
        <PollList>
          {this.state.data.map(({id, letters, question, votes, days}) => (
            <PollListItem
              key={id}
              id={id}
              letters={letters}
              question={question}
              votes={votes}
              days={days}  
              delItemFunction = {(val)=>{this.setState(
                {data: this.state.data.filter((x)=> x.id!==val)}
                ); api.deletePoll(val)}}
            />
          ))}
        </PollList>
      </>
    )
    else 
    return (
      <>
        <Header>
          <H2>Your Polls</H2>
          <Link href="/new"><NewPollButton>New poll</NewPollButton></Link>
        </Header>
        <DottedBox>
            <Text maxWidth={560}>There is no created polls yet. Create a poll and and share a link with anyone and gather votes in seconds.</Text>
            <ButtonSizeControl>
                <Link href="/new">
                      <Button>
                        Create a new poll
                      </Button>
                </Link>
            </ButtonSizeControl>
        </DottedBox>
      </>
    )

  }
}
