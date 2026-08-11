import { asset } from '../lib/asset'

export type PassCard = {
  id: string
  name: string
  src: string
}

export const PASS_CARDS: PassCard[] = [
  { id: 'vt', name: 'Vale-transporte', src: asset('images/cartoes/vt.png') },
  { id: 'cidadao', name: 'Cidadão', src: asset('images/cartoes/cidadao.png') },
  { id: 'estudante', name: 'Estudante', src: asset('images/cartoes/estudante.png') },
  { id: 'professor', name: 'Professor', src: asset('images/cartoes/professor.png') },
  { id: 'idoso', name: 'Idoso', src: asset('images/cartoes/idoso.png') },
  { id: 'idoso-municipal', name: 'Idoso municipal', src: asset('images/cartoes/idoso-municipal.png') },
  { id: 'especial', name: 'Especial', src: asset('images/cartoes/especial.png') },
]
