const phoneShell = 'relative mx-auto rounded-[2rem] border-[6px] border-slate-700 bg-slate-900 shadow-2xl overflow-hidden'
const notch = 'absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-2xl z-10'
const browserBar = 'flex items-center gap-1.5 px-3 py-2 bg-slate-800 border-b border-white/10'

function PhoneFrame({ children, className = '', size = 'default' }) {
  const sizes = {
    default: 'w-[160px] h-[320px] sm:w-[180px] sm:h-[360px]',
    thumb: 'w-[90px] h-[180px]',
  }
  return (
    <div className={`${phoneShell} ${sizes[size]} ${className}`}>
      {size === 'default' && <div className={notch} />}
      {children}
    </div>
  )
}

function BrowserFrame({ children, url, className = '', size = 'default' }) {
  const sizes = {
    default: 'max-w-[340px]',
    thumb: 'max-w-[160px]',
  }
  return (
    <div className={`rounded-xl border border-white/10 bg-slate-900 shadow-2xl overflow-hidden w-full ${sizes[size]} ${className}`}>
      <div className={`${browserBar} ${size === 'thumb' ? 'py-1 px-2' : ''}`}>
        <div className={`rounded-full bg-red-500/80 ${size === 'thumb' ? 'w-1.5 h-1.5' : 'w-2.5 h-2.5'}`} />
        <div className={`rounded-full bg-yellow-500/80 ${size === 'thumb' ? 'w-1.5 h-1.5' : 'w-2.5 h-2.5'}`} />
        <div className={`rounded-full bg-green-500/80 ${size === 'thumb' ? 'w-1.5 h-1.5' : 'w-2.5 h-2.5'}`} />
        <div className={`flex-1 ml-1 px-1.5 py-0.5 rounded-md bg-slate-700/80 text-secondary truncate ${size === 'thumb' ? 'text-[6px]' : 'text-[9px]'}`}>
          {url}
        </div>
      </div>
      {children}
    </div>
  )
}

