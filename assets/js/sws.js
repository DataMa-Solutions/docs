/**
 * Simple Weighted Search
 * (c) 2021 - by Anatole Piveteau
 */
SwsDebug = false;

class Sws {
    constructor(jsonUrl) {
        this.configuration = {};
        fetch(jsonUrl)
            .then(response => response.json())
            .then(data => {
                if (SwsDebug) {
                    console.log("SWS > Get data\n")
                    console.log(data)
                }
                jsonLoaded = true
                this.json = data;
            })
            .catch(error => {
                if (SwsDebug) {
                    console.error("SWS > Fail to get data\n\t->\t" + jsonUrl)
                }
            });
    }
    listen(input, configuration) {
        let element = document.getElementById(input);
        element.removeEventListener('input', (e) => this.suggest(e))
        element.addEventListener('input', (e) => this.suggest(e))
        if (SwsDebug) {
            console.log("SWS > Listen '" + input + "'")
        }
        this.configuration[input] = configuration
    }
    getWeights(value, configuration) {
        let i = 0;
        const weights = [];
        while (i < this.json.length) {
            let fieldsToParse = Reflect.ownKeys(configuration.fields)
            let j = 0;
            let weight = {};
            let total = 0;
            while (j < fieldsToParse.length) {
                let occurrences = (this.json[i][fieldsToParse[j]].match(new RegExp(value)) || []).length;
                let occurrencesLow = (this.json[i][fieldsToParse[j]].toLowerCase().match(new RegExp(value.toLowerCase())) || []).length;
                let split = value.split(' ');
                weight[fieldsToParse[j]] = occurrences * configuration.fields[fieldsToParse[j]].weight
                weight[fieldsToParse[j]] += occurrencesLow * (configuration.fields[fieldsToParse[j]].weight / 2)
                let k = 0;
                while (k < split.length) {
                    if (split[k].length > 3) {
                        let occurrencesSplit = (this.json[i][fieldsToParse[j]].match(new RegExp(split[k])) || []).length;
                        let occurrencesSplitLow = (this.json[i][fieldsToParse[j]].toLowerCase().match(new RegExp(split[k].toLowerCase())) || []).length;
                        weight[fieldsToParse[j]] += occurrencesSplit * (configuration.fields[fieldsToParse[j]].weight / 4)
                        weight[fieldsToParse[j]] += occurrencesSplitLow * (configuration.fields[fieldsToParse[j]].weight / 8)
                    }
                    k++;
                }
                total += weight[fieldsToParse[j]];
                j++;
            }
            weight.id = i;
            weight.total = total;
            weights.push(weight)
            i++;
        }
        return weights.sort((a,b) => (a.total > b.total) ? -1 : ((b.total > a.total) ? 1 : 0));
    }
    suggest(event) {
        if (event.target.id in this.configuration) {
            let value = event.target.value;
            let configuration = this.configuration[event.target.id]
            if (value.length > 3) {
                let weights = this.getWeights(value, configuration).filter(e => e.total !== 0);
                let displayed = "<ul>";
                let invisible = "<div class='search-pages'>"
                if (SwsDebug) {
                    console.log("SWS > Input on " + event.target.id + " '" + value + "'")
                    console.log(configuration)
                    console.log(weights)
                }
                let i = 0;
                while (i < configuration.results.limit && i < weights.length) {
                    displayed += configuration.results.template(weights[i])
                    i++;
                }
                displayed += "</ul>"
                if (i < weights.length) {
                    displayed += "<button class='search-show-more'>Show more results</button>"
                }
                while (i < weights.length) {
                    invisible += configuration.results.template(weights[i])
                    i++;
                }
                invisible += "</div>"
                let container = document.getElementById(configuration.results.container);
                container.innerHTML = displayed + invisible
                let showMore = document.getElementsByClassName('search-show-more');
                if (showMore != null) {
                    i = 0;
                    while (i < showMore.length) {
                        showMore[i].removeEventListener('click', e => searchShowMore(e, configuration))
                        showMore[i].addEventListener('click', e => searchShowMore(e, configuration))
                        i++;
                    }
                }
            } else {
                let container = document.getElementById(configuration.results.container);
                container.innerHTML = ""
            }
        } else {
            if (SwsDebug) {
                console.error("SWS > Unknown configuration for " + event.target.id)
            }
        }
    }
}

function searchShowMore(e, configuration) {
    e.preventDefault()
    let i = 0;
    while (i < configuration.results.limit) {
        $(e.target).prev().append($(e.target).next().find(">:first-child"))
        i++;
    }
    if ($(e.target).next().find(">:first-child").length === 0) {
        $(e.target).hide()
    }
}