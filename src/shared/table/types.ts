
import { Column } from "react-table";

export interface TableProps<E extends object> {
    config: Array<Column>;
    data: Array<Column<E>>;
}