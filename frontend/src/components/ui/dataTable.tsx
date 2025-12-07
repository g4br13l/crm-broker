'use client'

import { ColumnDef, ColumnFiltersState, HeaderContext, PaginationState, Row, SortingState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { ArrowDownUp, ArrowUpDown, Search } from 'lucide-react'
import { ComponentProps, ComponentType, useMemo, useState } from 'react'
import { Button } from '../base/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../base/table'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../base/inputGroup'



type HeaderTitlePropsT<TData, TValue> = {
  column: HeaderContext<TData, TValue>['column']
  name: string
}

export function TbColTitle<TData, TValue>({
  column,
  name,
}: HeaderTitlePropsT<TData, TValue>) {
  return (

    <div className="f-row-left-center gap-1">
      <span>{name}</span>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        <ArrowDownUp size="16" className="text-muted-foreground" />
      </Button>
    </div>

  )
}


type TbCellPropsT<T> = {
  row: Row<T>,
  name: string,
}

export function TbCell<T>({ row, name }: TbCellPropsT<T>) {
  return (
    <div>{row.getValue(name)}</div>
  )
}



export type TbFilterDataFnT<T> = (data: T[], search: string) => T[]

type DataTablePropsT<T> = {
  tbOptions?: Parameters<typeof useReactTable<T>>
  columns: ColumnDef<T>[]
  data: T[]
  /* onSortingChange: OnChangeFn<SortingState>
  onColumnFiltersChange: Dispatch<SetStateAction<ColumnFiltersState>> */
  filterDataFn: TbFilterDataFnT<T>
  buttonNew?: ComponentType<ComponentProps<typeof Button>>
  buttonPagLeft?: ComponentType<ComponentProps<typeof Button>>
  buttonPagRight?: ComponentType<ComponentProps<typeof Button>>
}


export function DataTable<T>({
  tbOptions,
  columns,
  data,
  filterDataFn,
  buttonNew: ButtonNew,
  buttonPagLeft: ButtonPagLeft,
  buttonPagRight: ButtonPagRight,
}: DataTablePropsT<T>) {

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0,pageSize: 10 })
  const [globalFilter, setGlobalFilter] = useState('')

  const filteredData = useMemo(() => {
    
    if (!globalFilter) return data
    const search = globalFilter.toLocaleLowerCase()
    return filterDataFn(data, search)

  }, [data, filterDataFn, globalFilter])


  const table = useReactTable<T>({
    columns,
    data: filteredData,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      pagination,
    },
    ...tbOptions,
  })


  return (

    <div id="dataTableComp" className="f-col w-full">

      <div className="f-row-center flex-wrap-reverse justify-between gap-4 my-4">
        
        <div className="f-col flex-1">
          <InputGroup className="min-w-xs max-w-md h-11">
            <InputGroupInput
              placeholder="Busque..."
              value={globalFilter}
              onChange={(event) => setGlobalFilter(event.target.value)}
            />
            <InputGroupAddon>
              <Search size="20" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              {filteredData?.length ?? '0'} resultado(s)
            </InputGroupAddon>
          </InputGroup>
        </div>

        {ButtonNew && (
          <div className="flex flex-col flex-1 items-end">
            <ButtonNew />
          </div>
        )}

      </div>

      <div className="f-col border rounded-md overflow-hidden">
        <Table>
          
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Nenhum resultado encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>

        </Table>
      </div>

      <div className="flex justify-end items-center space-x-2 py-4">

        <div className="flex-1 text-muted-foreground text-sm">
          {filteredData?.length ?? '0'} resultado(s) encontrado(s).
        </div>

        <div className="space-x-2">
          {ButtonPagLeft && (
            <ButtonPagLeft
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            />
          )}
          {ButtonPagRight && (
            <ButtonPagRight
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            />
          )}
        </div>

      </div>

    </div>

  )
}
