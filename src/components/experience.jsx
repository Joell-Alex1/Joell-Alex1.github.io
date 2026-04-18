export default function Experience() {
  return (
    <section id="experience" className="mt-10">
      {/* MAIN SECTION */}
      <h2 className="text-3xl font-bold">Experience</h2>

      <p className="text-gray-300 mt-2">
        I build things across the stack - backends, frontends, AI pipelines, and automation systems. Currently interning at three companies, shipping code that runs in production. I care about clean system design, reliable data contracts, and understanding how things break.
      </p>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Internships</h3>

        {/* Company */}
        <div className="mt-4 p-4 border border-gray-700 rounded-lg">
          <h4 className="text-xl font-semibold">Neubitat</h4>

          <p className="text-gray-300 text-md mt-1">
            Software Development Intern   • Remote 
          </p>

          <p className="text-gray-350 text-sm">
            Dec 2025 – Present
          </p>
          <ul className="text-gray-300 mt-2 space-y-2 list-disc list-inside">
    <li>
      Designed and implemented production Python backend APIs with clear contracts to support chess puzzles, scoring logic, and multiplayer game state
    </li>

    <li>
    Integrated AI-powered OCR pipelines using OpenAI and Gemini APIs, designing validation, normalization, and post-processing logic to ensure downstream systems only consumed structured, reliable chess move data (SAN).
    </li>

    <li>
    Implemented real-time state synchronization using WebSockets, handling partial failures and inconsistent client state during live gameplay.
    </li>
    </ul>
    </div>

      <div className="mt-4 p-4 border border-gray-700 rounded-lg">
          <h4 className="text-xl font-semibold">Ohey INC</h4>

          <p className="text-gray-300 text-md mt-1">
            MLOps Engineer Intern   • Remote (San Francisco)
          </p>

          <p className="text-gray-350 text-sm">
            Feb 2026 – Present
          </p>
          <ul className="text-gray-300 mt-2 space-y-2 list-disc list-inside">
    <li>
    Architected and deployed an end-to-end observability stack on a cloud VPS using Prometheus and Grafana, configuring scrape targets, jobs, and port bindings while
organizing dashboards across monitoring layers
    </li>

    <li>
    Built ML monitoring dashboards for 10+ models (XGBoost, LightGBM, HistGBM, MLP, and ensemble variants), defining metrics and visualization panels for
inference latency and model-serving performance.
    </li>

    <li>
    Instrumented API and infrastructure observability, tracking request latency, queue lag, CPU utilization, memory usage, and disk I/O across the model-serving pipeline.
    </li>
    </ul>
      </div>

      <div className="mt-4 p-4 border border-gray-700 rounded-lg">
          <h4 className="text-xl font-semibold">Voicehelden</h4>

          <p className="text-gray-300 text-md mt-1">
            Automation Engineer Intern  • Remote (Netherlands)
          </p>
          <p className="text-gray-350 text-sm">
            Feb 2026 – Present
          </p>
          <ul className="text-gray-300 mt-2 space-y-2 list-disc list-inside">
    <li>
    Built an end-to-end lead enrichment pipeline in n8n that ingests CSV datasets of company domains, orchestrates an email-scraping service, and outputs structured contact data to Google Sheets, eliminating manual lead research.
    </li>

    <li>
    Forked and re-engineered an open-source email scraping service, replacing sequential requests with a concurrent ThreadPoolExecutor (5 workers) and persistent HTTP sessions, reducing per-domain scrape time from ~20 minutes to ~5 minutes; integrated output into Google Sheets to eliminate manual lead research.
    </li>
    </ul>
      </div>
      </div>

    </section>
  );
}