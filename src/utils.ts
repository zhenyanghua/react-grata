import React from 'react'
import { CellArea, ColumnsReplacement, RowsReplacement } from './typings'

export const PREFIX = 'grata'

/**
 * Generate a random 5-character string with concatenated with prefix.
 * todo - replace it with a hash algorithm that is based on the serialized css
 *  literal.
 */
export const random = (): string => {
  const random = Math.random().toString(36).substr(2, 5)
  return `${PREFIX}-${random}`
}

/**
 * Join array with a single space
 * @param arr
 * @return string form of array with space as separator.
 */
export const connect = (arr: string[]): string => arr.join(' ')

/**
 * Derive the ie 11 columns and rows for grid container.
 * @remarks ie 11 doesn't support gap, but we could fake gap
 * by creating extra track for layout, this behavior should
 * be managed separately for ie 11.
 *
 * ie 11 API reference
 * https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh673533(v=vs.85)?redirectedfrom=MSDN
 *
 * @param dimension
 * @param gap
 * @return dimension string literal
 */
export const deriveMsDimension = (
  dimension: string[],
  gap: string | number
): string => {
  const result = []
  let arrayIndex = 0
  let count = 0
  while (count < 2 * dimension.length - 1) {
    if (count++ % 2 === 0) {
      result.push(dimension[arrayIndex++])
    } else {
      result.push(gap.toString())
    }
  }
  return connect(result)
}

/**
 * Derive the columns and rows for the grid container.
 * @param children
 * @return {{columns: any[], rows: any[]}}
 */
export const deriveAutoDimensions = (
  children: React.ReactElement | null | undefined
) => {
  let maxColumns = 0
  let maxRows = 0

  if (children) {
    React.Children.forEach(children, (child) => {
      const { row = 1, column = 1, rowSpan = 1, columnSpan = 1 } = child.props

      if (row + rowSpan - 1 > maxRows) {
        maxRows = row + rowSpan - 1
      }
      if (column + columnSpan - 1 > maxColumns) {
        maxColumns = column + columnSpan - 1
      }
    })
  }

  return {
    columns: Array(maxColumns).fill('1fr'),
    rows: Array(maxRows).fill('auto')
  }
}

/**
 * Convert the layout array to an object
 * [{key}]
 * @param arr
 * @param key
 * @return {{}}
 */
export const arrayToObject = (arr: CellArea[], key: string | number) => {
  const obj = {}
  arr.forEach((x) => (obj[x[key]] = x))
  return obj
}

/**
 * Spread layout from the collection to each cell.
 * @param children
 * @param layout
 * @return {Array<Exclude<*, boolean | null | undefined>>}
 */
export const assignCellLayout = (
  children: React.ReactElement,
  layout: CellArea[]
) => {
  const layoutById = arrayToObject(layout, 'id')
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      ...layoutById[child.props.id],
      ...child.props
    })
  })
}

/**
 * Matrix rules are:
 * 1. it must describe a complete grid, every cell on the grid must be filled.
 * 2. each area must be a rectangle.
 * 3. each area could only be defined one.
 * 4. empty area could be defined with undefined.
 *
 * Cell row and col id are scanned in
 * the order of how the matrix is scanned.
 * top-left to bottom right.
 * If a cell is already registered, only need
 * to increment the row/col span.
 * If not, register the cell.
 */
export const deriveLayout = (matrix: (string | number)[][]) => {
  const layout = {}

  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (layout[cell]) {
        if (layout[cell].row === i + 1) {
          layout[cell].columnSpan++
        } else if (layout[cell].column === j + 1) {
          layout[cell].rowSpan++
        }
      } else if (cell) {
        layout[cell] = {
          id: cell,
          row: i + 1,
          column: j + 1,
          rowSpan: 1,
          columnSpan: 1
        }
      }
    })
  })

  return Object.keys(layout).map((id) => layout[id])
}

export enum CustomCss {
  FitHeight = 'fit-height'
}

export interface GridReplacement extends RowsReplacement, ColumnsReplacement {}

/**
 * This is the filter chain for any template replacement
 * @param gridReplacement
 */
export const replaceCustomGridTemplate = (
  gridReplacement: GridReplacement
): GridReplacement => {
  return replaceCustomRows(gridReplacement)
}

/**
 * This filter replace the 'fit-height' with the computed value height value
 * so that it occupies the remainder height space of the container.
 * @remarks the requirement for this filter to work is there must be up to
 * one row that define 'fit-height' custom value.
 * @param gridReplacement
 * @example the following sets the first and last row to have a height of
 * '200px', and the second row to occupy the remainder of the height space.
 * `<Grid rows={['200px', 'fit-height', '200px']} {...otherProps} />`
 */
const replaceCustomRows = ({
  rows,
  rowGap,
  ...rest
}: GridReplacement): GridReplacement => {
  const gaps = Array(rows.length - 1)
    .fill(rowGap)
    .join(' - ')
  let otherRows = '0'
  if (rows.includes(CustomCss.FitHeight)) {
    otherRows = rows.filter((x) => x !== CustomCss.FitHeight).join(' - ')
  }
  const newRows = rows.map((size) => {
    if (size === CustomCss.FitHeight) {
      return `calc(100% - ${otherRows} - ${gaps})`
    }
    return size
  })

  return {
    rows: newRows,
    rowGap,
    ...rest
  }
}
