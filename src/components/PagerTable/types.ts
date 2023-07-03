import type { ElTooltipProps } from 'element-plus'

// columns Type
export interface pagerTableColumn {
  type?: string
  index?: number | Function
  label?: string
  columnKey?: string
  prop?: string
  width?: string
  minWidth?: string
  fixed?: string | boolean
  renderHeader?: Function
  sortable?: boolean | string
  sortMethod?: Function
  sortBy?: Function
  sortOrders?: Array<string | null>
  resizable?: boolean
  formatter?: Function
  showOverflowTooltip?: boolean
  align?: string
  headerAlign?: string
  className?: string
  labelClassName?: string
  selectable?: Function
  reserveSelection?: boolean
  filters?: Array<{ text: string, value: string }>
  filterPlacement?: string
  filterMultiple?: boolean
  filterMethod?: Function
  filteredValue?: Array<any>
  /* ------------- */
  slotName?: string
}

export interface propsType {
  pager?: pager
  columns?: Array<pagerTableColumn>
  data?: Array<any>
  height?: string | number
  maxHeight?: string | number
  stripe?: boolean
  border?: boolean
  size?: string
  fit?: boolean
  showHeader?: boolean
  highlightCurrentRow?: boolean
  currentRowKey?: string | number
  rowClassName?: string | Function
  rowStyle?: Function | object
  cellClassName?: Function | string
  cellStyle?: Function | object
  headerRowClassName?: Function | string
  headerRowStyle?: Function | object
  headerCellClassName?: Function | string
  headerCellStyle?: Function | object
  rowKey?: Function | string
  emptyText?: string
  defaultExpandAll?: boolean
  expandRowKeys?: Array<string>
  defaultSort?: object
  tooltipEffect?: string
  tooltipOptions?: Pick<ElTooltipProps, 'effect' | 'enterable' | 'hideAfter' | 'offset' | 'placement' | 'popperClass' | 'popperOptions' | 'showAfter' | 'showArrow'>
  showSummary?: boolean
  sumText?: string
  summaryMethod?: Function
  spanMethod?: Function
  selectOnIndeterminate?: boolean
  indent?: number
  lazy?: boolean
  load?: Function
  treeProps?: object
  tableLayout?: string
  scrollbarAlwaysOn?: boolean
  showOverflowTooltip?: boolean
  flexible?: boolean
}

interface pager {
  currentPage: string | number
  total: string | number
  pageSizes: Array<number>
  pageSize: string | number
}

