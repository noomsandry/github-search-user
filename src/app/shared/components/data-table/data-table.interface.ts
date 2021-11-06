export interface DataTableColumn {
  id: string;
  title: string;
  className?: string;
  width: number;
  valueGetter?: Function;
  getClassName?: Function;
  click?: Function;
}
