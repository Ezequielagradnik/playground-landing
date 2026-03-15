'use client'

import { useState, useEffect } from 'react'

const phrases = [
  'Hacemos fácil lo difícil',
  'Aprendé con los mejores',
  'Tu futuro comienza acá',
  'IA + Profesores reales',
  'Aprobá con confianza',
]

export default function TypewriterText() {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const current = phrases[phraseIdx]
    const speed = deleting ? 35 : 75

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setText(current.slice(0, charIdx + 1))
          setCharIdx((c) => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 2800)
        }
      } else {
        if (charIdx > 0) {
          setText(current.slice(0, charIdx - 1))
          setCharIdx((c) => c - 1)
        } else {
          setDeleting(false)
          setPhraseIdx((i) => (i + 1) % phrases.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [mounted, charIdx, deleting, phraseIdx])

  return (
    <span>
      <span>{mounted ? text : phrases[0]}</span>
      <span
        style={{
          animation: 'blink 1s step-end infinite',
          color: '#00d4ff',
          fontWeight: 300,
        }}
      >
        |
      </span>
    </span>
  )
}
