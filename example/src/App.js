import React from 'react'

import { GridBase } from 'react-grata'

const App = () => {
  const matrix = [
    [1],
    [2]
  ];

  return <GridBase rowGap="10px" columnGap="24px" matrix={matrix}>
    <div id={1}>1</div>
    <div id={2}>2</div>
  </GridBase>
}

export default App
