import React from 'react'

import { Grid, Cell } from 'react-grata'
import './App.css'

const Header = () => (
  <>
    <h1>react-grata</h1>
    <small>Light weight react grid layout component that support IE 11. What you draw is what you get.</small>
  </>
)

const Code = () => (
  <pre>
    {`
    const App = () => {
      const matrix = [
      [1, 1, 1],
      [2, 3, 3],
      [2, 5, 6],
      [7, 7, 6],
      [8, 8, 8],
      ];

      return (
        <Grid rowGap="12px" columnGap="12px" matrix={matrix}>
        <Cell id={1}>1</Cell>
        <Cell id={2}>2</Cell>
        <Cell id={3}>3</Cell>
        <Cell id={5}>5</Cell>
        <Cell id={6}>6</Cell>
        <Cell id={7}>7</Cell>
        <Cell id={8}>8</Cell>
        </Grid>
      )
    }`}
  </pre>
)
const App = () => {
  const matrix = [
    [1, 1, 1],
    [2, 3, 3],
    [2, 5, 6],
    [7, 7, 6],
    [8, 8, 8],
  ];
  const rowGap = "12px"
  const columnGap = "12px"

  return (
    <>
      <Header />
      <Code />
      <Grid className="grid" rowGap={rowGap} columnGap={columnGap} matrix={matrix}>
        <Cell id={1}>1</Cell>
        <Cell id={2}>2</Cell>
        <Cell id={3}>3</Cell>
        <Cell id={5}>5</Cell>
        <Cell id={6}>6</Cell>
        <Cell id={7}>7</Cell>
        <Cell id={8}>8</Cell>
      </Grid>
    </>
  )
}

export default App
