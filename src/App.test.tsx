import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

jest.mock("./components/Octave/Octave.tsx", () =>
  jest.fn(() => <div>Octave</div>)
)

describe("App", () => {
  it("Should render App", () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })

  it("Should render Octave", () => {
    render(<App />)
    const Octave = screen.getByText("Octave")
    expect(Octave).toBeTruthy()
  })
})

