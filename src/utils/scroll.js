const DEFAULT_DURATION = 420
const HEADER_OFFSET = 92

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3
}

export function scrollToSection(sectionId, options = {}) {
  const duration = options.duration ?? DEFAULT_DURATION
  const headerOffset = options.headerOffset ?? HEADER_OFFSET

  let targetY = 0
  if (sectionId && sectionId !== 'home') {
    const el = document.getElementById(sectionId)
    if (!el) return
    targetY = Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerOffset)
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (duration <= 0 || prefersReduced) {
    window.scrollTo({ top: targetY, left: 0, behavior: 'auto' })
    return
  }

  const startY = window.scrollY
  const diff = targetY - startY
  if (Math.abs(diff) < 2) return

  const start = performance.now()

  function step(now) {
    const progress = Math.min((now - start) / duration, 1)
    window.scrollTo(0, startY + diff * easeOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function handleNavClick(e, sectionId) {
  e.preventDefault()
  scrollToSection(sectionId)
}

export function openServiceFromNav(slug) {
  scrollToSection('services')
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('open-service', { detail: { slug } }))
  }, 280)
}
