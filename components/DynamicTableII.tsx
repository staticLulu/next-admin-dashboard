import React from "react";

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
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead className="bg-green-500 text-white">
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="px-4 py-2 border border-gray-300">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="odd:bg-gray-100">
            {columns.map((column) => (
              <td
                key={column.key}
                className="px-4 py-2 border border-gray-300"
              >
                {column.render ? column.render(row) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
