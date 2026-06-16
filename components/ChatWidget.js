'use client'
import { useState } from 'react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role:'ai', text:'Hi! Ask me anything about Gurpratap.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const send = async () => {
    if (!input.trim()) return
    const userMsg = input
    setInput('')
    setMessages(m => [...m,
      { role:'user', text: userMsg }])
    setLoading(true)

    const res = await fetch('/api/chat', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ message: userMsg })
    })
    const data = await res.json()
    setMessages(m => [...m,
      { role:'ai', text: data.reply }])
    setLoading(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle button */}
      <button onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-[var(--accent)]
        text-white flex items-center justify-center text-lg
        shadow-lg">
        {open ? '×' : '✦'}
      </button>

      {/* Chat window */}
      {open && (
        <div className="absolute bottom-16 right-0 w-72
          bg-[var(--accent-lt)] border border-[var(--rule)] rounded-2xl
          overflow-hidden shadow-xl">
          <div className="p-3 border-b border-[var(--rule)]
            text-xs font-medium tracking-wider uppercase
            text-[var(--muted)]">Ask about Gurpratap</div>

          <div className="h-52 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`text-xs leading-relaxed
                ${m.role==='user'
                  ? 'text-right text-[var(--ink)]'
                  : 'text-[var(--muted)]'}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="text-xs text-[var(--muted)]
              animate-pulse">thinking...</div>}
          </div>

          <div className="flex border-t border-[var(--rule)]">
            <input value={input} onChange={e=>setInput(e.target.value)}
              onKeyDown={e=>e.key==='Enter'&&send()}
              placeholder="Ask anything..."
              className="flex-1 text-xs p-3 outline-none bg-transparent text-ink"/>
            <button onClick={send}
              className="px-3 text-[var(--accent)] text-xs
              font-medium">Send</button>
          </div>
        </div>
      )}
    </div>
  )
}
