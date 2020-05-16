import React from 'react'

import { Grid, Cell } from 'react-grata'

const App = () => {
  const matrix = [
    [1, 1, 1],
    [2, 3, 3],
    [2, 5, 6],
    [7, 7, 6],
    [8, 8, 8],
  ];
  const rowGap = "10px"
  const columnGap = "24px"

  return (
    <Grid rowGap={rowGap} columnGap={columnGap} matrix={matrix}>
      <Cell id={1}>1</Cell>
      <Cell id={2}>2</Cell>
      <Cell id={3}>3</Cell>
      <Cell id={5}>5</Cell>
      <Cell id={6}>6</Cell>
      <Cell id={7}>7</Cell>
      <Cell id={8}>8</Cell>
    </Grid>
  )
}

export default App
