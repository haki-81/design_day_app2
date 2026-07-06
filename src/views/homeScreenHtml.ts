export function renderHomeScreenHtml(): string {
  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Personalized Comparison Portal</title>
  <style>
    :root {
      --bg: #f0f1f5;
      --text: #222328;
      --muted: #7f8089;
      --accent: #ff5d36;
      --accent-2: #f53e93;
      --card: #ffffff;
      --shadow-soft: 0 10px 24px -16px rgba(0, 0, 0, 0.28);
      --radius: 22px;
    }

    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      min-height: 100%;
      font-family: "SF Pro Text", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
      color: var(--text);
      background: radial-gradient(circle at 5% 10%, #ffefef 0%, transparent 35%), var(--bg);
      -webkit-font-smoothing: antialiased;
    }

    .app {
      width: 100%;
      max-width: 440px;
      margin: 0 auto;
      min-height: 100vh;
      background: var(--bg);
      position: relative;
      overflow-x: hidden;
      padding-bottom: 110px;
    }

    .hero {
      background: linear-gradient(150deg, #ff6634 0%, #ff5b4e 42%, #f53e93 100%);
      color: #fff;
      border-bottom-left-radius: 34px;
      border-bottom-right-radius: 34px;
      padding: 10px 20px 26px;
      box-shadow: 0 18px 44px -26px rgba(245, 62, 147, 0.8);
    }

    .status {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 2px 16px;
      font-weight: 700;
      font-size: 18px;
    }

    .status-icons {
      display: flex;
      align-items: center;
      gap: 7px;
      opacity: 0.95;
      font-size: 12px;
      letter-spacing: 0.02em;
    }

    .hero-head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 14px;
    }

    .hero-time {
      margin: 0;
      font-size: 30px;
      line-height: 1.05;
      font-weight: 790;
      letter-spacing: -0.02em;
    }

    .hero-sub {
      margin: 6px 0 0;
      font-size: 30px;
      line-height: 1.06;
      font-weight: 790;
      letter-spacing: -0.02em;
    }

    .hero-copy {
      margin: 8px 0 0;
      font-size: 30px;
      font-weight: 790;
      line-height: 1.05;
    }

    .hero-small {
      margin: 8px 0 0;
      font-size: 28px;
      font-weight: 790;
      letter-spacing: -0.03em;
      line-height: 1.04;
    }

    .hero-intro {
      margin: 8px 0 0;
      font-size: 31px;
      font-weight: 790;
      letter-spacing: -0.03em;
      line-height: 1.04;
    }

    .eyebrow {
      margin: 0;
      font-size: 28px;
      line-height: 1.05;
      font-weight: 790;
      letter-spacing: -0.03em;
    }

    .intro {
      margin: 0;
      font-size: 14px;
      opacity: 0.88;
      font-weight: 560;
    }

    .welcome {
      margin: 4px 0 0;
      font-size: 44px;
      line-height: 0.96;
      font-weight: 840;
      letter-spacing: -0.03em;
    }

    .new-offers {
      margin: 8px 0 0;
      font-size: 30px;
      line-height: 1.04;
      font-weight: 790;
      letter-spacing: -0.02em;
    }

    .hero p.time {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      opacity: 0.76;
    }

    .hero h1 {
      margin: 2px 0 0;
      font-size: 45px;
      line-height: 0.98;
      letter-spacing: -0.032em;
      font-weight: 840;
    }

    .hero .teaser {
      margin: 8px 0 0;
      font-size: 29px;
      font-weight: 790;
      line-height: 1.04;
      letter-spacing: -0.03em;
    }

    .avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 1.5px solid rgba(255, 255, 255, 0.36);
      background: rgba(255, 255, 255, 0.18);
      display: grid;
      place-items: center;
      font-size: 15px;
      font-weight: 740;
      flex: 0 0 auto;
    }

    .stats {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 8px;
    }

    .stat {
      background: rgba(255, 255, 255, 0.14);
      border: 1px solid rgba(255, 255, 255, 0.22);
      border-radius: 14px;
      padding: 10px 10px 11px;
      backdrop-filter: blur(2px);
    }

    .stat-label {
      margin: 0;
      font-size: 11.5px;
      font-weight: 580;
      opacity: 0.78;
    }

    .stat-value {
      margin: 2px 0 0;
      font-size: 33px;
      font-weight: 820;
      line-height: 0.95;
      letter-spacing: -0.03em;
    }

    .stat-value span {
      font-size: 13px;
      font-weight: 650;
      opacity: 0.8;
      letter-spacing: 0;
      margin-left: 2px;
    }

    .section {
      margin-top: 24px;
    }

    .section-header {
      margin: 0 20px 10px;
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
    }

    .section h2 {
      margin: 0;
      font-size: 39px;
      line-height: 1;
      letter-spacing: -0.03em;
      font-weight: 840;
    }

    .section .link {
      margin: 0;
      color: var(--accent);
      font-size: 26px;
      font-weight: 680;
      letter-spacing: -0.01em;
      text-decoration: none;
    }

    .scroll-row {
      display: flex;
      gap: 12px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding: 0 20px 4px;
      scrollbar-width: none;
    }

    .scroll-row::-webkit-scrollbar {
      display: none;
    }

    .offer-card {
      min-width: 210px;
      background: var(--card);
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow-soft);
      scroll-snap-align: start;
    }

    .offer-media {
      height: 122px;
      position: relative;
      display: flex;
      align-items: flex-end;
      padding: 12px;
    }

    .offer-media.heat {
      background: linear-gradient(135deg, #eadcd5 0%, #e1d5cf 52%, #e7ddd9 100%);
    }

    .offer-media.price {
      background: linear-gradient(135deg, #dce7f5 0%, #d6e0ef 50%, #cfdae8 100%);
    }

    .offer-tag {
      display: inline-block;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.02em;
      border-radius: 999px;
      padding: 6px 10px;
      background: rgba(255, 255, 255, 0.95);
      color: var(--accent);
    }

    .offer-body {
      padding: 12px 14px 15px;
    }

    .offer-body h3 {
      margin: 0;
      font-size: 17px;
      line-height: 1.15;
      letter-spacing: -0.01em;
      font-weight: 760;
    }

    .offer-body p {
      margin: 4px 0 0;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.32;
      font-weight: 540;
    }

    .subhead {
      margin: 2px 20px 12px;
      color: var(--muted);
      font-size: 14px;
      font-weight: 560;
      letter-spacing: -0.005em;
    }

    .tile-grid {
      margin: 0 20px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }

    .tile {
      background: var(--card);
      border-radius: 20px;
      padding: 14px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
      min-height: 148px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 6px;
    }

    .icon {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      margin-bottom: auto;
      font-size: 21px;
    }

    .tile h3 {
      margin: 0;
      font-size: 17px;
      line-height: 1.1;
      letter-spacing: -0.01em;
      font-weight: 760;
    }

    .tile p {
      margin: 0;
      font-size: 14px;
      font-weight: 650;
      line-height: 1.1;
    }

    .green {
      color: #2ea76e;
    }

    .amber {
      color: #e28e1e;
    }

    .blue {
      color: #4a6fdf;
    }

    .red {
      color: #ef4c4d;
    }

    .nav {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: 12px;
      width: min(412px, calc(100% - 24px));
      border-radius: 30px;
      padding: 9px 8px;
      background: rgba(255, 255, 255, 0.58);
      backdrop-filter: blur(28px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.65);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 10px 24px -16px rgba(0, 0, 0, 0.35);
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 4px;
      z-index: 10;
    }

    .nav-item {
      border: 0;
      background: transparent;
      border-radius: 22px;
      min-height: 50px;
      display: grid;
      place-items: center;
      gap: 3px;
      color: #7f8188;
      font-size: 12px;
      font-weight: 620;
      letter-spacing: -0.008em;
    }

    .nav-item .symbol {
      font-size: 20px;
      line-height: 1;
    }

    .nav-item.active {
      color: var(--accent);
      background: rgba(255, 93, 54, 0.12);
      font-weight: 690;
    }

    @media (min-width: 700px) {
      body {
        padding: 18px;
      }

      .app {
        border-radius: 30px;
        box-shadow: 0 30px 55px -35px rgba(0, 0, 0, 0.4);
        min-height: calc(100vh - 36px);
      }
    }
  </style>
</head>
<body>
  <main class="app">
    <header class="hero">
      <div class="status">
        <span>9:41</span>
        <span class="status-icons">
          <span>▮▮▮</span>
          <span>◠◡</span>
          <span>▰</span>
        </span>
      </div>

      <div class="hero-head">
        <div>
          <p class="time">Freitagmorgen</p>
          <h1>Hallo, Lena.</h1>
          <p class="teaser">3 neue Angebote warten auf dich.</p>
        </div>
        <div class="avatar">LV</div>
      </div>

      <div class="stats">
        <article class="stat">
          <p class="stat-label">Sparpotenzial</p>
          <p class="stat-value">428 €<span>/J</span></p>
        </article>
        <article class="stat">
          <p class="stat-label">Verträge</p>
          <p class="stat-value">4<span>aktiv</span></p>
        </article>
        <article class="stat">
          <p class="stat-label">To-dos</p>
          <p class="stat-value">2<span>offen</span></p>
        </article>
      </div>
    </header>

    <section class="section" aria-label="Personalisierte Angebote">
      <div class="section-header">
        <h2>Für dich</h2>
        <a href="#" class="link">Alle</a>
      </div>
      <div class="scroll-row">
        <article class="offer-card">
          <div class="offer-media heat">
            <span class="offer-tag">-312 € / JAHR</span>
          </div>
          <div class="offer-body">
            <h3>Wärmepumpe statt Gas</h3>
            <p>Weil du zuletzt nach Heizung gesucht hast.</p>
          </div>
        </article>

        <article class="offer-card">
          <div class="offer-media price">
            <span class="offer-tag" style="color:#1e66d8;">BESTPREIS</span>
          </div>
          <div class="offer-body">
            <h3>Günstigerer Kfz-Tarif</h3>
            <p>6 Tarife günstiger als dein jetziger.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="section" aria-label="Vergleiche">
      <div class="section-header" style="margin-bottom:4px;">
        <h2>Weiter vergleichen</h2>
      </div>
      <p class="subhead">Nach deinem Verlauf sortiert</p>
      <div class="tile-grid">
        <article class="tile">
          <div class="icon" style="background:#e9f5ef;">🛡</div>
          <h3>Kfz-Versicherung</h3>
          <p class="green">Zuletzt angesehen</p>
        </article>

        <article class="tile">
          <div class="icon" style="background:#fdf1e1;">☼</div>
          <h3>Solaranlagen</h3>
          <p class="amber">Neu für dich</p>
        </article>

        <article class="tile">
          <div class="icon" style="background:#e7eefb;">⚡</div>
          <h3>Stromtarif</h3>
          <p class="blue">Fortsetzen</p>
        </article>

        <article class="tile">
          <div class="icon" style="background:#f9e9ea;">♨</div>
          <h3>Gasvertrag</h3>
          <p class="red">In deiner Nähe</p>
        </article>
      </div>
    </section>
  </main>

  <nav class="nav" aria-label="Bottom Navigation">
    <button class="nav-item active" type="button"><span class="symbol">⌂</span><span>Home</span></button>
    <button class="nav-item" type="button"><span class="symbol">⊗</span><span>Mein Haushalt</span></button>
    <button class="nav-item" type="button"><span class="symbol">◉</span><span>Stöbern</span></button>
    <a class="nav-item" href="/search-discovery/Search%20Rework.dc.html"><span class="symbol">⌕</span><span>Suche</span></a>
  </nav>
</body>
</html>`;
}