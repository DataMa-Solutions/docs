---
---
jsonLoaded = false
const search = new Sws('{{site.url}}/{{site.baseurl}}/search.json')

let expanded = [];


document.addEventListener('DOMContentLoaded', function() {
    const sidebarMenu = document.querySelector('#menu')
    // Restore scroll position if saved
    const savedScrollPosition = localStorage.getItem('menuScrollPosition')
    if (savedScrollPosition && sidebarMenu) {
        sidebarMenu.scrollTop = savedScrollPosition
    }
    
    // Save scroll position on click
    sidebarMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            localStorage.setItem('menuScrollPosition', sidebarMenu.scrollTop)
        }
    })

    // Reset expanded array
    expanded = []

    // Set active state for current page and open only its parent menus
    const currentPath = location.pathname
    const currentLink = document.querySelector(`a[href$="${currentPath}"]`)
    if (currentLink) {
        currentLink.classList.add('active')
        // Open parent menus
        let parent = currentLink.parentElement
        while (parent) {
            if (parent.tagName === 'UL') {
                parent.classList.add('open')
                const parentLink = parent.previousElementSibling
                if (parentLink && parentLink.tagName === 'A') {
                    const collapser = parentLink.querySelector('.collapser')
                    if (collapser) {
                        collapser.classList.add('active')
                        const path = parentLink.getAttribute('href')
                        if (path && !expanded.includes(path)) {
                            expanded.push(path)
                        }
                    }
                }
            }
            parent = parent.parentElement
        }
        // Save only the current page's open sections
        Cookies.set('menu', expanded.join(','))
    }

    if (window.innerWidth < 700) {
        document.body.classList.add('menu-close')
    }

    /**
     * Aside open/close
     */
    document.getElementById('burger').addEventListener('click', (e) => {
        e.preventDefault()
        document.body.classList.toggle('menu-close')
    })

    document.querySelectorAll('aside>nav li>a').forEach(link => {
        link.addEventListener('click', e => {
            const collapser = e.target.querySelector('.collapser')
            if (collapser) {
                collapser.click()
            }
        })
    })

    document.querySelectorAll('aside>nav .collapser').forEach(collapser => {
        collapser.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            
            const link = e.target.parentElement
            const subMenu = link.nextElementSibling
            
            e.target.classList.toggle('active')
            if (subMenu) subMenu.classList.toggle('open')
            
            const path = link.getAttribute('href')
            const index = expanded.indexOf(path)
            
            if (index === -1) {
                expanded.push(path)
            } else {
                expanded.splice(index, 1)
            }
            
            Cookies.set('menu', expanded.join(','))
        })
    })

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
    const aside = document.querySelector('body>aside')
    
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

    if (aside) {
        if (window.scrollY > aside.offsetTop && !aside.classList.contains('fixed')) {
            aside.dataset.offset = aside.offsetTop
            aside.classList.add('fixed')
        } else if (window.scrollY < aside.offsetTop || 
                  (aside.dataset.offset && window.scrollY < parseInt(aside.dataset.offset))) {
            aside.classList.remove('fixed')
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