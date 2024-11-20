"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

interface Column {
  key: string;
  header: string;
  render?: (row: any) => React.ReactNode;
}

interface DynamicTableProps {
  columns: Column[];
  data: any[];
}

const DynamicTable: React.FC<DynamicTableProps> = ({ columns, data }) => {
  return (
    <Table 
      className="
        dark:bg-slate-800 
        text-slate-700 
        dark:text-slate-50 
        rounded-xl 
        shadow-sm
      "
    >
      <TableHeader>
        {columns.map((col) => (
          <TableColumn key={col.key.toString()} className="border">
            {col.header}
          </TableColumn>
        ))}
      </TableHeader>
      {data.length 
        ? <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                {columns.map((col) => (
                  <TableCell key={col.key.toString()} className="border">
                     {col.render ? col.render(row) : row[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        : <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
      }
    </Table>
  );
};

export default DynamicTable;