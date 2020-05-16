export interface CellArea {
  id: string | number
  row: number
  column: number
  rowSpan?: number
  columnSpan?: number
}

export interface BasicProps {
  className?: string
}

export interface GridBaseProps extends BasicProps {
  rows?: string[]
  columns?: string[]
  rowGap?: number | string
  columnGap?: number | string
}

export interface GridProps extends GridBaseProps {
  layout?: CellArea[]
  matrix?: (string | number)[][]
}

export interface CellProps extends BasicProps {
  row?: number
  column?: number
  rowSpan?: number
  columnSpan?: number
  id?: number | string
}
