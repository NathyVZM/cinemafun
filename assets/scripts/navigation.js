import movies from '../../movies.json' assert { type: 'json' }
import { renderStars, renderClasification } from './miscellaneous.js'

export const toggleNavbar = () => {
    const navbar = document.querySelector('#header > aside')
    navbar.classList.toggle('show-navbar');
}

export const goToHome = () => {
    const navbar = document.querySelector('#header > aside')
    navbar.classList.remove('show-navbar');

    const slides = movies.toSorted(() => Math.random() - 0.5).slice(0, 3)
    const previews = movies.toSorted(() => Math.random() - 0.5).slice(0, 5)

    const main = document.querySelector('#main')
    main.removeAttribute('page')
    main.innerHTML = `
        <section>
            <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    ${slides.map((movie, index) => {
                        return `
                        <div class="carousel-item${index === 0 ? ' active' : ''}">
                            <img src="${movie.banner}"
                                class="d-block w-100" alt="...">
                            <div class="carousel-caption">
                                <img src="${movie.cover}" alt="${movie.title}">
                                <div>
                                    <h2>${movie.title}</h2>
                                    <h3>${movie.originalTitle || ''}</h3>
                                    <button class="button" onclick="openMovieTrailer('${movie.trailer}')">
                                        Mira el trailer
                                        <i class="ph-duotone ph-play-circle"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        `
                    }).join('')}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
        </section>

        <section>
            ${previews.map(movie => {
                return `
                    <figure class="movie" onclick="renderMovieDetails(${movie.id})">
                        <img src="${movie.cover}" alt="${movie.title}">
                        <section>
                            <p>${movie.title}</p>
                            <p class="subtitle">${movie.genre.join('/')}</p>
                            <p class="subtitle">Clasificación: <span class="${renderClasification(movie.clasification)}">${movie.clasification}</span></p>
                            <!-- <div class="rating">${renderStars(movie.rating)}</div> -->
                        </section>
                    </figure>
                `
            }).join('')}
        </section>
    `

    if (window.location.hash) history.replaceState(null, null, window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth'})
}

export const goToMovies = () => {
    const navbar = document.querySelector('#header > aside')
    navbar.classList.remove('show-navbar');
    
    const main = document.querySelector('#main')
    main.removeAttribute('page')
    main.innerHTML = `
        <section class="main-header">
            <i class="ph-duotone ph-film-reel"></i>
            <h2>Películas</h2>
        </section>
        <section>
            ${movies.map(movie => {
                return `
                    <figure class="movie" onclick="renderMovieDetails(${movie.id})">
                        <img src="${movie.cover}" alt="${movie.title}">
                        <section>
                            <p>${movie.title}</p>
                            <p class="subtitle">${movie.genre.join('/')}</p>
                            <p class="subtitle">Clasificación: <span class="${renderClasification(movie.clasification)}">${movie.clasification}</span></p>
                            <!-- <div class="rating">${renderStars(movie.rating)}</div> -->
                        </section>
                    </figure>
                `
            }).join('')}
        </section>
    `

    if (window.location.hash) history.replaceState(null, null, window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth'})
}

export const searchMovies = () => {
    const navbar = document.querySelector('#header > aside')
    navbar.classList.remove('show-navbar');

    const search = document.querySelector('#header #search').value

    const regex = new RegExp(search, 'i')
    const filteredMovies = movies.filter(movie => regex.test(movie.title) || regex.test(movie.genre) || regex.test(movie.originalTitle))

    const main = document.querySelector('#main')
    main.removeAttribute('page')
    main.innerHTML = `
        <section class="main-header">
            <i class="ph-duotone ph-film-reel"></i>
            <h2>Buscar Películas</h2>
        </section>
        <section>
            ${filteredMovies.map(movie => {
                return `
                    <figure class="movie" onclick="renderMovieDetails(${movie.id})">
                        <img src="${movie.cover}" alt="${movie.title}">
                        <section>
                            <p>${movie.title}</p>
                            <p class="subtitle">${movie.genre.join('/')}</p>
                            <p class="subtitle">Clasificación: <span class="${renderClasification(movie.clasification)}">${movie.clasification}</span></p>
                            <!-- <div class="rating">${renderStars(movie.rating)}</div> -->
                        </section>
                    </figure>
                `
            }).join('')}
        </section>
    `

    if (window.location.hash) history.replaceState(null, null, window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth'})
}