import { NoteType } from "../../Notes/noteType"

interface OctaveProps {
  notes: NoteType[]
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default OctaveProps
