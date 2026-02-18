export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing OPENAI_API_KEY env var' });
  }

  const body = req.body || {};
  const system = body.system || 'You are Professor Pax, a calm psychiatric training coach for Destiny Springs Healthcare staff. Keep replies under 120 words. If unsure or outside scope, recommend they ask their supervisor or leadership. Avoid PHI. Tone: supportive, concise.';
  const messages = Array.isArray(body.messages) ? body.messages : [];

  const payload = {
    model: 'gpt-4o-mini',
    messages: [{ role: 'system', content: system }, ...messages.map(m => ({ role: m.role, content: m.content }))].slice(-9),
    temperature: 0.6,
    max_tokens: 256
  };

  try {
    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      return res.status(upstream.status).json({ error: text || 'LLM request failed' });
    }

    const data = await upstream.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || 'I might not have the answer here. Please check with your supervisor or leadership for the safest guidance.';
    return res.status(200).json({ reply });
  } catch (e) {
    return res.status(500).json({ error: 'Upstream error', detail: String(e) });
  }
}
