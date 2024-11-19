"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

interface TableProps<T> {
  columns: { key: keyof T; header: string }[];
  data: T[];
}

const DynamicTable = <T,>({ columns, data }: TableProps<T>) => {
  return (
    <Table aria-label="Dynamic Table" className="dark:bg-slate-800 text-slate-50">
      <TableHeader className="dark:bg-slate-600">
        {columns.map((col) => (
          <TableColumn key={col.key.toString()}>
            {col.header}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map((col) => (
              <TableCell key={col.key.toString()}>
                {row[col.key] as React.ReactNode}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DynamicTable;
