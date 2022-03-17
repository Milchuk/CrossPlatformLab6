import React from "react"
import styled from "styled-components"
import colors from '../colors'
import typo from '../typo'


const CheckBox = styled.svg`
    margin: 26px 10px 26px 0;
    & > path {
    fill: ${props => props.active ? "#F04F2B" : "#00000"} !important;
    }
    &:hover>path{
    fill: #F04F2B !important;
  }
`

const Conteiner = styled.div`
    display: flex;
    justify-content: end;
    cursor: pointer;
    width: 80%;
    margin-left: 7.7%;
    margin-right: 7.7%;
    &:hover > div {
    border-color: ${props=>props.active? props.color : colors.OptionLineGray}
    }
    &:hover > svg > path{
    fill: ${colors.OptionLineGray}
    }
    & >div {
    border-color: ${props=>props.active? props.color : colors.white}; 
    }
`

const Label = styled.div`
${typo.label1};
    margin-bottom: 3px;
    margin-left: 12px;
    margin-top: 12px;
    padding-right: 12px;
`

const VoteBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-radius: 8px;
    box-sizing: border-box;
    width: 100%;
    height: 64px;
`
const MainLines = styled.div`
    display: flex;
    border: 1px solid empty;
    border-radius: 2px;
    width: 99%;
    margin-bottom: 16px;
    padding-left: 12px;
`
const LineNotFill = styled.div`
    width: ${props=>props.value? 100-props.value:100}%;
    color: ${colors.OptionLineNotFill};
    background-color: ${colors.OptionLineNotFill};
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    margin-right: 12px  ;
`

const LineFill = styled.div`
    width: ${props=>props.value ? props.value: 0}%;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    color:${props=>props.color? props.color: colors.white};
    background-color: ${props=>props.color? props.color: colors.white};
`


const Labels = styled.div`
  display: flex;
  justify-content: space-between;
`

function CountPercent(x,y){
    return Math.round((Number(x)/Number(y))*100)
}

export default class OptionLine extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            voted: props.prevVote===props.id,
            vote: props.vote,
            votes: props.votes,
            percent: props.votes===0? 0 : CountPercent(props.vote, props.votes)
        }
    }

    render() {
        // const { color, tittle, func} = this.props
        const { color, tittle} = this.props
        let x=Number(this.state.vote);
        let y=Number(this.state.votes);
        console.log(x/y);
        return (
        <>
            <Conteiner color={color} active={this.state.voted}>
            <VoteBox >
                <Labels>
                    <Label>{tittle}</Label>
                    <Label>{this.state.percent}%</Label>
                </Labels>
                <MainLines>
                    <LineFill color={color} value={this.state.percent}>text</LineFill>
                    <LineNotFill value={this.state.percent}>text</LineNotFill>
                </MainLines>
            </VoteBox>
                <CheckBox active={this.state.voted} onClick={()=>{if (!this.state.voted) { this.setState({voted: true,votes: this.votes+1, vote: this.vote+1, percent: CountPercent(x+1,y+1) });return 1}}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM10.2929 5.29289L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289Z" />
                </CheckBox>
            </Conteiner>            
        </>
        )
    }
}