export interface DataTableColumn {
  id: string;
  title: string;
  className?: string;
  valueGetter?: Function;
  getClassName?: Function;
  click?: Function;
}
