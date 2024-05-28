import {
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  flexRender,
  useReactTable,
  getPaginationRowModel
} from "@tanstack/react-table";
import React, { useMemo } from "react";
import Icon from "../../Icon";

interface Props {
  data: any;
  columns: any;
  pagination?: boolean;
  onRowClick?: (v: any) => void;
}
const Table = ({ data, columns, onRowClick, pagination = false }: Props) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    initialState: { pagination: { pageSize: 7 } },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableSortingRemoval: false,
    debugTable: false
  });

  const pages = useMemo(() => {
    if (table.getPageCount() == 0 || table.getPageCount() == 1) {
      return null;
    }

    return Array.from(Array(table.getPageCount()).keys());
  }, [table]);

  return (
    <div>
      <table className={"w-full custom-table"}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? `cursor-pointer select-none flex items-center ${
                                headerGroup.headers.length === index + 1 //Last column center align
                                  ? "justify-center"
                                  : ""
                              }`
                            : "",
                          onClick: header.column.getToggleSortingHandler()
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: (
                            <div className={"flex flex-col ml-1"}>
                              <Icon
                                iconName={"sort-up"}
                                viewClass={`fill-white-100 !w-[12px] !h-[10px] -mb-[2px]`}
                              />
                              <Icon
                                iconName={"sort-down"}
                                viewClass={`fill-white-600 !w-[12px] !h-[10px]`}
                              />
                            </div>
                          ),
                          desc: (
                            <div className={"flex flex-col ml-1"}>
                              <Icon
                                iconName={"sort-up"}
                                viewClass={`fill-white-100 !w-[12px] !h-[10px] -mb-[2px]`}
                              />
                              <Icon
                                iconName={"sort-down"}
                                viewClass={`fill-white-600 !w-[12px] !h-[10px]`}
                              />
                            </div>
                          )
                        }[header.column.getIsSorted() as string] ?? (
                          // empty box to avoid box moving
                          <div className={"w-[16px] invisible"}></div>
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows // .rows.slice(0, 10)
            .map((row) => {
              return (
                <tr
                  key={row.id}
                  className={onRowClick != null ? "cursor-pointer" : ""}
                  onClick={() => onRowClick?.(row.id)}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
      {pagination && pages != null && (
        <div className="py-2 px-14 flex justify-end gap-4 border-t border-[#FFFFFF4D]">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="disabled:text-white-100 text-[28px] text-white-600"
          >
            {"<"}
          </button>
          {pages.map((page) => {
            return (
              <button
                key={page}
                className={`${
                  page == table.getState().pagination.pageIndex
                    ? "bg-gray-600 text-white-700"
                    : undefined
                } text-white-100`}
                onClick={() => table.setPageIndex(page)}
              >
                {page + 1}
              </button>
            );
          })}
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="disabled:text-white-100 text-[28px] text-white-600"
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
