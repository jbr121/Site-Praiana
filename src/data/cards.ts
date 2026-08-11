export type PassCard = {
  id: string
  name: string
  src: string
}

export const PASS_CARDS: PassCard[] = [
  { id: 'vt', name: 'Vale-transporte', src: '/images/cartoes/vt.png' },
  { id: 'cidadao', name: 'Cidadão', src: '/images/cartoes/cidadao.png' },
  { id: 'estudante', name: 'Estudante', src: '/images/cartoes/estudante.png' },
  { id: 'professor', name: 'Professor', src: '/images/cartoes/professor.png' },
  { id: 'idoso', name: 'Idoso', src: '/images/cartoes/idoso.png' },
  { id: 'idoso-municipal', name: 'Idoso municipal', src: '/images/cartoes/idoso-municipal.png' },
  { id: 'especial', name: 'Especial', src: '/images/cartoes/especial.png' },
]
