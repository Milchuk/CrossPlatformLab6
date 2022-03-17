import React from "react"
import styled from "styled-components"
import WidgetWithTitle from "../components/WidgetWithTitle"
import OptionLine from "../components/OptionLine";
import Button from "../components/Button";
import colors from '../colors'
import typo from '../typo'


const H1 = styled.h1`
  ${typo.h1};
  color: ${colors.mainText};
  margin-top: 40px;
  text-align: center;
`

const ContainerButton = styled.div`
  max-width: 520px;
  margin-right: 40%;
  margin-left: 40%;
  margin-top: 42px;
`



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


export default class Poll extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      polls: props.data,
    }  
  } 
render(){
  console.log(this.state.polls)
  return(
  <>
      <ContainerButton>
      <WidgetWithTitle

            maxWidth="920px"
        >
          {this.state.polls.map(({id, letters, question, votes,days}) => 
            <OptionLine
              key={id}
              letters={letters}
              question={question}
              votes={votes}
              days={days}
            />)
        }
        </WidgetWithTitle>
      </ContainerButton>
    </>
)
}
}
