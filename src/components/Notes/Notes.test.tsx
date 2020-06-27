import React from "react"
import { render } from "@testing-library/react"
import Notes from "./Notes"
import NotesProps from "./types"

const createProps = (color: string): NotesProps => ({
  color,
  note: "A",
  onClick: jest.fn()
})

describe("Notes", () => {
  it("Should match snapshot if color prop is white", () => {
    const props = createProps("white")
    const { getByTestId } = render(<Notes {...props} />)
    expect(getByTestId("white-key")).toBeTruthy()
  })

  it("Should match snapshot if color prop is black", () => {
    const props = createProps("black")
    const { getByTestId } = render(<Notes {...props} />)
    expect(getByTestId("black-key")).toBeTruthy()
  })

  it("Should call onClick when button is clicked", () => {
    const props = createProps("white")
    const { getByTestId } = render(<Notes {...props} />)
    getByTestId("white-key").click()
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
