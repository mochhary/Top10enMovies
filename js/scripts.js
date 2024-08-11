// Menambahkan data film ke dalam movie.html
const movies = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        synopsis: "Dua pria dipenjara di Shawshank untuk kejahatan yang tidak mereka lakukan. Mereka membentuk pertemanan dan belajar bagaimana bertahan di penjara.",
        rating: 9.3,
        poster: "https://i.ebayimg.com/images/g/McUAAOSw~e5ZW~ee/s-l1600.jpg"
    },
    {
        title: "The Godfather",
        year: 1972,
        synopsis: "Sebuah keluarga mafia Italia-Amerika yang berkuasa menghadapi tantangan dari luar dan dari dalam saat mereka berjuang untuk mempertahankan kekuasaan mereka.",
        rating: 9.2,
        poster: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/08/IMG_4675-scaled.jpeg"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        synopsis: "Batman berusaha menghentikan Joker yang mengganggu Gotham City, tetapi ia harus menghadapi konsekuensi dari pilihannya.",
        rating: 9.0,
        poster: "https://artofthemovies.co.uk/cdn/shop/files/IMG_0402_8a4ee439-15c9-4b0d-b68f-237e984e5e59_1024x1024@2x.jpg?v=1706799949"
    },
    {
        title: "12 Angry Men",
        year: 1957,
        synopsis: "Dua belas juri terjebak dalam ruang juri dan harus memutuskan nasib seorang pemuda yang dituduh membunuh ayahnya.",
        rating: 8.9,
        poster: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg"
    },
    {
        title: "Schindler's List",
        year: 1993,
        synopsis: "Kisah nyata Oskar Schindler, seorang pengusaha Jerman yang menyelamatkan lebih dari seribu orang Yahudi selama Holocaust.",
        rating: 8.9,
        poster: "https://m.media-amazon.com/images/I/71Sm+KAHW1L._AC_UF894,1000_QL80_.jpg"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
        synopsis: "Frodo dan Sam melanjutkan perjalanan mereka untuk menghancurkan Cincin Sauron, sementara para pahlawan lain bersatu untuk mengalahkan Sauron.",
        rating: 8.9,
        poster: "https://cdn.europosters.eu/image/1300/posters/the-lord-of-the-rings-the-return-of-the-king-i104633.jpg"
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        synopsis: "Beberapa kisah yang saling terkait di dunia bawah tanah Los Angeles yang penuh dengan kejahatan dan kekacauan.",
        rating: 8.9,
        poster: "https://m.media-amazon.com/images/I/718LfFW+tIL._AC_UF894,1000_QL80_.jpg"
    },
    {
        title: "The Good, the Bad and the Ugly",
        year: 1966,
        synopsis: "Tiga penembak jitu bersaing untuk mendapatkan harta karun di tengah Perang Saudara Amerika.",
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/original/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg"
    },
    {
        title: "Fight Club",
        year: 1999,
        synopsis: "Seorang pria yang mengalami insomnia bergabung dengan kelompok dukungan dan menemukan klub pertarungan bawah tanah.",
        rating: 8.8,
        poster: "https://m.media-amazon.com/images/I/61tbxfA-uPL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Forrest Gump",
        year: 1994,
        synopsis: "Kisah hidup seorang pria dengan IQ rendah tetapi hati yang besar, yang mengalami peristiwa penting dalam sejarah Amerika.",
        rating: 8.8,
        poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
    }
];

// Mengisi daftar film ke dalam elemen dengan ID 'movie-list'
const movieList = document.getElementById('movie-list');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
        <div class="card animate__animated animate__fadeIn">
            <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
                <h5 class="card-title">${movie.title} (${movie.year})</h5>
                <p class="card-text">${movie.synopsis}</p>
                <p class="card-text"><strong>Rating:</strong> ${movie.rating}</p>
            </div>
        </div>
    `;
    movieList.appendChild(card);
});

