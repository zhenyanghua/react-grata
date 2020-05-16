export interface CellArea {
  id: string | number
  row: number
  column: number
  rowSpan?: number
  columnSpan?: number
}

export interface GridBaseProps {
  rows?: string[]
  columns?: string[]
  rowGap?: number | string
  columnGap?: number | string
}

export interface GridProps extends GridBaseProps {
  layout: CellArea[]
  matrix: (string | number)[][]
}

export interface CellProps {
  row?: number
  column?: number
  rowSpan?: number
  columnSpan?: number
}
