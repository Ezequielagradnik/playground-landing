'use client'

import { useState } from 'react'

const COMPANIES = ['Generation Forest Invest', 'GBM', 'Fundación Patagonia Natural', 'GENNEIA', 'POMERA MADERAS', 'Forestal Argentina', 'AON']
const INVESTORS = ['techstars_', 'Draper Cygnus', 'Mercy Corps', 'AWS', 'BID', 'START GLOBAL', 'U. San Andrés', 'ITBA', 'antom', 'air capital']
const MEDIA = ['Forbes', 'Argentina Forestal', 'EL PAÍS', 'EL OBSERVADOR', 'CNN', 'TN', 'LA NACIÓN', 'Expoagro']

const TABS = {
  prevención: {
    title: 'Prevención continua',
    color: '#00ff88',
    rgb: '0,255,136',
    features: [
      { label: 'Consultoría gratuita', desc: 'Te ayudamos a elegir la mejor estrategia de protección de incendios para tu zona.' },
      { label: 'Reportes de riesgo', desc: 'Analizamos tu zona, identificamos el área quemada en los últimos 10 años y cuántas hectáreas se podrían haber salvado.' },
      { label: 'Rayos', desc: 'Los rayos son la principal causa natural de los incendios forestales. Brindamos detecciones cada 20 segundos.' },
    ],
  },
  detección: {
    title: 'Detección en tiempo real',
    color: '#ff4500',
    rgb: '255,69,0',
    features: [
      { label: 'Satélites cada 10 min', desc: 'Datos satelitales actualizados cada 10 minutos para detectar focos de calor antes que cualquier sistema público.' },
      { label: 'Cámaras en torres', desc: 'Detección ultra temprana con cámaras ópticas y térmicas que detectan columnas de humo en los primeros 5 minutos.' },
      { label: 'Alertas inmediatas', desc: 'Notificaciones push, SMS y llamadas automáticas al detectar un foco en tu zona monitoreada.' },
    ],
  },
  monitoreo: {
    title: 'Monitoreo activo',
    color: '#00d4ff',
    rgb: '0,212,255',
    features: [
      { label: 'Dashboard en vivo', desc: 'Visualizá el estado de todos tus predios en tiempo real con mapas interactivos y datos históricos.' },
      { label: 'Historial completo', desc: 'Accedé al historial de eventos, análisis de propagación y reportes post-incendio.' },
      { label: 'API e integraciones', desc: 'Integrá los datos a tus sistemas con nuestra API REST y webhooks en tiempo real.' },
    ],
  },
} as const

type TabKey = keyof typeof TABS

