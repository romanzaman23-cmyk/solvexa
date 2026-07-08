const MIN_DURATION = 180
const MAX_DURATION = 320
const MS_PER_PX = 0.12
const HEADER_OFFSET = 92

function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t)
}

function getScrollDuration(distance) {
  return Math.min(MAX_DURATION, Math.max(MIN_DURATION, Math.abs(distance) * MS_PER_PX))
}

export function scrollToSection(sectionId, options = {}) {
  const duration = options.duration ?? null
  const headerOffset = options.headerOffset ?? HEADER_OFFSET

  let targetY = 0
  if (sectionId && sectionId !== 'home') {
    const el = document.getElementById(sectionId)
    if (!el) return
    targetY = Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerOffset)
  }

  const startY = window.scrollY
  const diff = targetY - startY
  if (Math.abs(diff) < 2) return

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const scrollDuration = duration ?? getScrollDuration(diff)

  if (scrollDuration <= 0 || prefersReduced) {
    window.scrollTo({ top: targetY, left: 0, behavior: 'auto' })
    return
  }

  const start = performance.now()

  function step(now) {
    const progress = Math.min((now - start) / scrollDuration, 1)
    window.scrollTo(0, startY + diff * easeOutQuad(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function handleNavClick(e, sectionId) {
  e.preventDefault()
  scrollToSection(sectionId)
}

export function closeModalAndScrollTo(e, sectionId, closeModal) {
  e.preventDefault()
  closeModal()
  setTimeout(() => scrollToSection(sectionId), 50)
}

export function openServiceFromNav(slug) {
  scrollToSection('services')
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('open-service', { detail: { slug } }))
  }, 200)
}
