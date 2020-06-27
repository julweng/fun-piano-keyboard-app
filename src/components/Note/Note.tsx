import React from "react"
import styled from "styled-components"
import NotesProps from "./types"

export const BlackKey = styled.button`
  width: 40px;
  height: 130px;
  background: #000;
  border: 1px solid black;
  position: absolute;
  box-sizing: border-box;
  margin: 1px;
  margin-left: "-20px";
  :active {
    background: #333;
  }
`

export const WhiteKey = styled.button`
  width: 60px;
  height: 200px;
  background: #fff;
  border: 1px solid black;
  margin: 1px;
  margin-left: "-20px";
  box-sizing: border-box;
  :active {
    background: #eee;
  }
`

const Note: React.FunctionComponent<NotesProps> = ({ color, note, onClick }) =>
  color === "white" ? (
    <WhiteKey value={note} onClick={onClick} data-testid="white-key" />
  ) : (
    <BlackKey value={note} onClick={onClick} data-testid="black-key" />
  )

export default Note
