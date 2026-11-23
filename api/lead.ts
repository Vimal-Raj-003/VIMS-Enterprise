export async function POST(request: Request): Promise<Response> {
  try {
    const payload = await request.json().catch(() => ({}));
    const lead = {
      name: String(payload?.name || '').trim().slice(0, 120),
      email: String(payload?.email || '').trim().slice(0, 160),
      phone: String(payload?.phone || '').trim().slice(0, 40),
      company: String(payload?.company || '').trim().slice(0, 160),
      topic: String(payload?.topic || payload?.service || '').trim().slice(0, 160),
      notes: String(payload?.notes || payload?.message || '').trim().slice(0, 2000),
      source: String(payload?.source || 'website').slice(0, 60),
      submittedAt: new Date().toISOString(),
    };

    console.info('[VIMS Enterprise Lead Received]', JSON.stringify(lead));

    const webhookUrl = process.env.VIMS_LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      }).catch((err) => console.error('Lead webhook forwarding error:', err));
    }

    return Response.json({ ok: true, receivedAt: lead.submittedAt });
  } catch (err) {
    console.error('VIMS lead route error:', err);
    return Response.json({ ok: false }, { status: 400 });
  }
}
