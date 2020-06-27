import React from "react"
import styled from "styled-components"
import OctaveProps from "./interface"
import { NoteType } from "../../Notes/noteType"
import Note from "../Note/Note"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

const Octave: React.FunctionComponent<OctaveProps> = ({
  notes,
  clickHandler
}) => {
  return (
    <Wrapper data-testid="wrapper">
      <div>
        {notes.map((n: NoteType) => (
          <Note
            key={n.note}
            color={n.color}
            note={n.note}
            onClick={clickHandler}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default Octave
