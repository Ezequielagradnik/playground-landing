import { supabase } from '@/lib/supabase'
import TypewriterText from './components/TypewriterText'
import FAQAccordion from './components/FAQAccordion'

export default async function Home() {
  const { data } = await supabase.from('messages').select('content').single()

  return (
    <main style={{ background: '#00000a', color: '#c9d1d9', overflowX: 'hidden' }}>
      {/* Background effects */}
      <div className="grid-bg" />
      <div className="scanline" />
      <div className="noise-overlay" />

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 40px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(0, 0, 10, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 212, 255, 0.12)',
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '1.4rem',
            fontWeight: 800,
            letterSpacing: '0.1em',
          }}
        >
          <span className="glow-cyan">PADI</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem', marginLeft: '8px', letterSpacing: '0.2em' }}>
            v2.0
          </span>
        </div>

        {/* Nav links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
          }}
          className="hidden-mobile"
        >
          {['Mis Cursos', 'Clases Particulares', 'Universidades', 'Soy Profesor/a'].map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="btn-primary"
          style={{ padding: '8px 20px', fontSize: '0.78rem' }}
        >
          Ingresar
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '120px 24px 80px',
        }}
      >
        {/* System status badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 255, 136, 0.08)',
            border: '1px solid rgba(0, 255, 136, 0.3)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '40px',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '0.75rem',
            color: '#00ff88',
            letterSpacing: '0.1em',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#00ff88',
              boxShadow: '0 0 8px #00ff88',
              animation: 'blink 2s ease-in-out infinite',
              flexShrink: 0,
            }}
          />
          SISTEMA ACTIVO — {data?.content ?? 'CONECTADO'}
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '24px',
            fontFamily: 'var(--font-geist-mono)',
            letterSpacing: '-0.02em',
            maxWidth: '900px',
          }}
        >
          <TypewriterText />
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(201, 209, 217, 0.65)',
            maxWidth: '600px',
            lineHeight: 1.7,
            marginBottom: '48px',
          }}
        >
          La plataforma educativa con IA + profesores reales para que apruebes tu materia.
          Contenido universitario, clases en vivo, soporte 24/7.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '80px' }}>
          <a href="#" className="btn-primary">
            Soy Alumno/a
          </a>
          <a href="#" className="btn-secondary">
            Soy Profesor/a
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '60px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '32px 48px',
            background: 'rgba(0, 212, 255, 0.04)',
            border: '1px solid rgba(0, 212, 255, 0.12)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
          }}
        >
          {[
            { value: '+2500', label: 'Alumnos activos' },
            { value: '+50', label: 'Profesores verificados' },
            { value: '95%', label: 'Tasa de aprobación' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                className="glow-cyan animate-flicker"
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'rgba(201, 209, 217, 0.5)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-geist-mono)',
                  marginTop: '4px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          padding: 'clamp(60px, 10vw, 120px) 24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>
            // Protocolo
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              fontFamily: 'var(--font-geist-mono)',
            }}
          >
            Cómo{' '}
            <span className="gradient-text-cyan-purple">funciona</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
          }}
        >
          {[
            {
              step: '01',
              icon: '🎓',
              title: 'Elegí tu materia',
              desc: 'Seleccioná tu universidad y la materia que necesitás aprobar.',
            },
            {
              step: '02',
              icon: '📦',
              title: 'Elegí tu curso',
              desc: 'Accedé a contenido grabado, resúmenes y guías de ejercicios.',
            },
            {
              step: '03',
              icon: '⚡',
              title: 'Aprendé y practicá',
              desc: 'Clases en vivo, IA 24/7 y espacio de consultas con tu profesor.',
            },
            {
              step: '04',
              icon: '🏆',
              title: 'Aprobá',
              desc: 'Comunidad de co-estudio y soporte continuo hasta el examen.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="neon-card"
              style={{ padding: '32px 28px', position: 'relative' }}
            >
              {/* Step number */}
              <div
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: '0.7rem',
                  color: '#00d4ff',
                  letterSpacing: '0.2em',
                  marginBottom: '20px',
                  opacity: 0.7,
                }}
              >
                STEP_{item.step}
              </div>

              {/* Icon */}
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{item.icon}</div>

              <h3
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#e2e8f0',
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(201, 209, 217, 0.6)', lineHeight: 1.6 }}>
                {item.desc}
              </p>

              {/* Corner accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '20px',
                  height: '20px',
                  borderTop: '2px solid rgba(0, 212, 255, 0.4)',
                  borderRight: '2px solid rgba(0, 212, 255, 0.4)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  width: '20px',
                  height: '20px',
                  borderBottom: '2px solid rgba(0, 212, 255, 0.2)',
                  borderLeft: '2px solid rgba(0, 212, 255, 0.2)',
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          padding: 'clamp(60px, 10vw, 120px) 24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>
            // Features
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              fontFamily: 'var(--font-geist-mono)',
            }}
          >
            Todo lo que{' '}
            <span className="gradient-text-cyan-purple">necesitás</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto',
            gap: '20px',
          }}
        >
          {/* IA 24/7 — large */}
          <div
            className="neon-card"
            style={{
              gridColumn: 'span 7',
              padding: '40px',
              minHeight: '260px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🤖</div>
              <h3
                className="glow-cyan"
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                IA Tutora 24/7
              </h3>
              <p style={{ color: 'rgba(201, 209, 217, 0.65)', lineHeight: 1.7, maxWidth: '400px' }}>
                Preguntá cualquier cosa a cualquier hora. La IA explica conceptos, resuelve ejercicios
                paso a paso y te ayuda a prepararte para el final.
              </p>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '0.78rem',
                color: 'rgba(0, 212, 255, 0.5)',
                marginTop: '20px',
              }}
            >
              {'> response_time: <2s — uptime: 99.9%'}
            </div>
          </div>

          {/* Clases en vivo */}
          <div
            className="neon-card-purple"
            style={{
              gridColumn: 'span 5',
              padding: '36px',
              minHeight: '260px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🎥</div>
              <h3
                className="glow-purple"
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                }}
              >
                Clases en Vivo
              </h3>
              <p style={{ color: 'rgba(201, 209, 217, 0.65)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                Clases grupales e individuales con profesores verificados. Grabaciones disponibles post-clase.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '8px',
                marginTop: '20px',
                flexWrap: 'wrap',
              }}
            >
              {['HD Video', 'Grabada', 'Chat en vivo'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '100px',
                    padding: '3px 10px',
                    fontSize: '0.72rem',
                    color: '#8b5cf6',
                    fontFamily: 'var(--font-geist-mono)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Progreso */}
          <div
            className="neon-card"
            style={{
              gridColumn: 'span 4',
              padding: '32px',
              minHeight: '200px',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '14px' }}>📊</div>
            <h3
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#00ff88',
                textShadow: '0 0 15px rgba(0, 255, 136, 0.4)',
                marginBottom: '8px',
              }}
            >
              Tracking de Progreso
            </h3>
            <p style={{ color: 'rgba(201, 209, 217, 0.6)', lineHeight: 1.6, fontSize: '0.875rem' }}>
              Visualizá tu avance en tiempo real. Estadísticas de estudio y predicción de rendimiento.
            </p>
          </div>

          {/* Comunidad */}
          <div
            className="neon-card"
            style={{
              gridColumn: 'span 4',
              padding: '32px',
              minHeight: '200px',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '14px' }}>🌐</div>
            <h3
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#e2e8f0',
                marginBottom: '8px',
              }}
            >
              Comunidad 24/7
            </h3>
            <p style={{ color: 'rgba(201, 209, 217, 0.6)', lineHeight: 1.6, fontSize: '0.875rem' }}>
              Grupos de co-estudio, foros por materia y red de alumnos de tu universidad.
            </p>
          </div>

          {/* Universidades */}
          <div
            className="neon-card"
            style={{
              gridColumn: 'span 4',
              padding: '32px',
              minHeight: '200px',
              background: 'rgba(0, 255, 136, 0.03)',
              borderColor: 'rgba(0, 255, 136, 0.15)',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '14px' }}>🏛️</div>
            <h3
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#00ff88',
                textShadow: '0 0 10px rgba(0, 255, 136, 0.3)',
                marginBottom: '8px',
              }}
            >
              Todas las Universidades
            </h3>
            <p style={{ color: 'rgba(201, 209, 217, 0.6)', lineHeight: 1.6, fontSize: '0.875rem' }}>
              UBA, UTN, UNC, UNLP y más. Contenido específico para cada carrera y plan de estudios.
            </p>
          </div>
        </div>
      </section>

      {/* ── CLASES PARTICULARES ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          padding: 'clamp(60px, 10vw, 120px) 24px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Text side */}
          <div>
            <p className="section-label" style={{ marginBottom: '16px' }}>
              // Clase Particular
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                fontFamily: 'var(--font-geist-mono)',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}
            >
              Mejorá tu{' '}
              <span className="glow-cyan">rendimiento</span>
            </h2>
            <p
              style={{
                color: 'rgba(201, 209, 217, 0.65)',
                lineHeight: 1.8,
                marginBottom: '32px',
                fontSize: '1rem',
              }}
            >
              Reservá una sesión 1 a 1 con profesores verificados. Horarios flexibles,
              adaptados a tu cronograma y contenido personalizado según tus debilidades.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {[
                '✓  Profesores verificados por PADI',
                '✓  Horarios flexibles 7 días a la semana',
                '✓  Sesiones desde 1 hora',
                '✓  Garantía de satisfacción',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: 'var(--font-geist-mono)',
                    fontSize: '0.875rem',
                    color: 'rgba(201, 209, 217, 0.8)',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <a href="#" className="btn-primary">
              Reservar Clase
            </a>
          </div>

          {/* Visual side */}
          <div className="animate-float">
            <div
              className="neon-card"
              style={{
                padding: '36px',
                borderColor: 'rgba(0, 212, 255, 0.25)',
              }}
            >
              {[
                { name: 'Dr. Martínez', subject: 'Análisis Matemático', rating: '4.9', avail: 'Disponible hoy' },
                { name: 'Lic. García', subject: 'Física II', rating: '4.8', avail: 'Mañana' },
                { name: 'Ing. López', subject: 'Algoritmos', rating: '5.0', avail: 'Disponible hoy' },
              ].map((prof, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 0',
                    borderBottom: i < 2 ? '1px solid rgba(0, 212, 255, 0.08)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: `hsl(${i * 120}, 70%, 50%, 0.2)`,
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-geist-mono)',
                        fontSize: '0.9rem',
                        color: '#00d4ff',
                      }}
                    >
                      {prof.name.charAt(0)}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-geist-mono)',
                          fontSize: '0.85rem',
                          color: '#e2e8f0',
                          fontWeight: 600,
                        }}
                      >
                        {prof.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(201, 209, 217, 0.5)' }}>
                        {prof.subject}
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-geist-mono)',
                        fontSize: '0.85rem',
                        color: '#00d4ff',
                      }}
                    >
                      ⭐ {prof.rating}
                    </div>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: '#00ff88',
                        fontFamily: 'var(--font-geist-mono)',
                      }}
                    >
                      {prof.avail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          padding: 'clamp(60px, 10vw, 120px) 24px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>
            // Planes
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              fontFamily: 'var(--font-geist-mono)',
            }}
          >
            Elegí tu{' '}
            <span className="gradient-text-cyan-purple">acceso</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {/* Base Plan */}
          <div className="neon-card" style={{ padding: '40px' }}>
            <div
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'rgba(201, 209, 217, 0.5)',
                marginBottom: '20px',
              }}
            >
              PLAN_BASE
            </div>
            <div
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#e2e8f0',
                marginBottom: '4px',
              }}
            >
              $XX
              <span style={{ fontSize: '1rem', fontWeight: 400, color: 'rgba(201, 209, 217, 0.5)' }}>
                /mes
              </span>
            </div>
            <p style={{ color: 'rgba(201, 209, 217, 0.5)', fontSize: '0.875rem', marginBottom: '32px' }}>
              Acceso completo al contenido del curso
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {[
                'Contenido completo del curso',
                'IA disponible 24/7',
                'Espacio de consultas',
                'Grupos de co-estudio',
                'Acceso mobile y desktop',
              ].map((feat) => (
                <div
                  key={feat}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.875rem',
                    color: 'rgba(201, 209, 217, 0.75)',
                  }}
                >
                  <span style={{ color: '#00d4ff', fontFamily: 'var(--font-geist-mono)' }}>{'>'}</span>
                  {feat}
                </div>
              ))}
            </div>

            <a href="#" className="btn-secondary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
              Comenzar
            </a>
          </div>

          {/* Premium Plan */}
          <div
            className="pricing-featured"
            style={{
              borderRadius: '12px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Popular badge */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(139, 92, 246, 0.2)',
                border: '1px solid rgba(139, 92, 246, 0.5)',
                borderRadius: '100px',
                padding: '4px 12px',
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '0.7rem',
                color: '#8b5cf6',
                letterSpacing: '0.1em',
              }}
            >
              POPULAR
            </div>

            <div
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: '#8b5cf6',
                marginBottom: '20px',
              }}
            >
              PLAN_PREMIUM
            </div>
            <div
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#e2e8f0',
                marginBottom: '4px',
              }}
            >
              $XX
              <span style={{ fontSize: '1rem', fontWeight: 400, color: 'rgba(201, 209, 217, 0.5)' }}>
                /mes
              </span>
            </div>
            <p style={{ color: 'rgba(201, 209, 217, 0.5)', fontSize: '0.875rem', marginBottom: '32px' }}>
              Todo lo del plan base, más acceso prioritario
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {[
                'Todo lo del plan Base',
                '2 clases en vivo por mes',
                'Consulta directa con profesor',
                'Prioridad en respuestas IA',
                'Acceso anticipado a nuevo contenido',
                'Badge de alumno Premium',
              ].map((feat) => (
                <div
                  key={feat}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.875rem',
                    color: 'rgba(201, 209, 217, 0.85)',
                  }}
                >
                  <span style={{ color: '#8b5cf6', fontFamily: 'var(--font-geist-mono)' }}>{'>'}</span>
                  {feat}
                </div>
              ))}
            </div>

            <a href="#" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}>
              Activar Premium
            </a>
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          margin: '0 24px 80px',
          maxWidth: '1052px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '80px',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 51, 102, 0.1), rgba(255, 51, 102, 0.05))',
            border: '1px solid rgba(255, 51, 102, 0.4)',
            borderRadius: '12px',
            padding: '28px 36px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
            <div
              style={{
                fontSize: '2rem',
                animation: 'float 2s ease-in-out infinite',
              }}
            >
              🇦🇷
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontWeight: 700,
                  color: '#ff3366',
                  fontSize: '1rem',
                  marginBottom: '4px',
                  textShadow: '0 0 15px rgba(255, 51, 102, 0.5)',
                }}
              >
                OFERTA ESPECIAL — VIGENTE HASTA 24/03/2026
              </div>
              <div style={{ color: 'rgba(201, 209, 217, 0.8)', fontSize: '0.9rem' }}>
                Si Argentina sale campeón del mundo, te devolvemos el 100% de lo que pagaste.
              </div>
            </div>
          </div>
          <a
            href="#"
            className="promo-btn"
            style={{
              background: 'linear-gradient(135deg, #ff3366, #cc0033)',
              color: 'white',
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '0.8rem',
              fontWeight: 700,
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
              textTransform: 'uppercase' as const,
              boxShadow: '0 0 20px rgba(255, 51, 102, 0.3)',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}
          >
            Quiero la promo
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          padding: 'clamp(60px, 10vw, 120px) 24px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>
            // FAQ
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              fontFamily: 'var(--font-geist-mono)',
            }}
          >
            Preguntas{' '}
            <span className="gradient-text-cyan-purple">frecuentes</span>
          </h2>
        </div>
        <FAQAccordion />
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          position: 'relative',
          zIndex: 2,
          borderTop: '1px solid rgba(0, 212, 255, 0.1)',
          padding: '60px 40px 40px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '1.6rem',
                fontWeight: 800,
                marginBottom: '12px',
              }}
            >
              <span className="glow-cyan">PADI</span>
            </div>
            <p style={{ color: 'rgba(201, 209, 217, 0.5)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Plataforma educativa universitaria con IA + profesores reales.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: 'Plataforma',
              links: ['Mis Cursos', 'Clases Particulares', 'IA Tutora', 'Comunidad'],
            },
            {
              title: 'Empresa',
              links: ['Soy Profesor/a', 'Universidades', 'Blog', 'Contacto'],
            },
            {
              title: 'Legal',
              links: ['Términos de uso', 'Privacidad', 'Refunds', 'Cookies'],
            },
          ].map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  color: '#00d4ff',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}
              >
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((link) => (
                  <a key={link} href="#" className="footer-link">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(0, 212, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '0.75rem',
              color: 'rgba(201, 209, 217, 0.3)',
            }}
          >
            © 2026 PADI. Todos los derechos reservados.
          </div>
          <div
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '0.72rem',
              color: 'rgba(0, 212, 255, 0.4)',
            }}
          >
            BUILD_v2.0.1 — SYSTEM_OK
          </div>
        </div>
      </footer>
    </main>
  )
}
