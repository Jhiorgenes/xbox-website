const faqs = document.querySelectorAll('.accordeon-faq')
const openAccords = document.querySelector('#openAccordeon')

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active')
  })
})

const sr = ScrollReveal({
  origin: 'bottom',
  duration: 1000,
  reset: true,
  distance: '70px',
})

sr.reveal('#s-content', { delay: 200 })
sr.reveal('#s-xbox', { delay: 300 })