const FireLogo = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="15" stroke="rgba(0,255,136,0.25)" strokeWidth="1" />
    <path
      d="M16 5 C13 10 11 14 14 17 C11 19 13 27 16 27 C19 27 21 19 18 17 C21 14 19 10 16 5Z"
      fill="url(#fireGrad)"
    />
    <defs>
      <linearGradient id="fireGrad" x1="16" y1="5" x2="16" y2="27" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ff6b35" />
        <stop offset="1" stopColor="#00ff88" />
      </linearGradient>
    </defs>
  </svg>
)

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('prevención')
  const [lang, setLang] = useState<'ES' | 'EN'>('ES')
  const tab = TABS[activeTab]

  return (
    <main style={{ background: '#000a04', color: '#c9d1d9', overflowX: 'hidden' }}>
      <div className="grid-bg" />
      <div className="scanline" />
      <div className="noise-overlay" />

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 40px', height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(0, 10, 4, 0.88)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(0, 255, 136, 0.1)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FireLogo size={30} />
          <span style={{
            fontFamily: 'var(--font-geist-mono)', fontSize: '0.95rem',
            fontWeight: 800, letterSpacing: '0.12em', color: '#e2e8f0',
          }}>
            SATELLITES <span style={{ color: '#ff4500', textShadow: '0 0 12px rgba(255,69,0,0.5)' }}>ON FIRE</span>
          </span>
        </div>

        <div className="hidden-mobile" style={{
          display: 'flex', gap: '32px',
          fontFamily: 'var(--font-geist-mono)', fontSize: '0.78rem', letterSpacing: '0.08em',
        }}>
          {['Inicio', 'Impacto', 'Contáctanos'].map(item => (
            <a key={item} href="#" className="nav-link">{item}</a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setLang(l => l === 'ES' ? 'EN' : 'ES')}
            style={{
              background: 'transparent', border: '1px solid rgba(0,255,136,0.25)',
              borderRadius: '100px', padding: '4px 14px',
              fontFamily: 'var(--font-geist-mono)', fontSize: '0.72rem',
              color: '#00ff88', cursor: 'pointer', letterSpacing: '0.1em',
              transition: 'all 0.2s',
            }}
          >
            {lang === 'ES' ? 'ES | EN' : 'EN | ES'}
          </button>
          <a href="#" className="btn-ghost-dark" style={{ padding: '8px 18px', fontSize: '0.75rem' }}>
            Ir a la app
          </a>
          <a href="#" className="btn-fire" style={{ padding: '8px 18px', fontSize: '0.75rem' }}>
            Solicita una demo
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', zIndex: 2,
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '120px 60px 80px', overflow: 'hidden',
      }}>
        {/* Forest gradient bg */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 70% at 75% 55%, rgba(0,60,20,0.35) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(0,20,8,0.5) 0%, transparent 60%)',
        }} />

        {/* Satellite orbit SVG */}
        <div style={{
          position: 'absolute', right: '3%', top: '50%', transform: 'translateY(-50%)',
          width: '520px', height: '520px', opacity: 0.18, pointerEvents: 'none',
        }}>
          <svg viewBox="0 0 520 520" fill="none" style={{ width: '100%', height: '100%', animation: 'spin-slow 40s linear infinite' }}>
            <ellipse cx="260" cy="260" rx="250" ry="125" stroke="#00ff88" strokeWidth="1" strokeDasharray="5 10" />
            <ellipse cx="260" cy="260" rx="190" ry="95" stroke="#00d4ff" strokeWidth="1" strokeDasharray="5 10" />
            <circle cx="260" cy="260" r="55" stroke="#ff4500" strokeWidth="1" strokeDasharray="3 8" />
          </svg>
          {/* orbiting dot */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            width: '10px', height: '10px', borderRadius: '50%',
            background: '#00d4ff', boxShadow: '0 0 15px #00d4ff',
            marginLeft: '-5px', marginTop: '-5px',
            animation: 'orbit 8s linear infinite',
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 3, maxWidth: '680px' }}>
          {/* Status badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,69,0,0.07)', border: '1px solid rgba(255,69,0,0.28)',
            borderRadius: '100px', padding: '6px 16px', marginBottom: '36px',
            fontFamily: 'var(--font-geist-mono)', fontSize: '0.7rem',
            color: '#ff6b35', letterSpacing: '0.12em',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#ff4500', boxShadow: '0 0 8px #ff4500',
              animation: 'blink 2s ease-in-out infinite', flexShrink: 0,
            }} />
            SISTEMA ACTIVO — MONITOREO EN TIEMPO REAL
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 800,
            lineHeight: 1.05, marginBottom: '24px',
            fontFamily: 'var(--font-geist-mono)', letterSpacing: '-0.02em',
          }}>
            La forma de<br />
            <span className="glow-fire">protegerte</span><br />
            de incendios
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            color: 'rgba(201,209,217,0.65)', lineHeight: 1.8,
            marginBottom: '48px', maxWidth: '520px',
          }}>
            La clave para que un pequeño fuego no se convierta en una catástrofe,
            es detectarlo a tiempo y atacarlo inteligentemente.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="#" className="btn-fire">Solicita una demo</a>
            <a href="#" className="btn-ghost-dark">Ir a la app</a>
          </div>
        </div>
      </section>

      {/* ── CLIENTS TICKER ── */}
      <div style={{
        position: 'relative', zIndex: 2, padding: '44px 0',
        background: 'rgba(0,255,136,0.02)',
        borderTop: '1px solid rgba(0,255,136,0.08)',
        borderBottom: '1px solid rgba(0,255,136,0.08)',
        overflow: 'hidden',
      }}>
        <p style={{
          textAlign: 'center', fontFamily: 'var(--font-geist-mono)',
          fontSize: '0.68rem', letterSpacing: '0.25em',
          color: 'rgba(201,209,217,0.35)', textTransform: 'uppercase', marginBottom: '24px',
        }}>
          // Elegidos por grandes compañías
        </p>
        <div className="ticker-wrapper">
          <div className="ticker">
            {[...COMPANIES, ...COMPANIES].map((c, i) => (
              <span key={i} style={{
                fontFamily: 'var(--font-geist-mono)', fontSize: '0.95rem', fontWeight: 700,
                letterSpacing: '0.12em', color: 'rgba(201,209,217,0.3)',
                padding: '0 52px', whiteSpace: 'nowrap',
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SOLUTION + STATS ── */}
      <section style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(80px,10vw,120px) 40px',
        maxWidth: '1200px', margin: '0 auto',
      }}>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'stretch' }}>
          {/* Solution card */}
          <div className="neon-card-fire" style={{ flex: '1 1 380px', padding: '48px', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: '20px', right: '20px',
              width: '80px', height: '80px', opacity: 0.12,
              animation: 'spin-slow 25s linear infinite',
            }}>
              <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
                <circle cx="40" cy="40" r="38" stroke="#ff4500" strokeWidth="1" />
                <text style={{ fontSize: '7px', letterSpacing: '5px' }}>
                  <textPath href="#orbit-path">SATELLITES ON FIRE •&nbsp;&nbsp;</textPath>
                </text>
                <defs>
                  <path id="orbit-path" d="M 40,2 A 38,38 0 1,1 39.99,2" />
                </defs>
              </svg>
            </div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(0,255,136,0.07)', border: '1px solid rgba(0,255,136,0.2)',
              borderRadius: '100px', padding: '4px 14px',
              fontFamily: 'var(--font-geist-mono)', fontSize: '0.68rem',
              color: '#00ff88', letterSpacing: '0.12em', marginBottom: '28px',
            }}>
              // Nuestra solución
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 800, lineHeight: 1.1,
              marginBottom: '20px', fontFamily: 'var(--font-geist-mono)', letterSpacing: '-0.02em',
            }}>
              Alertamos más<br />
              <span className="glow-fire">rápido que NASA.</span>
            </h2>
            <p style={{ color: 'rgba(201,209,217,0.65)', lineHeight: 1.75, marginBottom: '36px', fontSize: '0.92rem' }}>
              Satellites on Fire integra satélites, cámaras en torres y una IA propia para{' '}
              <span style={{ color: '#00d4ff' }}>detectar, alertar y monitorear incendios en tiempo real</span>,
              con datos cada 10 minutos. Tecnología desarrollada por expertos de NASA y la ESA.
            </p>
            <a href="#" className="btn-fire-outline">Solicita una demo</a>
          </div>

          {/* Stats column */}
          <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { value: '35K', label: 'Usuarios', color: '#00ff88', rgb: '0,255,136' },
              { value: '15', label: 'Países', color: '#00d4ff', rgb: '0,212,255' },
              { value: '95', label: 'Incendios asistidos / mes', color: '#ff4500', rgb: '255,69,0' },
            ].map(stat => (
              <div key={stat.label} style={{
                flex: 1,
                background: `rgba(${stat.rgb},0.04)`,
                border: `1px solid rgba(${stat.rgb},0.18)`,
                borderRadius: '16px', padding: '32px',
                display: 'flex', flexDirection: 'column', gap: '10px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-geist-mono)', fontSize: 'clamp(2.5rem,5vw,3.8rem)',
                  fontWeight: 800, color: stat.color,
                  textShadow: `0 0 40px ${stat.color}60`, lineHeight: 1,
                  animation: 'flicker 8s ease-in-out infinite',
                }}>{stat.value}</div>
                <div style={{ width: '48px', height: '3px', background: `linear-gradient(90deg, ${stat.color}, transparent)`, borderRadius: '2px' }} />
                <div style={{
                  fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.1em',
                  color: 'rgba(201,209,217,0.55)', fontSize: '0.8rem', textTransform: 'uppercase',
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SECTION ── */}
      <section style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(80px,10vw,120px) 40px',
        maxWidth: '1200px', margin: '0 auto',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '48px', alignItems: 'center' }}>
          {/* Left */}
          <div>
            {/* Satellite image mockup */}
            <div style={{
              width: '100%', maxWidth: '400px', aspectRatio: '1',
              background: 'radial-gradient(ellipse at 35% 40%, rgba(0,100,40,0.7) 0%, rgba(0,30,10,0.9) 60%, #000a04 100%)',
              border: '1px solid rgba(0,255,136,0.12)', borderRadius: '12px',
              marginBottom: '36px', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(0,255,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.04) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }} />
              {/* Fire dot */}
              <div style={{
                position: 'absolute', top: '42%', left: '44%',
                width: '10px', height: '10px', borderRadius: '50%',
                background: '#ff4500', boxShadow: '0 0 20px #ff4500, 0 0 40px rgba(255,69,0,0.4)',
                animation: 'blink 1.5s ease-in-out infinite',
              }} />
              {/* Scan ring */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '55%', paddingBottom: '55%',
                border: '1px solid rgba(0,212,255,0.15)', borderRadius: '50%',
              }} />
              <div style={{
                position: 'absolute', top: '10px', left: '12px',
                fontFamily: 'var(--font-geist-mono)', fontSize: '0.6rem',
                color: 'rgba(0,212,255,0.45)', letterSpacing: '0.1em',
              }}>SAT_IMG_4K</div>
              <div style={{
                position: 'absolute', bottom: '10px', right: '12px',
                fontFamily: 'var(--font-geist-mono)', fontSize: '0.6rem',
                color: 'rgba(255,69,0,0.55)', letterSpacing: '0.1em',
              }}>HEAT_DETECTED</div>
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.22)',
              borderRadius: '100px', padding: '4px 14px',
              fontFamily: 'var(--font-geist-mono)', fontSize: '0.68rem',
              color: '#8b5cf6', letterSpacing: '0.1em', marginBottom: '18px',
            }}>
              ✦ Inteligencia Artificial
            </div>

            <h2 style={{
              fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800,
              lineHeight: 1.15, fontFamily: 'var(--font-geist-mono)', letterSpacing: '-0.01em',
            }}>
              Lo que nos diferencia es nuestra{' '}
              <span className="glow-purple">Inteligencia Artificial</span>
            </h2>
            <p style={{
              color: 'rgba(201,209,217,0.6)', lineHeight: 1.75, marginTop: '16px', fontSize: '0.92rem',
            }}>
              Estamos constantemente innovando y lanzando nuevos productos, entre los cuales
              se encuentra{' '}
              <span style={{ color: '#8b5cf6' }}>la predicción de la propagación de los incendios.</span>
            </p>
          </div>

          {/* Right: feature cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '🗄️', title: 'Bases de datos', desc: 'Contamos con la base de datos de incendios validada más grande de Latinoamérica, con más de 90,000 eventos de 15 países.', color: '#8b5cf6', rgb: '139,92,246' },
              { icon: '🛰️', title: 'Satelital', desc: 'Nuestros algoritmos combinan datos históricos, meteorológicos y reportes de usuarios detectando incendios 20 minutos antes que cualquier sistema satelital público.', color: '#00d4ff', rgb: '0,212,255' },
              { icon: '📷', title: 'Cámaras', desc: 'Con nuestro modelo para la detección ultra temprana con cámaras ópticas y térmicas en torres, detectamos columnas de humo en los primeros 5 minutos.', color: '#00ff88', rgb: '0,255,136' },
            ].map((f, i) => (
              <div key={i} style={{
                background: `rgba(${f.rgb},0.04)`,
                border: `1px solid rgba(${f.rgb},0.14)`,
                borderRadius: '12px', padding: '22px',
                display: 'flex', gap: '16px', alignItems: 'flex-start',
                transition: 'border-color 0.25s, transform 0.25s',
              }}>
                <div style={{
                  width: '44px', height: '44px', flexShrink: 0,
                  background: `rgba(${f.rgb},0.1)`,
                  border: `1px solid rgba(${f.rgb},0.25)`,
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem',
                }}>{f.icon}</div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-geist-mono)', fontWeight: 700,
                    color: f.color, fontSize: '0.88rem', marginBottom: '6px',
                    textShadow: `0 0 12px ${f.color}40`,
                  }}>{f.title}</div>
                  <p style={{ color: 'rgba(201,209,217,0.55)', fontSize: '0.83rem', lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT TABS ── */}
      <section style={{
        position: 'relative', zIndex: 2,
        background: 'rgba(0,255,136,0.015)',
        borderTop: '1px solid rgba(0,255,136,0.07)',
        borderBottom: '1px solid rgba(0,255,136,0.07)',
        padding: 'clamp(80px,10vw,120px) 40px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(0,255,136,0.07)', border: '1px solid rgba(0,255,136,0.18)',
              borderRadius: '100px', padding: '4px 14px',
              fontFamily: 'var(--font-geist-mono)', fontSize: '0.68rem',
              color: '#00ff88', letterSpacing: '0.12em', marginBottom: '20px',
            }}>
              ✳ Nuestra propuesta
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 800,
              lineHeight: 1.15, fontFamily: 'var(--font-geist-mono)', maxWidth: '700px',
            }}>
              Detección y Monitoreo en Tiempo Real con{' '}
              <span className="gradient-text-cyan-purple">IA y Satélites</span>
            </h2>
          </div>

          {/* Tab buttons */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
            {(Object.keys(TABS) as TabKey[]).map(key => (
              <button key={key} onClick={() => setActiveTab(key)} style={{
                fontFamily: 'var(--font-geist-mono)', fontSize: '0.85rem', fontWeight: 600,
                letterSpacing: '0.05em', padding: '10px 26px', borderRadius: '8px',
                cursor: 'pointer', transition: 'all 0.25s', textTransform: 'capitalize',
                background: activeTab === key ? TABS[key].color : 'transparent',
                color: activeTab === key ? '#000' : 'rgba(201,209,217,0.55)',
                border: activeTab === key ? 'none' : '1px solid rgba(255,255,255,0.12)',
                boxShadow: activeTab === key ? `0 0 24px ${TABS[key].color}50` : 'none',
              }}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '24px' }}>
            <div style={{
              background: `rgba(${tab.rgb},0.04)`,
              border: `1px solid rgba(${tab.rgb},0.16)`,
              borderRadius: '16px', padding: '40px',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-geist-mono)', fontWeight: 800, fontSize: '1.3rem',
                marginBottom: '32px', color: tab.color,
                textShadow: `0 0 20px ${tab.color}50`,
              }}>{tab.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {tab.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: tab.color, boxShadow: `0 0 8px ${tab.color}`,
                      flexShrink: 0, marginTop: '6px',
                    }} />
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-geist-mono)', fontWeight: 700,
                        fontSize: '0.88rem', color: '#e2e8f0', marginBottom: '4px',
                      }}>{f.label}</div>
                      <p style={{ color: 'rgba(201,209,217,0.55)', fontSize: '0.83rem', lineHeight: 1.65 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map panel */}
            <div style={{
              background: '#000a04', border: '1px solid rgba(0,212,255,0.1)',
              borderRadius: '16px', padding: '28px', minHeight: '300px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />
              <div style={{
                position: 'relative', zIndex: 1,
                fontFamily: 'var(--font-geist-mono)', fontSize: '0.62rem',
                color: 'rgba(0,212,255,0.4)', letterSpacing: '0.12em',
              }}>MAP_VIEW — ZONA_MONITOREADA</div>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  background: 'rgba(255,69,0,0.07)', border: '1px solid rgba(255,69,0,0.28)',
                  borderRadius: '8px', padding: '14px',
                  fontFamily: 'var(--font-geist-mono)', fontSize: '0.75rem',
                }}>
                  <div style={{ color: '#ff4500', marginBottom: '4px' }}>⚠ ALERTA ACTIVA</div>
                  <div style={{ color: 'rgba(201,209,217,0.5)' }}>Foco detectado — 34.2°S 68.8°W</div>
                  <div style={{ color: 'rgba(201,209,217,0.35)', fontSize: '0.65rem', marginTop: '4px' }}>hace 3 min · via SENTINEL-2</div>
                </div>
                <div style={{
                  background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.18)',
                  borderRadius: '8px', padding: '10px',
                  fontFamily: 'var(--font-geist-mono)', fontSize: '0.72rem', color: '#00ff88',
                }}>✓ Sistema operando con normalidad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(80px,10vw,120px) 40px',
        maxWidth: '1200px', margin: '0 auto',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '24px' }}>
          <div className="neon-card-satellite" style={{ padding: '48px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(0,255,136,0.07)', border: '1px solid rgba(0,255,136,0.18)',
              borderRadius: '100px', padding: '4px 14px',
              fontFamily: 'var(--font-geist-mono)', fontSize: '0.68rem',
              color: '#00ff88', letterSpacing: '0.12em', marginBottom: '28px',
            }}>✳ Testimonios</div>
            <div style={{ fontSize: '2.5rem', color: 'rgba(0,212,255,0.3)', lineHeight: 1, marginBottom: '20px' }}>&ldquo;&rdquo;</div>
            <blockquote style={{
              fontSize: '1rem', lineHeight: 1.85, color: 'rgba(201,209,217,0.82)',
              fontStyle: 'italic', marginBottom: '32px',
              borderLeft: '2px solid rgba(0,212,255,0.25)', paddingLeft: '20px',
            }}>
              Lo bueno que tiene su sistema es la alerta temprana, que cada 10 minutos estamos
              actualizando, entonces podemos saber con qué intensidad se desarrolla el incendio
              y con qué velocidad. Nos parece una herramienta súper útil. Con el FIRMS (de la
              NASA), el foco puede tardar varias horas o varios días en aparecer.
            </blockquote>
            <div>
              <div style={{ fontFamily: 'var(--font-geist-mono)', fontWeight: 700, color: '#e2e8f0', fontSize: '0.88rem' }}>
                Julio Simón
              </div>
              <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '0.72rem', color: 'rgba(201,209,217,0.4)', marginTop: '4px', letterSpacing: '0.05em' }}>
                Monitorea predios forestales
              </div>
            </div>
          </div>

          <div style={{
            background: 'radial-gradient(ellipse at 50% 80%, rgba(255,69,0,0.22) 0%, rgba(200,40,0,0.08) 45%, #000a04 80%)',
            border: '1px solid rgba(255,69,0,0.18)', borderRadius: '16px', minHeight: '280px',
            display: 'flex', alignItems: 'flex-end', padding: '32px',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(rgba(255,69,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,69,0,0.025) 1px, transparent 1px)',
              backgroundSize: '25px 25px',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontFamily: 'var(--font-geist-mono)', fontSize: '0.65rem',
                color: 'rgba(255,107,53,0.55)', letterSpacing: '0.15em', marginBottom: '8px',
              }}>INCENDIO EN CURSO — T+00:03</div>
              <div style={{
                fontFamily: 'var(--font-geist-mono)', fontWeight: 800, fontSize: '1.1rem',
                color: '#ff4500', textShadow: '0 0 20px rgba(255,69,0,0.5)',
              }}>Alerta enviada en 4 minutos</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTORS ── */}
      <div style={{
        position: 'relative', zIndex: 2,
        background: 'rgba(0,255,136,0.015)',
        borderTop: '1px solid rgba(0,255,136,0.07)',
        borderBottom: '1px solid rgba(0,255,136,0.07)',
        padding: '56px 40px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{
            textAlign: 'center', fontFamily: 'var(--font-geist-mono)',
            fontSize: '0.68rem', letterSpacing: '0.25em',
            color: 'rgba(201,209,217,0.35)', textTransform: 'uppercase', marginBottom: '32px',
          }}>// Financiados y premiados</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {INVESTORS.map((inv, i) => (
              <div key={i} style={{
                background: 'rgba(0,212,255,0.025)', border: '1px solid rgba(0,212,255,0.1)',
                borderRadius: '8px', padding: '12px 22px',
                fontFamily: 'var(--font-geist-mono)', fontWeight: 700,
                fontSize: '0.82rem', letterSpacing: '0.06em',
                color: 'rgba(201,209,217,0.45)', transition: 'all 0.2s',
              }}>{inv}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TEAM ── */}
      <section style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(80px,10vw,120px) 40px',
        maxWidth: '1200px', margin: '0 auto',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '24px', alignItems: 'center' }}>
          <div style={{
            background: 'radial-gradient(ellipse at 40% 40%, rgba(0,100,40,0.35) 0%, rgba(0,30,10,0.75) 70%, #000a04 100%)',
            border: '1px solid rgba(0,255,136,0.1)', borderRadius: '16px', minHeight: '300px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(rgba(0,255,136,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.025) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }} />
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '32px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '14px' }}>👥</div>
              <div style={{
                fontFamily: 'var(--font-geist-mono)', fontSize: '0.68rem',
                color: 'rgba(0,255,136,0.45)', letterSpacing: '0.18em',
              }}>TEAM_SATELLITES_ON_FIRE</div>
            </div>
          </div>

          <div className="neon-card-forest" style={{ padding: '48px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(0,255,136,0.07)', border: '1px solid rgba(0,255,136,0.18)',
              borderRadius: '100px', padding: '4px 14px',
              fontFamily: 'var(--font-geist-mono)', fontSize: '0.68rem',
              color: '#00ff88', letterSpacing: '0.12em', marginBottom: '22px',
            }}>// Nuestro Equipo</div>
            <h2 style={{
              fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 800, lineHeight: 1.2,
              fontFamily: 'var(--font-geist-mono)', marginBottom: '20px',
            }}>
              Somos expertos y apasionados por la problemática.
            </h2>
            <p style={{ color: 'rgba(201,209,217,0.62)', lineHeight: 1.78, fontSize: '0.92rem', marginBottom: '32px' }}>
              En nuestro equipo contamos con olímpicos internacionales en informática, personas
              reconocidas entre los{' '}
              <span style={{ color: '#00ff88' }}>mejores 40 innovadores del mundo</span>,
              profesionales que trabajaron en proyectos con NASA, y expertos que lideraron
              equipos de incendios en Parques Nacionales.
            </p>
            <a href="#" className="btn-fire-outline">Contáctenos</a>
          </div>
        </div>
      </section>

      {/* ── MEDIA ── */}
      <div style={{
        position: 'relative', zIndex: 2,
        borderTop: '1px solid rgba(0,212,255,0.07)',
        borderBottom: '1px solid rgba(0,212,255,0.07)',
        padding: '44px 40px', overflow: 'hidden',
      }}>
        <p style={{
          textAlign: 'center', fontFamily: 'var(--font-geist-mono)',
          fontSize: '0.68rem', letterSpacing: '0.25em',
          color: 'rgba(201,209,217,0.35)', textTransform: 'uppercase', marginBottom: '24px',
        }}>// Mencionados en</p>
        <div className="ticker-wrapper">
          <div className="ticker ticker-reverse">
            {[...MEDIA, ...MEDIA].map((m, i) => (
              <span key={i} style={{
                fontFamily: 'var(--font-geist-mono)', fontSize: '0.9rem', fontWeight: 700,
                letterSpacing: '0.18em', color: 'rgba(201,209,217,0.28)',
                padding: '0 44px', whiteSpace: 'nowrap', textTransform: 'uppercase',
              }}>{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(100px,14vw,160px) 40px',
        textAlign: 'center', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(0,55,18,0.28) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ width: '60px', height: '60px', margin: '0 auto 28px' }}>
            <FireLogo size={60} />
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 800, lineHeight: 1.1,
            fontFamily: 'var(--font-geist-mono)', letterSpacing: '-0.02em',
            maxWidth: '720px', margin: '0 auto 48px',
          }}>
            No esperes a que sea demasiado tarde,{' '}
            <span className="glow-fire">estamos para ayudarte.</span>
          </h2>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn-fire">Solicita una demo</a>
            <a href="#" className="btn-ghost-dark">Ir a la app</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        position: 'relative', zIndex: 2,
        borderTop: '1px solid rgba(0,255,136,0.07)',
        padding: '44px 40px 28px',
        maxWidth: '1100px', margin: '0 auto',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '20px', marginBottom: '28px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FireLogo size={26} />
            <span style={{
              fontFamily: 'var(--font-geist-mono)', fontWeight: 800,
              letterSpacing: '0.1em', fontSize: '0.88rem', color: '#e2e8f0',
            }}>SATELLITES ON FIRE</span>
          </div>
          <div style={{ display: 'flex', gap: '28px' }}>
            {['Inicio', 'Impacto', 'Contáctanos'].map(link => (
              <a key={link} href="#" className="nav-link" style={{ fontSize: '0.83rem' }}>{link}</a>
            ))}
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(0,255,136,0.05)', paddingTop: '22px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <div style={{ fontFamily: 'var(--font-geist-mono)', fontSize: '0.7rem', color: 'rgba(201,209,217,0.28)' }}>
            © 2025 Satellites on Fire. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['IG', 'LI', 'X'].map(s => (
              <a key={s} href="#" style={{
                fontFamily: 'var(--font-geist-mono)', fontSize: '0.72rem',
                color: 'rgba(201,209,217,0.32)', textDecoration: 'none',
                border: '1px solid rgba(201,209,217,0.1)', borderRadius: '6px',
                padding: '4px 8px', transition: 'color 0.2s, border-color 0.2s',
              }}>{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
