"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const GREETING =
  "Hi! I'm the ENAMEL concierge ✨ Ask me about pricing, hours, whitening, insurance, or booking a visit.";

const ERROR_MSG =
  "Sorry — something went wrong on my end. Please try again in a moment, or reach us at (503) 555-0188.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok) throw new Error("bad status");
      const data = await res.json();
      if (!data.text) throw new Error("no text");
      setMessages((s) => [...s, { role: "assistant", content: data.text }]);
    } catch {
      setMessages((s) => [...s, { role: "assistant", content: ERROR_MSG }]);
    } finally {
      setLoading(false);
    }
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="ENAMEL concierge chat"
          style={{
            position: "fixed",
            right: "clamp(16px, 3vw, 28px)",
            bottom: "clamp(84px, 10vw, 96px)",
            zIndex: 60,
            width: "min(384px, calc(100vw - 32px))",
            height: "min(560px, calc(100vh - 130px))",
            background: "var(--color-bg)",
            border: "2px solid var(--color-text)",
            boxShadow: "var(--shadow-lg)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              padding: "14px 16px",
              flexShrink: 0,
            }}
          >
            <span style={{ width: 12, height: 12, background: "var(--color-bg)", display: "inline-block" }} />
            <div style={{ marginRight: "auto" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 15, lineHeight: 1.1 }}>
                ENAMEL. concierge
              </div>
              <div style={{ fontSize: 11, letterSpacing: "0.04em", opacity: 0.85 }}>
                Hours, pricing, booking · instant replies
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{ background: "transparent", border: 0, color: "var(--color-bg)", cursor: "pointer", padding: 4, display: "inline-flex" }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* messages */}
          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              background: "var(--color-surface)",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={
                  m.role === "user"
                    ? {
                        alignSelf: "flex-end",
                        maxWidth: "82%",
                        background: "var(--color-accent)",
                        color: "var(--color-bg)",
                        padding: "9px 13px",
                        fontSize: 14,
                        lineHeight: 1.5,
                        whiteSpace: "pre-wrap",
                      }
                    : {
                        alignSelf: "flex-start",
                        maxWidth: "88%",
                        background: "var(--color-bg)",
                        border: "1.5px solid var(--color-divider)",
                        color: "var(--color-text)",
                        padding: "9px 13px",
                        fontSize: 14,
                        lineHeight: 1.55,
                        whiteSpace: "pre-wrap",
                      }
                }
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  background: "var(--color-bg)",
                  border: "1.5px solid var(--color-divider)",
                  padding: "12px 14px",
                  display: "flex",
                  gap: 5,
                }}
              >
                <Dot delay={0} />
                <Dot delay={180} />
                <Dot delay={360} />
              </div>
            )}
          </div>

          {/* input */}
          <div
            style={{
              display: "flex",
              gap: 8,
              padding: 12,
              borderTop: "2px solid var(--color-divider)",
              background: "var(--color-bg)",
              flexShrink: 0,
            }}
          >
            <input
              className="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="Ask about pricing, hours, whitening…"
              aria-label="Message"
              style={{ flex: 1, minWidth: 0 }}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={send}
              disabled={loading || !input.trim()}
              aria-label="Send"
              style={{ padding: "0 14px" }}
            >
              <SendIcon />
            </button>
          </div>
        </div>
      )}

      {/* launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position: "fixed",
          right: "clamp(16px, 3vw, 28px)",
          bottom: "clamp(16px, 3vw, 28px)",
          zIndex: 61,
          width: 58,
          height: 58,
          background: "var(--color-accent)",
          color: "var(--color-bg)",
          border: "2px solid var(--color-text)",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "var(--shadow-md)",
        }}
      >
        {open ? <CloseIconBig /> : <BubbleIcon />}
      </button>
    </>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <span
      style={{
        width: 7,
        height: 7,
        background: "var(--color-accent)",
        display: "inline-block",
        borderRadius: "50%",
        animation: `cc-dot 1.1s infinite ${delay}ms`,
      }}
    />
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function CloseIconBig() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function BubbleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" />
    </svg>
  );
}
