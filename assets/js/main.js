---
---
jsonLoaded = false
const search = new Sws('{{site.url}}{{site.baseurl}}/search.json')

document.addEventListener('DOMContentLoaded', function() {
    setupMenu()

    // Insert a <br> before content h1 if missing (exclude page title and welcome hero)
    const main = document.querySelector('main')
    if (main) {
        const contentH1s = main.querySelectorAll('h1:not(.page-title)')
        contentH1s.forEach(h1 => {
            if (h1.closest('.welcome')) return
            const previousElement = h1.previousElementSibling
            if (!(previousElement && previousElement.tagName === 'BR')) {
                const br = document.createElement('br')
                h1.parentNode.insertBefore(br, h1)
            }
        })
    }
})

window.addEventListener('scroll', () => {
    const welcomeBounce = document.querySelector('.welcome>.bounce')
    
    if (window.scrollY < document.body.offsetHeight / 3) {
        if (welcomeBounce) {
            welcomeBounce.style.display = 'block'
            welcomeBounce.style.opacity = '1'
        }
    } else {
        if (welcomeBounce) {
            welcomeBounce.style.opacity = '0'
            setTimeout(() => {
                welcomeBounce.style.display = 'none'
            }, 500)
        }
    }

})

document.getElementById('gotoDoc')?.addEventListener('click', (e) => {
    e.preventDefault()
    const menu = document.getElementById('menu')
    if (menu) {
        menu.scrollIntoView({ behavior: 'smooth' })
    }
})

const downloadButtons = {
    'download-tableau-full-extension': downloadFullTrex,
    'download-tableau-dashboard-light-extension': downloadLightDashboardTrex,
    'download-tableau-viz-light-extension-compare': (e) => downloadLightVizTrex(e, 'compare'),
    'download-tableau-viz-light-extension-detect': (e) => downloadLightVizTrex(e, 'detect'),
    'download-tableau-viz-light-extension-assess': (e) => downloadLightVizTrex(e, 'assess')
}

Object.entries(downloadButtons).forEach(([id, handler]) => {
    const button = document.getElementById(id)
    if (button) {
        button.addEventListener('click', handler)
    }
})

function downloadFullTrex(e) {
    console.log("Download Full Extension trex file")
    e.preventDefault();
    fetch("https://app.datama.io/tableau/datama.trex")
        .then((res) => res.text())
        .then((text) => {
            let element = document.createElement('a');
            element.setAttribute('href',
                'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', "Datama_Tableau_Web_App.trex");
            document.body.appendChild(element);
            element.click();

            document.body.removeChild(element);
        })
        .catch((e) => console.error(e));
}

function downloadLightDashboardTrex(e) {
    console.log("Download Light Extension trex file for Tableau dashboard")
    e.preventDefault();
    fetch("https://app.datama.io/tableau/light/trex/light_tableau_base_Datama_Tableau_Extension.trex")
        .then((res) => res.text())
        .then((text) => {
            let element = document.createElement('a');
            element.setAttribute('href',
                'data:text/plain;charset=utf-8,' + encodeURIComponent(text.replace("£USER_HASH£", 'none')));
            element.setAttribute('download', "Datama_Tableau_Dashboard_Extension.trex");
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        })
        .catch((e) => console.error(e));
}

function downloadLightVizTrex(e, solution='compare') {
    console.log("Download Light Extension trex file for Tableau viz "+solution)
    e.preventDefault();
    fetch("https://app.datama.io/tableauViz/light_tableau_base_Datama_Tableau_viz_Extension.trex")
        .then((res) => res.text())
        .then((text) => {
            let element = document.createElement('a');
            element.setAttribute('href',
                'data:text/plain;charset=utf-8,' + encodeURIComponent(text.replace("£USER_HASH£", 'none').replace("£ORIGIN£", 'https://app.datama.io').replace("£SOLUTION£", solution)));
            element.setAttribute('download', "Datama_Tableau_Viz_"+solution+"_Extension.trex");
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        })
        .catch((e) => console.error(e));
}
/**
 * Sidebar menu: open the current page's branch, expand/collapse sections,
 * keep the current page visible, and the mobile drawer.
 */
function setupMenu() {
    const menu = document.getElementById('menu')
    if (!menu) return
    const nav = menu.querySelector('nav')
    const MOBILE = window.matchMedia('(max-width: 767px)')
    localStorage.removeItem('menuScrollPosition') // replaced by sessionStorage below

    const setOpen = (item, open) => {
        item.classList.toggle('is-open', open)
        const collapser = item.querySelector(':scope > .nav-row > .collapser')
        if (collapser) collapser.setAttribute('aria-expanded', open ? 'true' : 'false')
    }

    // Initial state without animation
    menu.classList.add('menu-no-anim')

    // Current page: highlight it, open its own section and every parent
    const current = [...nav.querySelectorAll('a.nav-link')].find(a => {
        const url = new URL(a.href, location.href)
        return url.pathname === location.pathname && !url.hash
    })
    if (current) {
        current.classList.add('active')
        current.setAttribute('aria-current', 'page')
        const item = current.closest('.nav-item')
        if (item.classList.contains('has-children')) setOpen(item, true)
        let parent = item.parentElement.closest('.nav-item')
        while (parent) {
            parent.classList.add('is-ancestor')
            setOpen(parent, true)
            parent = parent.parentElement.closest('.nav-item')
        }
    }

    // Expand / collapse: the chevron, or the label of an entry without a page
    nav.querySelectorAll('.collapser, button.nav-group').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.nav-item')
            setOpen(item, !item.classList.contains('is-open'))
        })
    })

    menu.querySelector('[data-menu-collapse-all]')?.addEventListener('click', () => {
        nav.querySelectorAll('.nav-item.is-open').forEach(item => setOpen(item, false))
        menu.scrollTop = 0
    })

    // Keep the menu where it was after a click in it; otherwise bring the
    // current page into view.
    nav.addEventListener('click', e => {
        if (e.target.closest('a.nav-link')) sessionStorage.setItem('menuScroll', menu.scrollTop)
    })
    const saved = sessionStorage.getItem('menuScroll')
    sessionStorage.removeItem('menuScroll')
    if (saved !== null) menu.scrollTop = parseInt(saved, 10)
    if (current) {
        const top = menu.querySelector('.menu-top')
        const visibleTop = menu.getBoundingClientRect().top + (top ? top.offsetHeight : 0)
        const box = current.getBoundingClientRect()
        if (box.top < visibleTop || box.bottom > menu.getBoundingClientRect().bottom) {
            menu.scrollTop += box.top - visibleTop - (menu.clientHeight - (top ? top.offsetHeight : 0)) / 2 + box.height / 2
        }
    }

    requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.remove('menu-no-anim')))

    // Small screens: the menu is a drawer opened from the header
    const openers = document.querySelectorAll('[data-menu-open]')
    const setDrawer = open => {
        document.body.classList.toggle('menu-open', open)
        openers.forEach(b => b.setAttribute('aria-expanded', open ? 'true' : 'false'))
        if (open) (menu.querySelector('.search-bar') || current || menu).focus?.({ preventScroll: true })
    }
    openers.forEach(b => b.addEventListener('click', () => setDrawer(true)))
    document.querySelectorAll('[data-menu-close]').forEach(b => b.addEventListener('click', () => setDrawer(false)))
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.body.classList.contains('menu-open')) setDrawer(false)
    })
    nav.addEventListener('click', e => {
        if (MOBILE.matches && e.target.closest('a.nav-link')) setDrawer(false)
    })
    MOBILE.addEventListener?.('change', e => { if (!e.matches) setDrawer(false) })
}
