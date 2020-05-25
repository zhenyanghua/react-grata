# API Reference

## Grid
The container for the layout.

|`prop`| required | type | default | description|
|---|---|---|---|---|
|`className`|`false`|`string`|`''`|the name of the additional class to apply on `Grid`|
|`rows`|`false`|`string[]`|`['auto'...]`|a list of string that describes the dimension of each row. the unit could be any css supported. If your target browser does not support a certain unit, you should avoid using it.|
|`columns`|`false`|`string[]`|`['auto'...]`|a list of string that describes the dimension of each column. the unit could be any css supported. If your target browser does not support a certain unit, you should avoid using it.|
|`rowGap`|`false`|`string[]`|`0`|the width between rows|
|`columnGap`|`false`|`string[]`|`0`|the width between columns|
|`layout`|`false`|`CellArea[]`|`undefined`|an array of objects that each describe the location and span of the `Cell` in the `Grid`|
|`matrix`|`false`|`string[][]`, `number[][]`|`undefined`|a two-dimensional array describes the how the layout should look like. The value in the matrix is the `id` for each `Cell`. The rules must be followed to use matrix: 1. each cell area must form a rectangle. 2. each cell could only be used in one rectangle. 3. leave the value as `undefined` to leave an area unoccupied. `matrix` overwrites the `layout`|


## Cell
The cell is the smallest component in a `Grid`.

|`prop`| required | type | default | description|
|---|---|---|---|---|
|`className`|`false`|`string`|`''`|the name of the additional class to apply on `Grid`|
|`id`|`false`|`number`, `string`|`undefined`|the ident of the `Cell`, this must be defined when using `matrix` of `layout` on `Grid`.|
|`row`|`false`|`number`|`0`|the start row number of the `Cell`, 1 based index.|
|`column`|`false`|`number`|`0`|the start column number of the `Cell`, 1 based index.|
|`rowSpan`|`false`|`number`|`1`|the number of rows the `Cell` should span across.|
|`columnSpan`|`false`|`number`|`1`|the number of columns the `Cell` should span across.|


## CellArea
The object specification

|`prop`| required | type | default | description|
|---|---|---|---|---|
|`id`|`true`|`number`, `string`|`undefined`|the ident of the `Cell`, this must be defined when using `matrix` of `layout` on `Grid`.|
|`row`|`true`|`number`|`0`|the start row number of the `Cell`, 1 based index.|
|`column`|`true`|`number`|`0`|the start column number of the `Cell`, 1 based index.|
|`rowSpan`|`false`|`number`|`1`|the number of rows the `Cell` should span across.|
|`columnSpan`|`false`|`number`|`1`|the number of columns the `Cell` should span across.|


