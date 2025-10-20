
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }


  const { prompt, model, ...rest } = req.body || {};

  if (!prompt) {
    return res.status(400).json({ error: 'Missing required field: prompt' });
  }

  const API_KEY = process.env.GEMINI_API_KEY;
  const API_URL = process.env.GEMINI_API_URL;

  if (!API_KEY || !API_URL) {
    return res.status(500).json({ error: 'Server misconfigured: GEMINI_API_KEY or GEMINI_API_URL not set' });
  }

  try {
    // Build upstream payload. Adjust shape if you use a different Gemini/OpenAI variant.
    const upstreamBody = {
      model: model || 'gemini-default',
      prompt,
      // pass-through any other optional params the client sent
      ...rest,
    };

    const r = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(upstreamBody),
    });

    const contentType = r.headers.get('content-type') || '';

    // If upstream returns JSON, forward JSON. Otherwise forward text.
    if (contentType.includes('application/json')) {
      const data = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: data });
      return res.status(200).json(data);
    }

    const text = await r.text();
    if (!r.ok) return res.status(r.status).json({ error: text });
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.status(200).send(text);
  } catch (err: any) {
    console.error('api/gemini error:', err);
    return res.status(500).json({ error: String(err) });
  }
}
