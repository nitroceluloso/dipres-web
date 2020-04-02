
import { Row } from "react-table";

export interface TableBodyProps {
    data: Array<Row>;
    prepareRow: Function;
}