function FoodDeliveryUI({ screen = 'home' }) {
  if (screen === 'tracking') {
    return (
      <PhoneFrame>
        <div className="h-full bg-slate-950 pt-7 px-3 pb-3 flex flex-col text-[8px]">
          <div className="font-semibold text-white text-[10px] mb-2">Track Order</div>
          <div className="flex-1 rounded-xl bg-brand-500/10 border border-brand-500/20 p-2 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-brand-500" />
              <div className="absolute top-12 left-8 w-px h-16 bg-accent-500 rotate-12" />
              <div className="absolute bottom-8 right-6 w-2 h-2 rounded-full bg-accent-500" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">🛵</div>
          </div>
          <div className="mt-2 glass rounded-lg p-2">
            <div className="text-accent-400 font-semibold">Arriving in 12 min</div>
            <div className="text-secondary mt-0.5">Rider: Mohammed • 2.3 km away</div>
            <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
            </div>
          </div>
        </div>
      </PhoneFrame>
    )
  }

  if (screen === 'menu') {
    return (
      <PhoneFrame>
        <div className="h-full bg-slate-950 pt-7 px-3 pb-3 flex flex-col text-[8px]">
          <div className="font-semibold text-white text-[10px]">🍕 Pizza Palace</div>
          <div className="text-secondary text-[7px] mb-2">⭐ 4.8 • 25-35 min • Free delivery</div>
          {['Margherita Pizza', 'Chicken Burger', 'Pasta Alfredo'].map((item, i) => (
            <div key={item} className="flex gap-2 items-center glass rounded-lg p-1.5 mb-1.5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${['bg-orange-500/30', 'bg-yellow-500/30', 'bg-red-500/30'][i]}`}>
                {['🍕', '🍔', '🍝'][i]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-medium truncate">{item}</div>
                <div className="text-brand-400">SAR {[89, 65, 75][i]}</div>
              </div>
              <div className="px-1.5 py-0.5 rounded bg-brand-600 text-white text-[7px]">Add</div>
            </div>
          ))}
          <div className="mt-auto py-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-center text-white font-semibold">
            View Cart (3)
          </div>
        </div>
      </PhoneFrame>
    )
  }

  if (screen === 'payment') {
    return (
      <PhoneFrame>
        <div className="h-full bg-slate-950 pt-7 px-3 pb-3 flex flex-col text-[8px]">
          <div className="font-semibold text-white text-[10px] mb-2">💳 Payment</div>
          <div className="glass rounded-xl p-2 mb-2">
            <div className="text-secondary">Order Total</div>
            <div className="text-white font-bold text-[14px]">SAR 145</div>
          </div>
          <div className="text-secondary text-[7px] mb-1">Pay with</div>
          {['💳 Mada', '📱 STC Pay', '🏦 Bank'].map((m) => (
            <div key={m} className="flex items-center gap-2 glass rounded-lg p-2 mb-1.5">
              <span>{m.split(' ')[0]}</span>
              <span className="text-white">{m.split(' ')[1]}</span>
            </div>
          ))}
          <div className="mt-auto py-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-center text-white font-semibold">
            Pay SAR 145
          </div>
        </div>
      </PhoneFrame>
    )
  }

  return (
    <PhoneFrame>
      <div className="h-full bg-slate-950 pt-7 px-3 pb-3 flex flex-col text-[8px]">
        <div className="text-white font-semibold text-[10px]">🍔 FoodExpress</div>
        <div className="mt-2 px-2 py-1.5 rounded-lg bg-white/5 text-secondary text-[7px]">
          🔍 Search restaurants or dishes...
        </div>
        <div className="mt-2 flex gap-1 overflow-hidden">
          {['🍕 Pizza', '🍔 Burger', '🍜 Asian', '🥗 Healthy'].map((c) => (
            <span key={c} className="px-1.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 whitespace-nowrap text-[7px]">{c}</span>
          ))}
        </div>
        <div className="mt-2 text-[7px] text-secondary font-medium">Popular near you</div>
        {[
          { name: 'Burger Hub', time: '20 min', emoji: '🍔' },
          { name: 'Sushi Point', time: '30 min', emoji: '🍣' },
        ].map((r) => (
          <div key={r.name} className="mt-1.5 glass rounded-lg p-2 flex gap-2 items-center">
            <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center text-base">{r.emoji}</div>
            <div className="flex-1">
              <div className="text-white font-medium">{r.name}</div>
              <div className="text-secondary">⭐ 4.7 • {r.time}</div>
            </div>
            <div className="px-2 py-1 rounded-lg bg-brand-600 text-white text-[7px] font-semibold">Order</div>
          </div>
        ))}
        <div className="mt-auto flex justify-around pt-2 border-t border-white/10 text-[9px]">
          <span className="text-brand-400">🏠</span>
          <span className="text-secondary">🔍</span>
          <span className="text-secondary">🛒</span>
          <span className="text-secondary">👤</span>
        </div>
      </div>
    </PhoneFrame>
  )
}

function EcommerceUI({ screen = 'home' }) {
  if (screen === 'product') {
    return (
      <BrowserFrame url="shop.solvexa.com/product">
        <div className="bg-slate-950 p-3 text-[8px] h-[180px]">
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="rounded-lg bg-gradient-to-br from-brand-500/30 to-accent-500/20 flex items-center justify-center text-3xl">👟</div>
            <div className="flex flex-col justify-center">
              <div className="text-white font-semibold text-[10px]">Running Shoes Pro</div>
              <div className="text-brand-400 text-sm font-bold mt-1">SAR 499</div>
              <div className="text-secondary mt-1">⭐ 4.9 (128 reviews)</div>
              <div className="mt-2 flex gap-1">
                {['S', 'M', 'L'].map((s) => (
                  <span key={s} className="w-5 h-5 rounded border border-white/20 flex items-center justify-center text-[7px]">{s}</span>
                ))}
              </div>
              <div className="mt-2 py-1.5 rounded-lg bg-brand-600 text-white text-center font-semibold">Add to Cart</div>
            </div>
          </div>
        </div>
      </BrowserFrame>
    )
  }

  if (screen === 'cart') {
    return (
      <BrowserFrame url="shop.solvexa.com/cart">
        <div className="bg-slate-950 p-3 text-[8px] h-[180px] flex flex-col">
          <div className="text-white font-semibold text-[10px] mb-2">Shopping Cart (2)</div>
          {[
            { name: 'Wireless Headphones', price: 'SAR 320', emoji: '🎧' },
            { name: 'Smart Watch', price: 'SAR 850', emoji: '⌚' },
          ].map((item) => (
            <div key={item.name} className="flex gap-2 items-center glass rounded-lg p-1.5 mb-1.5">
              <span className="text-lg">{item.emoji}</span>
              <div className="flex-1">
                <div className="text-white">{item.name}</div>
                <div className="text-brand-400">{item.price}</div>
              </div>
            </div>
          ))}
          <div className="mt-auto pt-2 border-t border-white/10 flex justify-between items-center">
            <span className="text-white font-semibold">Total: SAR 1,170</span>
            <span className="px-2 py-1 rounded-lg bg-brand-600 text-white font-semibold">Checkout</span>
          </div>
        </div>
      </BrowserFrame>
    )
  }

  if (screen === 'checkout') {
    return (
      <BrowserFrame url="shop.solvexa.com/checkout">
        <div className="bg-slate-950 p-3 text-[8px] h-[180px] flex flex-col">
          <div className="text-white font-semibold text-[10px]">Checkout</div>
          <div className="mt-2 glass rounded-lg p-2">
            <div className="text-secondary text-[7px]">Delivery Address</div>
            <div className="text-white mt-0.5">King Fahd Road, Riyadh</div>
          </div>
          <div className="mt-2 flex gap-2">
            {['💳 Card', '📱 Wallet'].map((p) => (
              <div key={p} className="flex-1 glass rounded-lg p-2 text-center text-white">{p}</div>
            ))}
          </div>
          <div className="mt-auto pt-2 flex justify-between items-center">
            <span className="text-white font-bold">SAR 1,170</span>
            <span className="px-3 py-1.5 rounded-lg bg-brand-600 text-white font-semibold">Place Order</span>
          </div>
        </div>
      </BrowserFrame>
    )
  }

  return (
    <BrowserFrame url="shop.solvexa.com">
      <div className="bg-slate-950 p-3 text-[8px] h-[180px]">
        <div className="flex justify-between items-center mb-2">
          <span className="text-brand-400 font-bold text-[10px]">ShopHub</span>
          <span className="text-secondary">🛒 Cart (3)</span>
        </div>
        <div className="h-12 rounded-lg bg-gradient-to-r from-brand-600/40 to-accent-500/30 flex items-center px-2 text-white text-[9px] font-medium">
          Summer Sale — Up to 50% Off 🎉
        </div>
        <div className="grid grid-cols-3 gap-1.5 mt-2">
          {[
            { emoji: '👟', name: 'Shoes', price: '499' },
            { emoji: '👜', name: 'Bag', price: '249' },
            { emoji: '🎧', name: 'Audio', price: '320' },
          ].map((p) => (
            <div key={p.name} className="glass rounded-lg p-1.5 text-center">
              <div className="text-lg">{p.emoji}</div>
              <div className="text-white text-[7px] mt-0.5">{p.name}</div>
              <div className="text-brand-400 text-[7px] font-semibold">SAR {p.price}</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

function CorporateUI({ screen = 'home' }) {
  if (screen === 'about') {
    return (
      <BrowserFrame url="acmecorp.com/about">
        <div className="bg-slate-950 p-3 text-[8px] h-[180px]">
          <div className="text-brand-400 font-bold text-[10px]">ACME Corp</div>
          <div className="mt-2 text-white font-semibold text-[11px]">About Our Company</div>
          <div className="mt-1 text-secondary leading-relaxed">
            Leading digital solutions provider with 15+ years of excellence serving global clients.
          </div>
          <div className="grid grid-cols-3 gap-1.5 mt-3">
            {['500+ Clients', '50+ Team', '20 Countries'].map((s) => (
              <div key={s} className="glass rounded-lg p-1.5 text-center">
                <div className="text-brand-400 font-bold text-[9px]">{s.split(' ')[0]}</div>
                <div className="text-secondary text-[6px]">{s.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>
    )
  }

  if (screen === 'contact') {
    return (
      <BrowserFrame url="acmecorp.com/contact">
        <div className="bg-slate-950 p-3 text-[8px] h-[180px]">
          <div className="text-white font-semibold text-[10px]">Contact Us</div>
          <div className="mt-2 space-y-1.5">
            <div className="h-5 rounded bg-white/5 border border-white/10" />
            <div className="h-5 rounded bg-white/5 border border-white/10" />
            <div className="h-10 rounded bg-white/5 border border-white/10" />
          </div>
          <div className="mt-2 py-1.5 rounded-lg bg-brand-600 text-white text-center font-semibold">Send Message</div>
        </div>
      </BrowserFrame>
    )
  }

  if (screen === 'services') {
    return (
      <BrowserFrame url="acmecorp.com/services">
        <div className="bg-slate-950 p-3 text-[8px] h-[180px]">
          <div className="text-brand-400 font-bold text-[10px]">Our Services</div>
          {[
            { icon: '💻', title: 'Web Development', desc: 'Custom websites' },
            { icon: '📱', title: 'Mobile Apps', desc: 'iOS & Android' },
            { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable infra' },
          ].map((s) => (
            <div key={s.title} className="flex gap-2 items-center glass rounded-lg p-2 mt-1.5">
              <span className="text-base">{s.icon}</span>
              <div>
                <div className="text-white font-medium">{s.title}</div>
                <div className="text-secondary text-[7px]">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </BrowserFrame>
    )
  }

  return (
    <BrowserFrame url="acmecorp.com">
      <div className="bg-slate-950 text-[8px] h-[180px]">
        <div className="h-16 bg-gradient-to-r from-brand-600/50 to-accent-500/30 flex flex-col items-center justify-center px-3">
          <div className="text-white font-bold text-[11px]">Build Your Future</div>
          <div className="text-secondary text-[7px] mt-0.5">Enterprise Digital Solutions</div>
          <div className="mt-1.5 px-2 py-0.5 rounded-full bg-white text-brand-600 text-[7px] font-semibold">Get Started</div>
        </div>
        <div className="p-3 grid grid-cols-3 gap-1.5">
          {['💼 Services', '📊 Analytics', '🌐 Global'].map((s) => (
            <div key={s} className="glass rounded-lg p-1.5 text-center text-secondary">{s}</div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

function FitnessUI({ screen = 'home' }) {
  if (screen === 'workout') {
    return (
      <PhoneFrame>
        <div className="h-full bg-slate-950 pt-7 px-3 pb-3 text-[8px]">
          <div className="text-white font-semibold text-[10px]">Today's Workout</div>
          <div className="mt-2 glass rounded-xl p-2">
            <div className="text-accent-400 font-semibold">HIIT Cardio</div>
            <div className="text-secondary mt-0.5">45 min • 320 cal</div>
            <div className="mt-2 flex gap-1">
              {['Warm up', 'Sprint', 'Rest', 'Cool'].map((s, i) => (
                <div key={s} className={`flex-1 h-8 rounded flex items-end justify-center pb-0.5 ${i === 1 ? 'bg-accent-500/40' : 'bg-white/10'}`}>
                  <span className="text-[6px] text-secondary">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 py-2 rounded-xl bg-gradient-to-r from-accent-500 to-brand-600 text-center text-white font-semibold">
            ▶ Start Workout
          </div>
        </div>
      </PhoneFrame>
    )
  }

  if (screen === 'stats') {
    return (
      <PhoneFrame>
        <div className="h-full bg-slate-950 pt-7 px-3 pb-3 text-[8px]">
          <div className="text-white font-semibold text-[10px]">Weekly Progress</div>
          <div className="mt-2 flex justify-around">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <div key={d + i} className="flex flex-col items-center gap-0.5">
                <div className={`w-3 rounded-sm ${[40, 60, 80, 50, 90, 70, 30][i] ? `h-${[4, 6, 8, 5, 9, 7, 3][i]}` : 'h-4'} bg-accent-500/60`} style={{ height: `${[16, 24, 32, 20, 36, 28, 12][i]}px` }} />
                <span className="text-secondary text-[6px]">{d}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <div className="glass rounded-lg p-2 text-center">
              <div className="text-accent-400 font-bold text-[11px]">12,450</div>
              <div className="text-secondary">Steps</div>
            </div>
            <div className="glass rounded-lg p-2 text-center">
              <div className="text-brand-400 font-bold text-[11px]">520</div>
              <div className="text-secondary">Calories</div>
            </div>
          </div>
        </div>
      </PhoneFrame>
    )
  }

  if (screen === 'profile') {
    return (
      <PhoneFrame>
        <div className="h-full bg-slate-950 pt-7 px-3 pb-3 text-[8px]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-12 h-12 rounded-full bg-brand-500/30 flex items-center justify-center text-xl">👤</div>
            <div>
              <div className="text-white font-semibold text-[10px]">Faisal Al-Otaibi</div>
              <div className="text-secondary">Member since 2024</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 mb-2">
            {[
              { val: '42', label: 'Workouts' },
              { val: '18K', label: 'Steps avg' },
              { val: '12', label: 'Badges' },
            ].map((s) => (
              <div key={s.label} className="glass rounded-lg p-2 text-center">
                <div className="text-brand-400 font-bold">{s.val}</div>
                <div className="text-secondary text-[6px]">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="text-secondary text-[7px] mb-1">Achievements</div>
          {['🔥 7 Day Streak', '🏆 Top Runner', '💪 100 Workouts'].map((a) => (
            <div key={a} className="glass rounded-lg p-2 mb-1 text-white">{a}</div>
          ))}
        </div>
      </PhoneFrame>
    )
  }

  return (
    <PhoneFrame>
      <div className="h-full bg-slate-950 pt-7 px-3 pb-3 flex flex-col text-[8px]">
        <div className="text-white font-semibold text-[10px]">💪 FitTrack</div>
        <div className="mt-2 glass rounded-xl p-2 text-center">
          <div className="text-secondary">Today's Goal</div>
          <div className="relative w-16 h-16 mx-auto mt-1">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="#06B6D4" strokeWidth="3" strokeDasharray="75 100" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-accent-400 font-bold text-[10px]">75%</span>
          </div>
          <div className="text-white font-medium mt-1">8,420 / 10,000 steps</div>
        </div>
        <div className="mt-2 text-[7px] text-secondary">Quick Start</div>
        <div className="grid grid-cols-2 gap-1.5 mt-1">
          {['🏃 Run', '🧘 Yoga', '🏋️ Gym', '🚴 Cycle'].map((a) => (
            <div key={a} className="glass rounded-lg p-2 text-center text-white">{a}</div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

function SaasUI({ screen = 'home' }) {
  if (screen === 'analytics') {
    return (
      <BrowserFrame url="app.datapulse.io/analytics">
        <div className="bg-slate-950 p-3 text-[8px] h-[180px]">
          <div className="text-white font-semibold text-[10px]">Revenue Analytics</div>
          <div className="mt-2 flex items-end gap-1 h-16">
            {[30, 50, 40, 70, 55, 85, 65].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-accent-500" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <div className="glass rounded p-1.5"><div className="text-brand-400 font-bold">$48.2K</div><div className="text-secondary">Revenue</div></div>
            <div className="glass rounded p-1.5"><div className="text-accent-400 font-bold">+24%</div><div className="text-secondary">Growth</div></div>
          </div>
        </div>
      </BrowserFrame>
    )
  }

  if (screen === 'team') {
    return (
      <BrowserFrame url="app.datapulse.io/team">
        <div className="bg-slate-950 p-3 text-[8px] h-[180px]">
          <div className="text-white font-semibold text-[10px]">Team Members</div>
          {['Sarah — Admin', 'Ali — Editor', 'Sara — Viewer'].map((m, i) => (
            <div key={m} className="flex items-center gap-2 mt-1.5 glass rounded-lg p-1.5">
              <div className="w-6 h-6 rounded-full bg-brand-500/30 flex items-center justify-center text-[8px]">{['👩', '👨', '👩'][i]}</div>
              <span className="text-white flex-1">{m}</span>
              <span className="text-[7px] px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300">Active</span>
            </div>
          ))}
        </div>
      </BrowserFrame>
    )
  }

  if (screen === 'reports') {
    return (
      <BrowserFrame url="app.datapulse.io/reports">
        <div className="bg-slate-950 p-3 text-[8px] h-[180px]">
          <div className="text-white font-semibold text-[10px]">Monthly Reports</div>
          {[
            { name: 'Sales Report — Jan', status: 'Ready' },
            { name: 'User Growth — Jan', status: 'Ready' },
            { name: 'Revenue Summary', status: 'Pending' },
          ].map((r) => (
            <div key={r.name} className="flex justify-between items-center glass rounded-lg p-2 mt-1.5">
              <span className="text-white text-[7px]">{r.name}</span>
              <span className={`text-[7px] px-1.5 py-0.5 rounded ${r.status === 'Ready' ? 'bg-accent-500/20 text-accent-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {r.status}
              </span>
            </div>
          ))}
          <div className="mt-2 py-1.5 rounded-lg bg-brand-600 text-white text-center font-semibold text-[8px]">
            Export PDF
          </div>
        </div>
      </BrowserFrame>
    )
  }

  return (
    <BrowserFrame url="app.datapulse.io/dashboard">
      <div className="bg-slate-950 p-3 text-[8px] h-[180px]">
        <div className="flex justify-between items-center">
          <span className="text-brand-400 font-bold text-[10px]">DataPulse</span>
          <span className="text-secondary">🔔</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 mt-2">
          {[
            { label: 'Users', val: '12.4K', color: 'text-brand-400' },
            { label: 'Revenue', val: '$48K', color: 'text-accent-400' },
            { label: 'Orders', val: '1,842', color: 'text-brand-400' },
            { label: 'Uptime', val: '99.9%', color: 'text-accent-400' },
          ].map((s) => (
            <div key={s.label} className="glass rounded-lg p-1.5">
              <div className="text-secondary text-[7px]">{s.label}</div>
              <div className={`font-bold text-[10px] ${s.color}`}>{s.val}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 h-10 rounded-lg bg-white/5 flex items-end gap-0.5 p-1">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 bg-brand-500/50 rounded-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

function HealthcareUI({ screen = 'home' }) {
  if (screen === 'appointment') {
    return (
      <PhoneFrame>
        <div className="h-full bg-slate-950 pt-7 px-3 pb-3 text-[8px]">
          <div className="text-white font-semibold text-[10px]">Book Appointment</div>
          <div className="mt-2 glass rounded-xl p-2 flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-brand-500/30 flex items-center justify-center text-base">👨‍⚕️</div>
            <div>
              <div className="text-white font-medium">Dr. Faisal Al-Rashid</div>
              <div className="text-secondary">Cardiologist • ⭐ 4.9</div>
            </div>
          </div>
          <div className="mt-2 text-secondary text-[7px]">Available Slots — Today</div>
          <div className="grid grid-cols-3 gap-1 mt-1">
            {['10:00 AM', '2:30 PM', '4:00 PM'].map((t) => (
              <div key={t} className="py-1 rounded-lg bg-brand-500/20 text-brand-300 text-center text-[7px]">{t}</div>
            ))}
          </div>
          <div className="mt-3 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 text-center text-white font-semibold">
            Confirm Booking
          </div>
        </div>
      </PhoneFrame>
    )
  }

  if (screen === 'consult') {
    return (
      <PhoneFrame>
        <div className="h-full bg-slate-950 pt-7 px-3 pb-3 text-[8px] flex flex-col">
          <div className="text-white font-semibold text-[10px]">Video Consultation</div>
          <div className="flex-1 mt-2 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center relative">
            <div className="text-3xl">👨‍⚕️</div>
            <div className="absolute bottom-2 right-2 w-10 h-14 rounded-lg bg-slate-800 border border-white/20 flex items-center justify-center text-lg">🧑</div>
          </div>
          <div className="mt-2 flex justify-center gap-3 text-base">
            <span className="w-8 h-8 rounded-full bg-red-500/80 flex items-center justify-center">📞</span>
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">🎤</span>
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">📷</span>
          </div>
        </div>
      </PhoneFrame>
    )
  }

  if (screen === 'records') {
    return (
      <PhoneFrame>
        <div className="h-full bg-slate-950 pt-7 px-3 pb-3 text-[8px]">
          <div className="text-white font-semibold text-[10px]">📋 Medical Records</div>
          {[
            { title: 'Blood Test Report', date: 'Jan 15, 2025', icon: '🩸' },
            { title: 'X-Ray Chest', date: 'Dec 8, 2024', icon: '📷' },
            { title: 'Prescription', date: 'Nov 22, 2024', icon: '💊' },
          ].map((r) => (
            <div key={r.title} className="flex gap-2 items-center glass rounded-lg p-2 mt-1.5">
              <span className="text-base">{r.icon}</span>
              <div className="flex-1">
                <div className="text-white font-medium">{r.title}</div>
                <div className="text-secondary text-[7px]">{r.date}</div>
              </div>
              <span className="text-brand-400 text-[7px]">View</span>
            </div>
          ))}
        </div>
      </PhoneFrame>
    )
  }

  return (
    <PhoneFrame>
      <div className="h-full bg-slate-950 pt-7 px-3 pb-3 flex flex-col text-[8px]">
        <div className="text-white font-semibold text-[10px]">🏥 MediCare+</div>
        <div className="mt-2 px-2 py-1.5 rounded-lg bg-white/5 text-secondary text-[7px]">
          🔍 Search doctors, clinics...
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {[
            { label: 'Book Appt', icon: '📅' },
            { label: 'Video Call', icon: '📹' },
            { label: 'Records', icon: '📋' },
            { label: 'Pharmacy', icon: '💊' },
          ].map((s) => (
            <div key={s.label} className="glass rounded-lg p-2 text-center">
              <div className="text-base">{s.icon}</div>
              <div className="text-white text-[7px] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 glass rounded-lg p-2">
          <div className="text-secondary text-[7px]">Upcoming</div>
          <div className="text-white font-medium mt-0.5">Dr. Noura — Tomorrow 3PM</div>
        </div>
      </div>
    </PhoneFrame>
  )
}

const mockupMap = {
  ecommerce: EcommerceUI,
  food: FoodDeliveryUI,
  corporate: CorporateUI,
  fitness: FitnessUI,
  saas: SaasUI,
  healthcare: HealthcareUI,
}

export default function ProjectMockup({ id, screen = 'home', compact = false, thumb = false }) {
  const Component = mockupMap[id]
  if (!Component) return null

  if (thumb) {
    return (
      <div className="w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-950/50 to-background">
        <div className="scale-[0.42] sm:scale-[0.48] origin-center pointer-events-none">
          <Component screen={screen} />
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center w-full h-full bg-gradient-to-br from-brand-950/50 via-background to-accent-500/5 ${compact ? 'py-4' : 'py-6 sm:py-8'}`}>
      <Component screen={screen} />
    </div>
  )
}

export function MockupThumbnail({ id, screen, label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 min-w-0 group/thumb text-left transition-all ${
        active ? 'ring-2 ring-brand-500 ring-offset-2 ring-offset-background rounded-lg' : ''
      }`}
    >
      <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-background hover:border-brand-500/40 transition-colors">
        <ProjectMockup id={id} screen={screen} thumb />
      </div>
      <span className={`block mt-1 text-[9px] sm:text-[10px] text-center truncate ${active ? 'text-brand-400 font-medium' : 'text-secondary'}`}>
        {label}
      </span>
    </button>
  )
}

export { mockupMap }
