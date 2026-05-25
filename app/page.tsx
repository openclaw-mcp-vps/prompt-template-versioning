export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Git-like versioning for AI prompts
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Version Control for<br />
          <span className="text-[#58a6ff]">AI Prompt Templates</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Branch, merge, diff, and rollback your AI prompts just like code. Stop losing great prompt iterations and start shipping better AI products faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $15/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn more
          </a>
        </div>
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
          </div>
          <p className="text-[#8b949e]">$ promptvault commit -m <span className="text-[#a5d6ff]">"improve tone for customer support"</span></p>
          <p className="text-[#3fb950] mt-1">✓ Saved version v1.4.2 on branch <span className="text-[#58a6ff]">feature/friendlier-tone</span></p>
          <p className="text-[#8b949e] mt-1">$ promptvault diff v1.3.0 v1.4.2</p>
          <p className="text-[#f85149] mt-1">- You must provide your order number.</p>
          <p className="text-[#3fb950]">+ Please share your order number and I'll help right away!</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-bold text-white">Pro</span>
            <span className="bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-2 py-1 rounded">POPULAR</span>
          </div>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$15</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm">
            {[
              "Unlimited prompt versions",
              "Branch & merge workflows",
              "Visual diff comparisons",
              "One-click rollback",
              "Team collaboration (up to 5)",
              "API access"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How is this different from just saving prompts in a doc?</h3>
            <p className="text-[#8b949e] text-sm">PromptVault tracks every change with full history, lets you branch for experiments, compare versions side-by-side with visual diffs, and roll back instantly — all without overwriting your previous work.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which AI providers does it support?</h3>
            <p className="text-[#8b949e] text-sm">PromptVault is provider-agnostic. Store and version prompts for OpenAI, Anthropic, Gemini, Mistral, or any other model — the system works with plain text templates.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing dashboard with no questions asked. Your data remains accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} PromptVault. All rights reserved.
      </footer>
    </main>
  );
}
