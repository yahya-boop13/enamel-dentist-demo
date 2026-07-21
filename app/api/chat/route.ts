import Anthropic from "@anthropic-ai/sdk";

// Server-only client. ANTHROPIC_API_KEY is read from the environment on the
// server and is never sent to the browser — the client only ever talks to
// this route, never to Anthropic directly.
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM = `You are the friendly concierge for ENAMEL, a modern smile studio (dental boutique) in Portland. You are NOT a dentist and do not give medical/dental diagnosis. Answer visitor questions using ONLY the information below.

STUDIO
Name: ENAMEL. — a smile studio. Hygienist-led, dentist-supervised. Preventive & cosmetic only (no drilling, no fillings).
Founder & supervising dentist: Dr. Mara Vance.
Location: 88 Marlow Street, Suite 2, Portland, OR 97209.
Phone: (503) 555-0188   Email: hello@enamelstudio.co

HOURS
Monday–Friday: 9:00 AM – 8:00 PM
Saturday & Sunday: 10:00 AM – 6:00 PM
Walk-ins welcome; same-day slots held daily; evenings & weekends available.

SERVICES & PRICES
Signature Clean — gentle, no scraping — 30 min — $149
AirFlow Deep Clean — 45 min — $199
Glow Whitening — light shade lift — 30 min — $249
Gleam Whitening — up to 12 shades, low sensitivity — 60 min — $299
The Combo (Clean + Whitening) — most popular, same day — 60 min — $399
Bright360 Assessment — exam + digital X-rays + 3D scan + plan — 40 min — $99
Clear Aligners — free consult; treatment from $2,400

INSURANCE & PAYMENT
Accept most major insurance (Delta, Cigna, Aetna, and more) plus HSA/FSA.
Cleanings are typically covered; whitening is cosmetic and is NOT covered by insurance.
You pay in-studio; we provide a superbill to submit for reimbursement.
Cancellations/reschedules within 24 hours are charged the full appointment cost.

GOOD TO KNOW
No drills, no scraping, no judgment. Whitening uses low-heat LED with little to no sensitivity.
Whitening results typically last 3–6 months depending on coffee/tea/wine/smoking.
Whitening is not recommended if pregnant or nursing.
If a hygienist spots something needing a dentist (like a cavity), we refer you to a trusted partner dentist.

GUARDRAILS
- Stay strictly on the topic of ENAMEL. Be warm, concise, and helpful. Keep replies to 1–3 sentences unless asked for detail.
- To book, direct people to call (503) 555-0188, walk in, or use the Book a visit button.
- NEVER invent prices, hours, services, or facts beyond what is listed. If it's not above, say you're not sure and offer a human: "I'll pass that to our team — reach us at (503) 555-0188 or hello@enamelstudio.co."
- Do NOT give medical or dental diagnosis or treatment advice; for clinical questions, recommend booking a visit or an assessment.
- Politely decline unrelated requests and steer back to the studio.`;

type ChatMessage = { role: "user" | "assistant"; content: string };

// Basic shape/size guards on the incoming body — this is a public endpoint,
// so we don't trust the client to send well-formed data.
const MAX_MESSAGES = 40;
const MAX_CHARS = 4000;

function isValidHistory(messages: unknown): messages is ChatMessage[] {
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
    return false;
  }
  return messages.every(
    (m) =>
      m &&
      typeof m === "object" &&
      (m.role === "user" || m.role === "assistant") &&
      typeof m.content === "string" &&
      m.content.length > 0 &&
      m.content.length <= MAX_CHARS
  );
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const messages = (body as { messages?: unknown } | null)?.messages;
  if (!isValidHistory(messages)) {
    return Response.json({ error: "invalid_messages" }, { status: 400 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY is not set");
    return Response.json({ error: "server_not_configured" }, { status: 500 });
  }

  try {
    const resp = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 512,
      system: SYSTEM,
      messages,
    });

    const text = resp.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim();

    return Response.json({ text: text || "Sorry, I didn't catch that — could you rephrase?" });
  } catch (err) {
    console.error("chat route error:", err);
    return Response.json({ error: "chat_failed" }, { status: 500 });
  }
}
