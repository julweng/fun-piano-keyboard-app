import React from "react"
import { render, screen } from "@testing-library/react"
import OctaveProps from "./interface"
import Octave from "./Octave"

jest.mock("../Note/Note", () => jest.fn(() => <div>Notes</div>))

const createProps = (): OctaveProps => ({
  notes: [
    {
      note: "C",
      color: "white"
    },
    {
      note: "CSharp",
      color: "black"
    }
  ],
  clickHandler: jest.fn()
})

describe("Octave", () => {
  it("Should render wrapper", () => {
    const props = createProps()
    render(<Octave {...props} />)
    const Wrapper = screen.getByTestId("wrapper")
    expect(Wrapper).toBeTruthy()
  })

  it("Should render Notes based on the notes prop", () => {
    const props = createProps()
    render(<Octave {...props} />)
    const allNotes = screen.getAllByText("Notes")
    expect(allNotes).toHaveLength(2)
  })
})
