import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { LINES, PERIOD_LABELS, type Period } from '../data/lines'
import './Horarios.css'

const periods: Period[] = ['manha', 'tarde', 'noite']

export function Horarios() {
  const [params, setParams] = useSearchParams()
  const queryLine = params.get('linha') ?? ''
  const [selected, setSelected] = useState(queryLine)
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    setSelected(queryLine)
  }, [queryLine])

  const line = useMemo(() => LINES.find((item) => item.id === selected) ?? null, [selected])

  const onSelect = (value: string) => {
    setSelected(value)
    setOpenId(null)
    const next = new URLSearchParams(params)
    if (value) next.set('linha', value)
    else next.delete('linha')
    setParams(next, { replace: true })
  }

  return (
    <div className="horarios-page">
      <section className="horarios-hero">
        <div className="container">
          <span className="eyebrow">Consulta</span>
          <h1>Horários das linhas</h1>
          <p>
            Selecione a linha para ver partidas, dias de operação e tarifa. Os horários são
            referência — confirme alterações nas agências ou nas próximas partidas ao vivo.
          </p>

          <label className="line-picker">
            <span>Linha</span>
            <select value={selected} onChange={(e) => onSelect(e.target.value)}>
              <option value="">Selecione a linha</option>
              {LINES.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="section results-section">
        <div className="container">
          {!line && (
            <div className="empty-state">
              <h2>Escolha uma linha acima</h2>
              <p>Assim que você selecionar, os horários aparecem aqui — filtrados corretamente.</p>
              <div className="quick-picks">
                {LINES.slice(0, 4).map((item) => (
                  <button key={item.id} type="button" onClick={() => onSelect(item.id)}>
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {line && (
            <>
              <Reveal className="results-head">
                <p className="eyebrow">{line.region}</p>
                <h2>{line.name}</h2>
                <p>{line.schedules.length} tabela{line.schedules.length > 1 ? 's' : ''} de horário</p>
              </Reveal>

              <div className="schedule-list">
                {line.schedules.map((entry) => {
                  const isOpen = openId === entry.id
                  return (
                    <article key={entry.id} className="schedule-item">
                      <div className="schedule-top">
                        <div>
                          <p className="fare">{entry.fare}</p>
                          <h3>{entry.name}</h3>
                          <p className="days">{entry.days}</p>
                        </div>
                      </div>

                      <div className="periods">
                        {periods.map((period) => {
                          const times = entry.times[period]
                          return (
                            <div key={period} className="period">
                              <span>{PERIOD_LABELS[period]}</span>
                              <strong>{times.length ? times.join(' · ') : 'Sem horário'}</strong>
                            </div>
                          )
                        })}
                      </div>

                      {entry.itinerary && (
                        <>
                          <button
                            type="button"
                            className="itinerary-toggle"
                            aria-expanded={isOpen}
                            onClick={() => setOpenId(isOpen ? null : entry.id)}
                          >
                            {isOpen ? 'Ocultar itinerário' : 'Ver itinerário'}
                          </button>
                          {isOpen && (
                            <ol className="itinerary">
                              {entry.itinerary.map((stop) => (
                                <li key={stop}>{stop}</li>
                              ))}
                            </ol>
                          )}
                        </>
                      )}
                    </article>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
