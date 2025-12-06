'use client'

import {
  ColumnDef,
} from '@tanstack/react-table'
import { ChevronLeft, ChevronRight, UserRoundPlus } from 'lucide-react'
import { Button } from '../../../components/base/button'
import { DataTable, TbCell, TbColTitle, TbFilterDataFnT } from '../../../components/ui/dataTable'
import { leadsMock } from '../../../shared/mocks/leadsMock'
import { LeadT, OriginOptionsKeysT, leadData } from '../_data/leadData'
import Link from 'next/link'



export default function LeadsTable() {

  const data = leadsMock
  const { getOrigin } = leadData()

  const columns: ColumnDef<LeadT>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => ( <TbColTitle name="Nome" column={column} /> ),
      cell: ({ row }) => <TbCell row={row} name="name" />,
    },
    {
      accessorKey: 'phone',
      header: ({ column }) => ( <TbColTitle name="Telefone" column={column} /> ),
      cell: ({ row }) => <TbCell row={row} name="phone" />,
    },
    {
      accessorKey: 'email',
      header: ({ column }) => ( <TbColTitle name="Email" column={column} /> ),
      cell: ({ row }) => <TbCell row={row} name="email" />,
    },
    {
      accessorKey: 'origin',
      header: ({ column }) => (<TbColTitle name="Origem" column={column} />),
      cell: ({ row }) => <TbCell row={row} name="origin" />,
      accessorFn: (row) => {
        const originKey = row.origin as `${OriginOptionsKeysT}` | undefined
        return originKey ? getOrigin(originKey).value : '-'
      },
    },
    {
      accessorKey: 'interestedIn',
      header: ({ column }) => ( <TbColTitle name="Interesse" column={column} /> ),
      cell: ({ row }) => <TbCell row={row} name="interestedIn" />,
    },
  ]

  const filterData: TbFilterDataFnT<LeadT> = (data, search) => {

    return data.filter((lead) => {

      const originVal = lead?.origin
        ? getOrigin(lead.origin).value
        : ''
      return (
        lead.name.toLowerCase().includes(search)
        || lead.phone.toLowerCase().includes(search)
        || lead.email && lead.email.toLowerCase().includes(search)
        || originVal.toLowerCase().includes(search)
        || lead.interestedIn && lead.interestedIn.toLowerCase().includes(search)
      )
    })
  }

  return (
    
    <div className="w-full">

      <DataTable
        columns={columns}
        data={data}
        filterDataFn={filterData}
        buttonNew={() => (
          <Link href="/leads/new">
            <Button>
              <UserRoundPlus />
              <span>Novo lead</span>
            </Button>
          </Link>
        )}
        buttonPagLeft={(props) => (
          <Button variant="outline" size="sm" {...props}>
            <ChevronLeft />
          </Button>
        )}
        buttonPagRight={(props) => (
          <Button variant="outline" size="sm" {...props}>
            <ChevronRight />
          </Button>
        )}
      />
        
    </div>
  )
}

