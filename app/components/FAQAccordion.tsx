'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿Cómo funciona la plataforma?',
    a: 'Seleccionás tu universidad y materia, elegís el curso que más se adapta a vos y accedés a contenido grabado, clases en vivo y soporte de IA 24/7. Todo en un solo lugar.',
  },
  {
    q: '¿Cómo me contacto con el/la profesor/a?',
    a: 'Podés contactarte directamente a través del espacio de consultas dentro del curso, o reservar una clase particular desde el menú principal con disponibilidad en tiempo real.',
  },
  {
    q: '¿Qué puede hacer la IA?',
    a: 'La IA puede responder tus consultas técnicas, explicar conceptos, resolver ejercicios paso a paso y orientarte en tu plan de estudio — las 24 horas del día, los 7 días de la semana.',
  },
  {
    q: '¿Cómo se programan las clases en vivo?',
    a: 'En la sección "Reservar Clase Particular" podés ver la disponibilidad de cada profesor y elegir el horario que mejor te convenga. Recibirás una confirmación por email.',
  },
  {
    q: '¿Cuál es la política de cancelación?',
    a: 'Podés cancelar hasta 24 horas antes de la clase programada sin cargo. Para cancelaciones tardías podría aplicarse una penalidad según el caso.',
  },
  {
    q: '¿Puedo acceder desde cualquier dispositivo?',
    a: 'Sí, la plataforma está optimizada para desktop, tablet y mobile. Tu progreso se sincroniza automáticamente en todos tus dispositivos.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{
            background: open === i ? 'rgba(0, 212, 255, 0.06)' : 'rgba(0, 212, 255, 0.02)',
            border: `1px solid ${open === i ? 'rgba(0, 212, 255, 0.4)' : 'rgba(0, 212, 255, 0.1)'}`,
            borderRadius: '10px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: open === i ? '#00d4ff' : '#c9d1d9',
              gap: '16px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '0.9rem',
                fontWeight: 500,
              }}
            >
              <span style={{ color: '#00d4ff', marginRight: '10px' }}>//</span>
              {faq.q}
            </span>
            <span
              style={{
                color: '#00d4ff',
                fontSize: '1.4rem',
                lineHeight: 1,
                transition: 'transform 0.3s ease',
                transform: open === i ? 'rotate(45deg)' : 'none',
                flexShrink: 0,
              }}
            >
              +
            </span>
          </button>

          <div
            style={{
              maxHeight: open === i ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease',
            }}
          >
            <div
              style={{
                padding: '0 24px 20px',
                color: '#8b97a8',
                fontSize: '0.9rem',
                lineHeight: '1.7',
                borderTop: '1px solid rgba(0, 212, 255, 0.08)',
                paddingTop: '16px',
              }}
            >
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
