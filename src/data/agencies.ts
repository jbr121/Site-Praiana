export type Agency = {
  id: string
  name: string
  address: string
  phone?: string
  whatsapp?: string
  email?: string
  hours: string
  note?: string
}

export const AGENCIES: Agency[] = [
  {
    id: 'itajai-matriz',
    name: 'Garagem Itajaí — Matriz',
    address: 'Rua Rosendo Claudino de Freitas, 242 — São Judas, Itajaí — 88303-360',
    phone: '(47) 3046-1031 / (47) 3341-8400',
    email: 'fiscalizacao@praiana.com.br',
    hours: 'Seg–Sex, 08:00–12:00 e 13:30–18:00',
  },
  {
    id: 'itajai-agencia',
    name: 'Agência Itajaí',
    address: 'Rua Willy Henning, 219 — São Judas, Itajaí — SC, 88303-350',
    phone: '(47) 3341-8400',
    whatsapp: '(47) 99226-2256',
    email: 'itajai@praiana.com.br',
    hours: 'Seg–Sex, 08:00–12:00 e 13:30–18:00',
  },
  {
    id: 'itapema',
    name: 'Garagem Filial Itapema',
    address: 'Rua 406 B, 755 — Morretes, Itapema — 88220-000',
    phone: '(47) 3368-5052',
    whatsapp: '(47) 99754-0214',
    email: 'recepcao.itapema@praiana.com.br',
    hours: 'Seg–Sex, 08:00–12:00 e 13:30–18:00',
  },
  {
    id: 'porto-belo',
    name: 'Ag. Rodoviária Porto Belo',
    address: 'José Alexandre Rocha, 544-642 — Porto Belo — SC, 88210-000',
    phone: '(47) 3369-4092',
    whatsapp: '(47) 98412-6017',
    email: 'portobelo@praiana.com.br',
    hours: 'Seg–Sex, 08:00–12:00 e 13:30–18:00',
  },
  {
    id: 'bc',
    name: 'Ag. Rodoviária Balneário Camboriú',
    address: 'Av. Santa Catarina — Estados, Balneário Camboriú — SC, 88339-005',
    phone: '(47) 3367-1224',
    whatsapp: '(47) 98406-1758',
    email: 'bc@praiana.com.br',
    hours: 'Seg–Sex, 08:00–12:00 e 13:30–18:00',
  },
  {
    id: 'camboriu',
    name: 'Garagem Filial Camboriú',
    address: 'Rua Siqueira Campos, 811 — Centro, Camboriú — 88340-000',
    phone: '(47) 3365-1736',
    email: 'camboriu@praiana.com.br',
    hours: 'Consulte disponibilidade',
    note: 'Telefone em manutenção',
  },
  {
    id: 'tubarao',
    name: 'Agência Tubarão',
    address: 'Rua Tereza Cristina, 236 — Oficinas, Tubarão — SC, 88702-011',
    whatsapp: '(48) 99827-3266',
    email: 'tubarao@praiana.com.br',
    hours: 'Seg–Sex, 08:00–12:00 e 13:00–17:45',
  },
  {
    id: 'sac',
    name: 'S.A.C — Ouvidoria',
    address: 'Sugestões, reclamações e atendimento ao consumidor',
    whatsapp: '(47) 99114-7784',
    email: 'sac@praiana.com.br',
    hours: 'Seg–Sex, 08:00–12:00 e 13:30–18:00',
  },
]

export const EXTERNAL = {
  compraWeb: 'https://max00383.itstransdata.com/TDMaxwebcommerce/',
  proximasPartidas: 'https://mobilibus.com/proximas-partidas/2uvyb',
  /** URL do módulo Transdata de cadastro de aluno — atualizar quando a Transdata confirmar o link oficial. */
  cadastroAluno: '' as string,
}

export const hasCadastroAlunoPortal = Boolean(EXTERNAL.cadastroAluno)
