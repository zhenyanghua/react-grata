# More Usages

## Responsive Design

When using it with media query, we could completely decouple the layout from the component tree.

```typescript jsx
import React from 'react'
import { Grid, Cell } from 'react-grata'
import { useMediaQuery } from 'react-responsive'

const App = () => {
  
  const isLargeScreen = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const matrixLg = [
    [1, 1, 1],
    [2, 3, 3],
    [2, 5, 6],
    [7, 7, 6],
    [8, 8, 8],
  ];
  const matrixOthers = [
    [1, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 8]
  ]
  const matrix = isLargeScreen ? matrixLg : matrixOthers;

  return (
   <Grid matrix={matrix}>
     <Cell id={1}>Component One</Cell>
     <Cell id={2}>Component Two</Cell>
     <Cell id={3}>Component Three</Cell>
     <Cell id={5}>Component Five</Cell>
     <Cell id={6}>Component Six</Cell>
     <Cell id={7}>Component Seven</Cell>
     <Cell id={8}>Component Eight</Cell>
   </Grid>
  )
}
```
