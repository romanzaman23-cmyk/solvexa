/* Service-specific UI preview mockups */

function Phone({ children, small }) {
  return (
    <div className={`relative mx-auto rounded-[1.5rem] border-[5px] border-slate-700 bg-slate-900 shadow-xl overflow-hidden ${small ? 'w-[120px] h-[240px]' : 'w-[150px] h-[300px]'}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-b-xl z-10" />
      {children}
    </div>
  )
}

function Browser({ children, url, small }) {
  return (
    <div className={`rounded-lg border border-white/10 bg-slate-900 shadow-xl overflow-hidden w-full ${small ? 'max-w-[200px]' : 'max-w-[280px]'}`}>
      <div className="flex items-center gap-1 px-2 py-1.5 bg-slate-800 border-b border-white/10">
        <div className="w-2 h-2 rounded-full bg-red-500/80" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
        <div className="w-2 h-2 rounded-full bg-green-500/80" />
        <div className="flex-1 ml-1 px-1.5 py-0.5 rounded bg-slate-700/80 text-[7px] text-secondary truncate">{url}</div>
      </div>
      <div className={small ? 'h-[120px]' : 'h-[160px]'}>{children}</div>
    </div>
  )
}

function WebDevVisual({ screen = 0 }) {
  const screens = [
    <Browser key="0" url="yourwebsite.com"><div className="bg-slate-950 p-2 h-full"><div className="h-8 rounded bg-gradient-to-r from-brand-600/50 to-accent-500/30 mb-2 flex items-center justify-center text-[8px] text-white font-bold">Your Brand</div><div className="grid grid-cols-3 gap-1">{['🛍️', '📦', '⭐'].map((e) => <div key={e} className="glass rounded p-1 text-center text-sm">{e}</div>)}</div></div></Browser>,
    <Browser key="1" url="yourwebsite.com/shop"><div className="bg-slate-950 p-2 h-full flex gap-2"><div className="w-1/2 rounded bg-brand-500/20 flex items-center justify-center text-2xl">👟</div><div className="flex-1 text-[7px]"><div className="text-white font-bold">Product</div><div className="text-brand-400 mt-1">SAR 499</div><div className="mt-2 py-1 rounded bg-brand-600 text-white text-center text-[6px]">Buy Now</div></div></div></Browser>,
    <Browser key="2" url="yourwebsite.com/admin"><div className="bg-slate-950 p-2 h-full"><div className="text-[8px] text-white font-bold mb-1">Admin Panel</div><div className="grid grid-cols-2 gap-1">{['Orders', 'Users', 'Sales', 'Stock'].map((s) => <div key={s} className="glass rounded p-1 text-[6px] text-secondary text-center">{s}</div>)}</div></div></Browser>,
    <Browser key="3" url="yourwebsite.com/mobile"><div className="bg-slate-950 h-full flex items-center justify-center"><Phone small><div className="h-full bg-slate-950 pt-5 px-2 text-[6px]"><div className="text-brand-400 font-bold text-center">Responsive</div><div className="mt-2 grid grid-cols-2 gap-1">{['📱', '💻'].map((i) => <div key={i} className="glass rounded p-2 text-center text-base">{i}</div>)}</div></div></Phone></div></Browser>,
  ]
  return <div className="flex items-center justify-center w-full h-full py-4">{screens[screen] || screens[0]}</div>
}

function MobileAppVisual({ screen = 0 }) {
  const screens = [
    <Phone key="0"><div className="h-full bg-slate-950 pt-6 px-2 pb-2 text-[7px]"><div className="text-white font-bold">📱 MyApp</div><div className="mt-2 glass rounded-lg p-2 text-center"><div className="text-2xl">🚀</div><div className="text-brand-400 mt-1">Welcome Back!</div></div><div className="mt-2 grid grid-cols-2 gap-1">{['Home', 'Profile', 'Settings', 'Help'].map((i) => <div key={i} className="glass rounded p-1.5 text-center text-white">{i}</div>)}</div></div></Phone>,
    <Phone key="1"><div className="h-full bg-slate-950 pt-6 px-2 text-[7px]"><div className="text-white font-bold">Notifications</div>{['New message', 'Order shipped', 'Payment done'].map((n) => <div key={n} className="glass rounded p-1.5 mt-1 text-secondary">{n}</div>)}</div></Phone>,
    <Phone key="2"><div className="h-full bg-slate-950 pt-6 px-2 text-[7px]"><div className="text-white font-bold">App Store</div><div className="mt-4 text-center"><div className="text-3xl">⭐⭐⭐⭐⭐</div><div className="text-accent-400 mt-2">4.9 Rating</div><div className="text-secondary mt-1">50K+ Downloads</div></div></div></Phone>,
    <Phone key="3"><div className="h-full bg-slate-950 pt-6 px-2 text-[7px]"><div className="text-white font-bold">iOS & Android</div><div className="mt-4 flex justify-center gap-3 text-2xl"><span>🍎</span><span>🤖</span></div><div className="mt-3 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-white text-center font-bold">Cross Platform</div></div></Phone>,
  ]
  return <div className="flex items-center justify-center w-full h-full py-4">{screens[screen] || screens[0]}</div>
}

function DesignVisual({ screen = 0 }) {
  const screens = [
    <div key="0" className="w-full max-w-[280px] mx-auto p-3"><div className="glass rounded-xl p-3"><div className="text-[8px] text-secondary mb-2">Wireframe</div><div className="space-y-2">{[80, 60, 90].map((w, i) => <div key={i} className="h-3 rounded bg-white/10" style={{ width: `${w}%` }} />)}</div></div></div>,
    <div key="1" className="w-full max-w-[280px] mx-auto p-3"><div className="glass rounded-xl p-3"><div className="text-[8px] text-secondary mb-2">Color Palette</div><div className="flex gap-2">{['#2563EB', '#06B6D4', '#020617', '#FFFFFF'].map((c) => <div key={c} className="w-8 h-8 rounded-lg border border-white/20" style={{ backgroundColor: c }} />)}</div></div></div>,
    <div key="2" className="w-full max-w-[280px] mx-auto p-3"><Browser url="figma.com/design"><div className="bg-slate-950 p-2 h-full"><div className="grid grid-cols-2 gap-1 h-full">{['🎨 UI', '📐 UX', '🖼️ Logo', '📱 App'].map((l) => <div key={l} className="glass rounded flex items-center justify-center text-[8px] text-white">{l}</div>)}</div></div></Browser></div>,
    <div key="3" className="w-full max-w-[280px] mx-auto p-3"><div className="glass rounded-xl p-3"><div className="text-[8px] text-secondary mb-2">Prototype</div><div className="h-24 rounded-lg bg-gradient-to-br from-brand-500/30 to-accent-500/20 flex items-center justify-center"><div className="px-4 py-2 rounded-full bg-brand-600 text-white text-[8px]">Interactive Demo</div></div></div></div>,
  ]
  return <div className="flex items-center justify-center w-full h-full py-4">{screens[screen] || screens[0]}</div>
}

function CloudVisual({ screen = 0 }) {
  const screens = [
    <Browser key="0" url="cloud.dashboard.io"><div className="bg-slate-950 p-2 h-full"><div className="text-[8px] text-brand-400 font-bold">☁️ Cloud Dashboard</div><div className="grid grid-cols-2 gap-1 mt-2">{['CPU 45%', 'RAM 62%', 'Storage', 'Uptime'].map((s) => <div key={s} className="glass rounded p-1 text-[6px] text-white text-center">{s}</div>)}</div></div></Browser>,
    <Browser key="1" url="api.cloud.io"><div className="bg-slate-950 p-2 h-full font-mono text-[6px]"><div className="text-accent-400">GET /api/v1/users</div><div className="text-green-400 mt-1">200 OK</div><div className="text-secondary mt-2">{`{ "status": "live" }`}</div></div></Browser>,
    <Browser key="2" url="aws.console"><div className="bg-slate-950 p-2 h-full"><div className="text-[8px] text-white mb-1">Auto Scaling</div><div className="flex items-end gap-0.5 h-12">{[30, 50, 70, 90, 60].map((h, i) => <div key={i} className="flex-1 bg-accent-500/50 rounded-t" style={{ height: `${h}%` }} />)}</div></div></Browser>,
    <Browser key="3" url="deploy.cloud.io"><div className="bg-slate-950 p-2 h-full flex flex-col items-center justify-center"><div className="text-2xl">🚀</div><div className="text-[8px] text-green-400 mt-2">Deployed Successfully</div></div></Browser>,
  ]
  return <div className="flex items-center justify-center w-full h-full py-4">{screens[screen] || screens[0]}</div>
}

function SoftwareVisual({ screen = 0 }) {
  const screens = [
    <Browser key="0" url="crm.yourcompany.com"><div className="bg-slate-950 p-2 h-full"><div className="text-[8px] text-white font-bold">CRM Dashboard</div><div className="mt-1 space-y-1">{['Client A — Active', 'Client B — Pending', 'Client C — Done'].map((c) => <div key={c} className="glass rounded px-2 py-1 text-[6px] text-secondary">{c}</div>)}</div></div></Browser>,
    <Browser key="1" url="app.internal/tools"><div className="bg-slate-950 p-2 h-full"><div className="text-[8px] text-white font-bold">Automation</div><div className="mt-2 flex items-center gap-1 text-[6px]"><span className="glass rounded px-2 py-1">Trigger</span><span>→</span><span className="glass rounded px-2 py-1">Action</span><span>→</span><span className="text-green-400">✓ Done</span></div></div></Browser>,
    <Browser key="2" url="reports.internal"><div className="bg-slate-950 p-2 h-full"><div className="text-[8px] text-white font-bold">Reports</div><div className="flex items-end gap-0.5 h-10 mt-2">{[40, 65, 55, 80, 70].map((h, i) => <div key={i} className="flex-1 bg-brand-500/50 rounded-t" style={{ height: `${h}%` }} />)}</div></div></Browser>,
    <Browser key="3" url="admin.internal"><div className="bg-slate-950 p-2 h-full"><div className="text-[8px] text-white font-bold">Role Access</div>{['Admin ✓', 'Manager ✓', 'Staff ✓'].map((r) => <div key={r} className="glass rounded p-1 mt-1 text-[6px] text-white">{r}</div>)}</div></Browser>,
  ]
  return <div className="flex items-center justify-center w-full h-full py-4">{screens[screen] || screens[0]}</div>
}

function StrategyVisual({ screen = 0 }) {
  const screens = [
    <div key="0" className="w-full max-w-[280px] mx-auto p-3"><div className="glass rounded-xl p-3"><div className="text-[8px] text-secondary mb-2">Digital Roadmap</div>{['Phase 1: Research', 'Phase 2: Design', 'Phase 3: Build', 'Phase 4: Launch'].map((p, i) => <div key={p} className="flex items-center gap-2 mt-1.5"><div className="w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center text-[7px] text-white">{i + 1}</div><span className="text-[8px] text-white">{p}</span></div>)}</div></div>,
    <Browser key="1" url="analytics.growth"><div className="bg-slate-950 p-2 h-full"><div className="text-[8px] text-white font-bold">Growth +127%</div><div className="flex items-end gap-0.5 h-12 mt-2">{[20, 35, 50, 75, 100].map((h, i) => <div key={i} className="flex-1 bg-accent-500/50 rounded-t" style={{ height: `${h}%` }} />)}</div></div></Browser>,
    <div key="2" className="w-full max-w-[280px] mx-auto p-3"><div className="glass rounded-xl p-3"><div className="text-[8px] text-secondary mb-2">Tech Stack</div><div className="flex flex-wrap gap-1">{['React', 'Node', 'AWS', 'Flutter'].map((t) => <span key={t} className="px-2 py-0.5 rounded bg-brand-500/20 text-[7px] text-brand-300">{t}</span>)}</div></div></div>,
    <div key="3" className="w-full max-w-[280px] mx-auto p-3"><div className="glass rounded-xl p-3 text-center"><div className="text-3xl">🎯</div><div className="text-[9px] text-white font-bold mt-2">Goal Achieved</div><div className="text-[7px] text-secondary mt-1">Data-driven results</div></div></div>,
  ]
  return <div className="flex items-center justify-center w-full h-full py-4">{screens[screen] || screens[0]}</div>
}

const visualMap = {
  'web-development': WebDevVisual,
  'mobile-applications': MobileAppVisual,
  'ui-ux-design': DesignVisual,
  'cloud-solutions': CloudVisual,
  'custom-software': SoftwareVisual,
  'digital-strategy': StrategyVisual,
}

export default function ServiceVisual({ slug, screen = 0, thumb = false }) {
  const Component = visualMap[slug]
  if (!Component) return null

  if (thumb) {
    return (
      <div className="w-full h-full overflow-hidden bg-gradient-to-br from-brand-950/50 to-background flex items-center justify-center">
        <div className="scale-[0.45] origin-center pointer-events-none">
          <Component screen={screen} />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-brand-950/30 via-background to-accent-500/5">
      <Component screen={screen} />
    </div>
  )
}

export const serviceScreenLabels = {
  'web-development': ['Homepage', 'Shop', 'Admin', 'Mobile'],
  'mobile-applications': ['Home', 'Alerts', 'App Store', 'Platforms'],
  'ui-ux-design': ['Wireframe', 'Colors', 'Design', 'Prototype'],
  'cloud-solutions': ['Dashboard', 'API', 'Scaling', 'Deploy'],
  'custom-software': ['CRM', 'Automation', 'Reports', 'Access'],
  'digital-strategy': ['Roadmap', 'Analytics', 'Tech Stack', 'Goals'],
}
