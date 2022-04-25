import * as React from "react"
import App from './App'
import {render, fireEvent} from '@testing-library/react'

test("renders the correct content", () =>{
    const {getByText} = render(<App/>)
    getByText("Dropdown")

})
test("checks if dropdown opens", () =>{
    const {getByText} = render(<App/>)
    const button = getByText("Dropdown")
    fireEvent.click(getByText("Dropdown"))
    getByText("pigus")
})