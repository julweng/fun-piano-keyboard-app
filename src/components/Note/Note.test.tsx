import React from "react"
import { render, screen } from "@testing-library/react"
import Note from "./Note"
import NotesProps from "./types"

const createProps = (color: string): NotesProps => ({
  color,
  note: "A",
  onClick: jest.fn()
})

describe("Note", () => {
  it("Should render white key if color prop is white", () => {
    const props = createProps("white")
    render(<Note {...props} />)
    const WhiteKey = screen.getByTestId("white-key")
    expect(WhiteKey).toBeTruthy()
  })

  it("Should render black key if color prop is black", () => {
    const props = createProps("black")
    render(<Note {...props} />)
    const BlackKey = screen.getByTestId("black-key")
    expect(BlackKey).toBeTruthy()
  })

  it("Should call onClick when button is clicked", () => {
    const props = createProps("white")
    const { getByTestId } = render(<Note {...props} />)
    getByTestId("white-key").click()
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
