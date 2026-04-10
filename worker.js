// worker.js
// Cloudflare Worker sederhana untuk menangani banyak subdomain (gratis)

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const host = request.headers.get('host') || 'unknown';
    const method = request.method;
    const path = url.pathname;
    const userAgent = request.headers.get('user-agent') || '-';
    const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || '-';

    // Respons informasi request
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Cloudflare Worker</title>
          <style>
            body { font-family: system-ui, sans-serif; margin: 2rem; background: #f9f9f9; }
            .card { background: white; border-radius: 16px; padding: 2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 700px; margin: 0 auto; }
            h1 { color: #f38020; margin-top: 0; }
            .info { background: #f4f4f4; padding: 1rem; border-radius: 8px; font-family: monospace; }
            .badge { background: #e06e00; color: white; padding: 0.2rem 0.6rem; border-radius: 20px; font-size: 0.8rem; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>⚡ Cloudflare Worker Aktif</h1>
            <p>Worker ini menangani permintaan untuk domain:</p>
            <div class="info">
              <strong>Host:</strong> ${host}<br>
              <strong>Path:</strong> ${path}<br>
              <strong>Method:</strong> ${method}<br>
              <strong>IP Anda:</strong> ${ip}<br>
              <strong>User-Agent:</strong> ${userAgent}<br>
              <strong>Lokasi (CF):</strong> ${request.cf?.city || '-'}, ${request.cf?.country || '-'}
            </div>
            <p style="margin-top: 1.5rem;">
              <span class="badge">Custom Domains Ready</span>
              <span style="margin-left: 0.5rem;">Semua subdomain dari customdomain.txt sudah dikonfigurasi.</span>
            </p>
            <p style="color: #666; margin-top: 2rem; font-size: 0.9rem;">
              🚀 Deployed via GitHub Actions & Wrangler
            </p>
          </div>
        </body>
      </html>
    `;

    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'x-powered-by': 'Cloudflare Worker',
      },
    });
  },
};
