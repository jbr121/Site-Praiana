export type Period = 'manha' | 'tarde' | 'noite'

export type ScheduleEntry = {
  id: string
  name: string
  days: string
  fare: string
  times: Record<Period, string[]>
  itinerary?: string[]
}

export type Line = {
  id: string
  name: string
  region: string
  schedules: ScheduleEntry[]
}

export const LINES: Line[] = [
  {
    id: 'itajai-camboriu',
    name: 'Itajaí — Camboriú',
    region: 'Vale do Itajaí',
    schedules: [
      {
        id: 'ic-1',
        name: 'Itajaí — Camboriú',
        days: 'Seg–Sex',
        fare: 'R$ 7,90',
        times: {
          manha: ['05:20', '06:40', '08:15', '10:30'],
          tarde: ['13:00', '15:20', '17:10'],
          noite: ['18:40', '20:15'],
        },
        itinerary: ['Terminal Itajaí', 'BR-101', 'Centro Camboriú', 'Terminal Camboriú'],
      },
      {
        id: 'ic-2',
        name: 'Itajaí — Camboriú',
        days: 'Sáb',
        fare: 'R$ 7,90',
        times: {
          manha: ['06:00', '08:30', '11:00'],
          tarde: ['14:00', '16:30'],
          noite: ['18:20'],
        },
      },
    ],
  },
  {
    id: 'camboriu-itajai',
    name: 'Camboriú — Itajaí',
    region: 'Vale do Itajaí',
    schedules: [
      {
        id: 'ci-1',
        name: 'Camboriú — Itajaí',
        days: 'Seg–Sex',
        fare: 'R$ 7,90',
        times: {
          manha: ['05:00', '06:20', '07:50', '09:40'],
          tarde: ['12:40', '14:50', '16:40'],
          noite: ['18:10', '19:50'],
        },
      },
    ],
  },
  {
    id: 'bem-bom-bc',
    name: 'Bem Bom — Sentido BC',
    region: 'Expresso',
    schedules: [
      {
        id: 'bb-bc-1',
        name: 'Bem Bom — Balneário Camboriú',
        days: 'Seg–Sex',
        fare: 'R$ 12,50',
        times: {
          manha: ['06:10', '07:30', '09:00'],
          tarde: ['13:20', '17:00'],
          noite: ['19:00'],
        },
        itinerary: ['Itajaí', 'Camboriú', 'Balneário Camboriú'],
      },
    ],
  },
  {
    id: 'bem-bom-itajai',
    name: 'Bem Bom — Sentido Itajaí',
    region: 'Expresso',
    schedules: [
      {
        id: 'bb-it-1',
        name: 'Bem Bom — Itajaí',
        days: 'Seg–Sex',
        fare: 'R$ 12,50',
        times: {
          manha: ['06:40', '08:10', '10:00'],
          tarde: ['14:00', '17:40'],
          noite: ['19:30'],
        },
      },
    ],
  },
  {
    id: 'itajai-porto-belo',
    name: 'Itajaí — Porto Belo',
    region: 'Litoral Norte',
    schedules: [
      {
        id: 'ipb-1',
        name: 'Itajaí — Porto Belo',
        days: 'Seg–Sex',
        fare: 'R$ 14,90',
        times: {
          manha: ['05:40', '08:00', '10:45'],
          tarde: ['13:30', '16:50'],
          noite: ['19:10'],
        },
      },
    ],
  },
  {
    id: 'porto-belo-itajai',
    name: 'Porto Belo — Itajaí',
    region: 'Litoral Norte',
    schedules: [
      {
        id: 'pbi-1',
        name: 'Porto Belo — Itajaí',
        days: 'Seg–Sex',
        fare: 'R$ 14,90',
        times: {
          manha: ['05:20', '07:30', '09:50'],
          tarde: ['12:40', '15:50'],
          noite: ['18:20'],
        },
      },
    ],
  },
  {
    id: 'circular-itapema',
    name: 'Circular Itapema',
    region: 'Itapema',
    schedules: [
      {
        id: 'cit-1',
        name: 'Circular Itapema',
        days: 'Diário',
        fare: 'R$ 5,50',
        times: {
          manha: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00'],
          tarde: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
          noite: ['18:00', '19:00'],
        },
      },
    ],
  },
  {
    id: 'circular-porto-belo',
    name: 'Circular Porto Belo',
    region: 'Porto Belo',
    schedules: [
      {
        id: 'cpb-1',
        name: 'Circular Porto Belo',
        days: 'Diário',
        fare: 'R$ 5,50',
        times: {
          manha: ['06:15', '07:15', '08:15', '09:15', '10:15'],
          tarde: ['13:15', '14:15', '15:15', '16:15', '17:15'],
          noite: ['18:15'],
        },
      },
    ],
  },
  {
    id: 'floripa-itapema',
    name: 'Florianópolis — Itapema',
    region: 'Intermunicipal',
    schedules: [
      {
        id: 'fi-1',
        name: 'Florianópolis — Itapema',
        days: 'Seg–Sex',
        fare: 'R$ 33,50',
        times: {
          manha: ['05:20', '08:15'],
          tarde: ['13:00', '17:00'],
          noite: [],
        },
      },
    ],
  },
  {
    id: 'itapema-floripa',
    name: 'Itapema — Florianópolis',
    region: 'Intermunicipal',
    schedules: [
      {
        id: 'if-1',
        name: 'Itapema — Florianópolis',
        days: 'Seg–Sex',
        fare: 'R$ 33,50',
        times: {
          manha: ['04:45', '09:00'],
          tarde: ['13:00', '17:00'],
          noite: [],
        },
      },
    ],
  },
  {
    id: 'pedra-picarras',
    name: 'Pedra de Amolar — Piçarras',
    region: 'Piçarras',
    schedules: [
      {
        id: 'pp-1',
        name: 'Pedra de Amolar — Piçarras',
        days: 'Seg–Sex',
        fare: 'R$ 7,90',
        times: {
          manha: ['05:50'],
          tarde: [],
          noite: [],
        },
      },
    ],
  },
  {
    id: 'picarras-pedra',
    name: 'Piçarras — Pedra de Amolar',
    region: 'Piçarras',
    schedules: [
      {
        id: 'pd-1',
        name: 'Piçarras — Pedra de Amolar',
        days: 'Seg–Sex',
        fare: 'R$ 7,90',
        times: {
          manha: [],
          tarde: ['17:30'],
          noite: [],
        },
      },
    ],
  },
  {
    id: 'volta-grande-picarras',
    name: 'Volta Grande — Piçarras',
    region: 'Piçarras',
    schedules: [
      {
        id: 'vg-1',
        name: 'Volta Grande (Navegantes) — Piçarras',
        days: 'Seg–Sex',
        fare: 'R$ 7,90',
        times: {
          manha: ['08:20', '12:00'],
          tarde: [],
          noite: ['18:05'],
        },
      },
    ],
  },
  {
    id: 'picarras-volta-grande',
    name: 'Piçarras — Volta Grande',
    region: 'Piçarras',
    schedules: [
      {
        id: 'pv-1',
        name: 'Piçarras — Volta Grande',
        days: 'Seg–Sex',
        fare: 'R$ 7,90',
        times: {
          manha: ['09:00'],
          tarde: ['17:00'],
          noite: [],
        },
      },
    ],
  },
  {
    id: 'porto-belo-tijucas',
    name: 'Porto Belo — Tijucas',
    region: 'Litoral Norte',
    schedules: [
      {
        id: 'pt-1',
        name: 'Porto Belo — Tijucas',
        days: 'Seg–Sex',
        fare: 'R$ 9,90',
        times: {
          manha: ['06:30', '09:20'],
          tarde: ['14:10', '17:20'],
          noite: [],
        },
      },
    ],
  },
  {
    id: 'seletivo-itapema',
    name: 'Seletivo Itapema',
    region: 'Itapema',
    schedules: [
      {
        id: 'si-1',
        name: 'Seletivo Itapema',
        days: 'Seg–Sex',
        fare: 'R$ 8,90',
        times: {
          manha: ['06:20', '07:40', '09:10'],
          tarde: ['15:30', '17:20'],
          noite: ['18:50'],
        },
      },
    ],
  },
  {
    id: 'monte-alegre-unimed',
    name: 'Monte Alegre — Unimed BC',
    region: 'Balneário Camboriú',
    schedules: [
      {
        id: 'mu-1',
        name: 'Monte Alegre — Unimed BC',
        days: 'Seg–Sex',
        fare: 'R$ 6,90',
        times: {
          manha: ['06:00', '07:20', '08:40'],
          tarde: ['13:30', '16:50'],
          noite: [],
        },
      },
    ],
  },
  {
    id: 'unimed-monte-alegre',
    name: 'Unimed BC — Monte Alegre',
    region: 'Balneário Camboriú',
    schedules: [
      {
        id: 'um-1',
        name: 'Unimed BC — Monte Alegre',
        days: 'Seg–Sex',
        fare: 'R$ 6,90',
        times: {
          manha: ['06:40', '08:00', '09:20'],
          tarde: ['14:10', '17:30'],
          noite: [],
        },
      },
    ],
  },
]

export const PERIOD_LABELS: Record<Period, string> = {
  manha: 'Manhã',
  tarde: 'Tarde',
  noite: 'Noite',
}
