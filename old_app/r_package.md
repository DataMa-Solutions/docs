# DataMa on Premise

> DataMa is essentially a [R](https://www.r-project.org/) package, embedded in a [Shiny](https://shiny.rstudio.com/) web application.

The straightest way of using DataMa certainly to use the solution in a [Shiny Web App](general/general.md), either hosted on our servers ([solutions.datama.fr](https://solutions.datama.fr/)) or on premise.
Note that deployment on premise is simplified by the use of [Docker](https://www.docker.com/), and [ShinyProxy](https://www.shinyproxy.io/).

However, you could also use DataMa R package as a brick within a data flow that performs the task on the defined inputs and renders a flat file or a HTML object that can be consumed by other applications, in particular visualisation software, such as [Tableau](https://www.tableau.com/). In that sense, DataMa works well as a step of data science platforms like [DataIku](https://www.dataiku.com/) or [Alteryx](https://www.alteryx.com/).
