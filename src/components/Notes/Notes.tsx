import React from "react"
import styled from "styled-components"
import NotesProps from "./types"

export const BlackKey = styled.button`
  width: 40px;
  height: 130px;
  background: #000;
  border: 1px solid black;
  position: absolute;

  :active {
    background: #333;
  }
`

export const WhiteKey = styled.button`
  width: 60px;
  height: 200px;
  background: #fff;
  border: 1px solid black;
  :active {
    background: #eee;
  }
`

const Notes: React.FunctionComponent<NotesProps> = ({
  color,
  note,
  onClick
}) => (
  <div style={{ backgroundColor: "#FFF" }}>
    {color === "white" ? (
      <WhiteKey value={note} onClick={onClick} data-testid="white-key" />
    ) : (
      <BlackKey value={note} onClick={onClick} data-testid="black-key"/>
    )}
  </div>
)

export default Notes
