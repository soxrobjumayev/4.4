var containerEl = document.createElement('div')
containerEl.className = "container"
document.body.appendChild(containerEl)


function createRowEl(){
 let RowEl = document.createElement('div')
 RowEl.className = 'row g-3 mt-2 mb-2'
// containerEl.appendChild(moviesRow)
return RowEl
}

var selectRow = createRowEl()
containerEl.appendChild(selectRow)

var col1El = document.createElement('div')
col1El.className = 'col-3'
selectRow.appendChild(col1El)




let uniqueGenres = normalizeGenres(movies)
let genresSelect = createSelectEl(uniqueGenres)

genresSelect.addEventListener('change',(event) => {
    console.log(event.target.value)
   let foundedMovies = movies.filter(movie => movie.genres == event.target.value)
   renderMovies(foundedMovies,moviesRow)
})
col1El.appendChild(genresSelect )



var sortButtonEl = document.createElement('div')
containerEl.appendChild(sortButtonEl)

function createButton(child,onClick = () => {}){
    let btn = document.createElement('button')
    btn.textContent = child
    btn.addEventListener('click',onClick)
    return btn
}
let sortByIsCompletedBtn = createButton(" yil boyicha ",() =>{
    movies=movies.sort((a,b) => {
        return a.year-b.year
    })

    renderMovies(movies,moviesRow)
   
})
sortButtonEl.appendChild(sortByIsCompletedBtn)

// const sorted = movies.sort((a,b) => {
//     return a.year - b.year

// })
// console.log(sorted)


function createSelectEl (arr){
    let selectEl = document.createElement('select')

    let optionEl = document.createElement('option')
        optionEl.textContent = "___genres___"
        optionEl.selected = true
        optionEl.disabled = true
        selectEl.appendChild(optionEl)


    arr.forEach(genres =>{
        let optionEl = document.createElement('option')
        optionEl.value = genres
        optionEl.textContent = genres
        selectEl.appendChild(optionEl)
    })

    return selectEl
}


var moviesRow = createRowEl()
containerEl.appendChild(moviesRow)
renderMovies(movies,moviesRow)



function renderMovies(movies,parentElement){
    parentElement.innerHTML = null
    movies.forEach(movie => {
        let moviesEl = createsSingleMovie(movie)
        parentElement.appendChild(moviesEl)

        
    });

}


function createsSingleMovie(movie){
    let colEL = document.createElement('div')
    colEL.className = 'col-4 col-md-2 col-lg-4'

    let movieEl = document.createElement('div')
    movieEl.textContent = movie.genres
    movieEl.className = 'p-1 border'

    let titleEl = document.createElement('div')
    titleEl.textContent =movie.title
    movieEl.appendChild(titleEl)

    let yearEL = document.createElement('div')
    yearEL.textContent =movie.year
    movieEl.appendChild(yearEL)

    colEL.appendChild(movieEl)
    return colEL
}









