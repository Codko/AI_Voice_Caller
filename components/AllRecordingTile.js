// components/AllRecordingTable.js
import React from 'react';
import { useTable } from 'react-table';
import { format } from 'date-fns';

// Dummy data for all recordings with additional fields
const allRecordings = [
  { id: 1, title: 'Recording 1', date: '2024-07-01', duration: '2:30', color: 'bg-blue-200' },
  { id: 2, title: 'Recording 2', date: '2024-07-02', duration: '3:45', color: 'bg-green-200' },
  { id: 3, title: 'Recording 3', date: '2024-07-03', duration: '4:10', color: 'bg-yellow-200' },
  { id: 4, title: 'Recording 1', date: '2024-07-01', duration: '2:30', color: 'bg-blue-200' },
  { id: 5, title: 'Recording 2', date: '2024-07-02', duration: '3:45', color: 'bg-green-200' },
  { id: 6, title: 'Recording 3', date: '2024-07-03', duration: '4:10', color: 'bg-yellow-200' },
  { id: 7, title: 'Recording 1', date: '2024-07-01', duration: '2:30', color: 'bg-blue-200' },
  { id: 8, title: 'Recording 2', date: '2024-07-02', duration: '3:45', color: 'bg-green-200' },
  { id: 9, title: 'Recording 3', date: '2024-07-03', duration: '4:10', color: 'bg-yellow-200' },
  { id: 10, title: 'Recording 1', date: '2024-07-01', duration: '2:30', color: 'bg-blue-200' },

  // Add more dummy recordings as needed
];

const columns = [
  {
    Header: 'Number',
    accessor: (row, i) => i + 1, // Use index + 1 for the row number
  },
  {
    Header: 'Date',
    accessor: 'date',
    Cell: ({ value }) => format(new Date(value), 'MMM dd, yyyy'),
  },
  {
    Header: 'Duration',
    accessor: 'duration',
  },
  {
    Header: 'Listen / Delete',
    accessor: 'action',
    Cell: () => (
      <div className="flex justify-center space-x-2">
        <button style={{ background: 'teal', color: 'white', border: 'none', padding: '8px', borderRadius: '4px' }}>
          Listen
        </button>
        <button style={{ background: 'red', color: 'white', border: 'none', padding: '8px', borderRadius: '4px' }}>
          Delete
        </button>
      </div>
    ),
  },
];

const AllRecordingTable = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: allRecordings });

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-semibold mt-4 mb-8 text-center">All Recordings</h1>
      <div className="w-full max-w-4xl mb-6">
        <table {...getTableProps()} className="table-auto w-full bg-white border border-gray-300">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-teal-100">
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className="border border-gray-300 px-4 py-2 text-center">
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} className="border border-gray-300 px-4 py-2 text-center">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRecordingTable;
