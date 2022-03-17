import React from "react"
import styled from "styled-components"

import WidgetWithTitle from "../components/WidgetWithTitle"
import colors from '../colors'
import typo from '../typo'
import Input from "../components/Input";
import Button from "../components/Button";
import Option from "../components/Option";
import api from '../api'

console.log(api)

const Label = styled.div`
    ${typo.label1};
`

const H1 = styled.h1`
  ${typo.h1};
  color: ${colors.mainText};
  margin-top: 40px;
  text-align: center;
`

const PollListItemContainer = styled.div`
  background: ${colors.white};
  cursor: pointer;
  align-content: center;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`

const AddButton =styled.div`
width: 95%;
&:hover > svg > path{
  fill: #DFE1E4;
}
`

const ButtonDiv = styled.div`
  margin-top: 32px;
    width: 20%;
`




class NewPollS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            list: []
        };
        //this.AddDivchik = this.AddDivchik.bind(this);
    }

    
    addOne = () => {
      this.setState({
        list: [...this.state.list, ''],
        count: this.state.count + 1,
      })
    }

    replaceValueWithIndex = (index, newValue) => {
      const newList = [...this.state.list];
      newList[index] = newValue; 
      this.setState({
        list: newList
      })
    }
  
    create = () => {
      let opt = []
      for (let i=1; i<this.state.count; ++i)
        opt.push({"title": this.state.list[i]})
      let ans = {'question': this.state.list[0], 'options':opt }
      api.createPoll(ans);

    }

    render() {
        console.log(this.state.list)
        return <>
            <Container>
                <WidgetWithTitle
                    header="New Poll"
                    text="To start a poll just share a link on them with your friends. Once you have one vote it can't be edited anymore."
                    maxWidth="520px"
                >
                    <PollListItemContainer>
                    {/* <Option label = {"Poll question"} key={-1} onChange={ (value) => {this.replaceValueWithIndex(0, value)}} placeholder={'needs to be at least 3 characters'} errorMessage={'The username needs to be at least 3 characters'}  onChangeText = {(value) => value.length < 3}/> */}
                    
                      <div>{this.state.list.map((item, index) => {
                        let labeltmp=  (index===0)? "Poll question" :"Option "+(index);
                        return <Option
                        label = {labeltmp}
                        key ={index}
                        value={item}
                        onChange={ (value) => {this.replaceValueWithIndex(index, value)}}
                        placeholder={'needs to be at least 3 characters'}
                        errorMessage={'The username needs to be at least 3 characters'}
                        onChangeText = {(value) => value.length < 3}/>
                      })}</div>
                    <AddButton onClick={this.addOne} >
                            <Label>+ Add another option</Label>
                    </AddButton>
                    </PollListItemContainer>
                </WidgetWithTitle>
                <ButtonDiv><Button onClick={this.create}>Create poll</Button></ButtonDiv>
            </Container>
        </>
    }
}

export default function CreatePoll(){
    return <NewPollS></NewPollS>
}