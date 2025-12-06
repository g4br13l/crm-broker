/* export type LeadT = {
  id: string
  name: string
  phone: string
  email: string
  origin: string
  interestedIn: string
} */

import { LeadT } from '../../app/leads/_data/leadData'



export const leadsMock: LeadT[] = [
  {
    id: 1,
    name: 'João Silva',
    phone: '(11) 99999-1234',
    email: 'joao.silva@email.com',
    // origin: '1',
    interestedIn: 'Apartamento 2 quartos',
  },
  {
    id: 2,
    name: 'Maria Santos',
    phone: '(21) 98888-5678',
    email: 'maria.santos@email.com',
    origin: '2',
    interestedIn: 'Casa com quintal',
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    phone: '(31) 97777-9012',
    email: 'pedro.oliveira@email.com',
    origin: '3',
    interestedIn: 'Cobertura duplex',
  },
  {
    id: 4,
    name: 'Ana Costa',
    phone: '(41) 96666-3456',
    email: 'ana.costa@email.com',
    origin: '4',
    interestedIn: 'Studio',
  },
  {
    id: 5,
    name: 'Carlos Ferreira',
    phone: '(51) 95555-7890',
    email: 'carlos.ferreira@email.com',
    origin: '5',
    interestedIn: 'Apartamento 3 quartos',
  },
  {
    id: 6,
    name: 'Juliana Lima',
    phone: '(61) 94444-1234',
    email: 'juliana.lima@email.com',
    origin: '6',
    interestedIn: 'Loft',
  },
  {
    id: 7,
    name: 'Roberto Almeida',
    phone: '(71) 93333-5678',
    email: 'roberto.almeida@email.com',
    origin: '7',
    interestedIn: 'Terreno',
  },
  {
    id: 8,
    name: 'Fernanda Souza',
    phone: '(81) 92222-9012',
    email: 'fernanda.souza@email.com',
    origin: '1',
    interestedIn: 'Apartamento 1 quarto',
  },
  {
    id: 9,
    name: 'Ricardo Pereira',
    phone: '(91) 91111-3456',
    email: 'ricardo.pereira@email.com',
    origin: '2',
    interestedIn: 'Casa geminada',
  },
  {
    id: 10,
    name: 'Camila Rodrigues',
    phone: '(11) 90000-7890',
    email: 'camila.rodrigues@email.com',
    origin: '3',
    interestedIn: 'Apartamento garden',
  },
  {
    id: 11,
    name: 'Bruno Martins',
    phone: '(21) 99999-0123',
    email: 'bruno.martins@email.com',
    origin: '4',
    interestedIn: 'Sobrado',
  },
  {
    id: 12,
    name: 'Patrícia Gomes',
    phone: '(31) 98888-4567',
    email: 'patricia.gomes@email.com',
    origin: '5',
    interestedIn: 'Flat',
  },
]

