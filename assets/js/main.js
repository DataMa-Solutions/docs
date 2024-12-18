---
---
jsonLoaded = false
const search = new Sws('{{site.url}}/{{site.baseurl}}/search.json')

let expanded = [];


document.addEventListener('DOMContentLoaded', function() {
    const sidebarMenu = document.querySelector('#menu')
    // Restaure la position de défilement si elle a été sauvegardée
    const savedScrollPosition = localStorage.getItem('menuScrollPosition')
    if (savedScrollPosition && sidebarMenu) {
        sidebarMenu.scrollTop = savedScrollPosition
    }
    // Sauvegarde la position de défilement lors d'un clic
    sidebarMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            localStorage.setItem('menuScrollPosition', sidebarMenu.scrollTop)
        }
    })
})


if (Cookies.get('menu') != null) {
    expanded = Cookies.get('menu').split(',')
    let i = 0;
    while (i < expanded.length) {
        $('aside a[href="' + expanded[i] + '"] .collapser').addClass('active')
        $('aside a[href="' + expanded[i] + '"] + ul').addClass('open')
        i++;
    }
} else {
    expanded = []
    Cookies.set('menu', '')
}
$('a[href$="' + location.pathname + '"').addClass('active');
if (window.innerWidth < 700) {
 $('body').addClass('menu-close')
}
/**
 * Aside open/close
 */
$('#burger').on('click', (e) => {
    e.preventDefault();
    $('body').toggleClass('menu-close')
})
$('aside>nav li>a').on('click', e => {
    if ($(e.target).find('.collapser').length) {
        $(e.target).find('.collapser').click()
    }
})
$('aside>nav .collapser').on('click', (e) => {
    $(e.target).toggleClass('active');
    $(e.target).parent().next().toggleClass('open');
    e.preventDefault();
    if (expanded.indexOf($(e.target).parent().attr('href')) === -1) {
        expanded.push($(e.target).parent().attr('href'))
    } else {
        expanded.splice(expanded.indexOf($(e.target).parent().attr('href')), 1)
    }
    Cookies.set('menu', expanded.join(','))
})
$(window).on('scroll', (e) => {
    if ($(window).scrollTop() < $('body')[0].offsetHeight / 3) {
        $('.welcome>.bounce').fadeIn(500)
    } else {
        $('.welcome>.bounce').fadeOut(500)
    }
    if ($(window).scrollTop() > $('body>aside').offset().top && !$('body>aside').hasClass('fixed')) {
        $('body>aside').attr('data-offset', $('body>aside').offset().top).addClass('fixed')
    } else {
        if ($(window).scrollTop() < $('body>aside').offset().top || ($('body>aside').attr('data-offset') != undefined && $(window).scrollTop() < $('body>aside').attr('data-offset'))) {
            $('body>aside').removeClass('fixed')
        }
    }
})
$('body').on('click', '#gotoDoc', (e) => {
    e.preventDefault();
    $('html, body').animate( { scrollTop: $('#menu').offset().top }, 750 );
})
$('body').off('click', '#download-tableau-full-extension', downloadFullTrex).on('click', '#download-tableau-full-extension', downloadFullTrex)
$('body').off('click', '#download-tableau-dashboard-light-extension', downloadLightDashboardTrex).on('click', '#download-tableau-dashboard-light-extension', downloadLightDashboardTrex)
$('body').off('click', '#download-tableau-viz-light-extension-compare', (e) => downloadLightVizTrex(e, 'compare')).on('click', '#download-tableau-viz-light-extension-compare', (e) => downloadLightVizTrex(e, 'compare'))
$('body').off('click', '#download-tableau-viz-light-extension-detect', (e) => downloadLightVizTrex(e, 'detect')).on('click', '#download-tableau-viz-light-extension-detect', (e) => downloadLightVizTrex(e, 'detect'))
$('body').off('click', '#download-tableau-viz-light-extension-assess', (e) => downloadLightVizTrex(e, 'assess')).on('click', '#download-tableau-viz-light-extension-assess', (e) => downloadLightVizTrex(e, 'assess'))

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