function getMovieData() {
	fetch(
		"https://api.themoviedb.org/3/trending/all/day?api_key=8f43c803b81758d533bcf81698d83833"
	)
		.then((res) => {
			if (res.ok) {
				console.log("request successful");
			} else {
				console.log("request usuccessful!!!");
			}
			return res;
		})
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			function displayMovieData() {
				image2.scr = data.results[2].poster_path;
				desc2.innerText = data.results[2].overview;
				// console.log(data.results[1].overview);
				title2.innerText = data.results[2].title;
				// console.log(data.results[2].title);
				releaseDate2.innerText = data.results[2].release_date;
				// console.log(data.results[2].release_date);
			}
			displayMovieData();
		})
		.catch((error) => console.log(error));
}

document.addEventListener("DOMContentLoaded", () => {
	desc2 = document.getElementById("overview2");
	image2 = document.getElementById("img2");
	title2 = document.getElementById("title2");
	releaseDate2 = document.getElementById("release");
	getMovieData();
});
