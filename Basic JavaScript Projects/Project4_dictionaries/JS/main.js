function my_Dictionary() {
    var movie = {
        Title: "The Avengers",
        Genre:"Action",
        Director: "joss Whedon",
        Rating: "PG-13",
    };
    delete movie.Genre; //this removes the Genre KVP from the dictionary before its displayed
    document.getElementById("Dictionary").innerHTML = movie.Genre;
}