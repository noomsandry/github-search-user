export interface DataTableColumn {
  id: string;
  title: string;
  className?: string;
  width?: number;
  sortable?: boolean;
  order?: string;
  valueGetter?: Function;
  getClassName?: Function;
  click?: Function;
}
