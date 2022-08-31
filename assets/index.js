function getMovieData() {
	fetch(
		"https://api.themoviedb.org/3/trending/all/day?api_key=8f43c803b81758d533bcf81698d83833"
	)
		.then((res) => res.json())
		.then((data) => {
			// console.log(data)

			let image = document.getElementById("img");
			image.scr = data.results[1].backdrop_path;
			let desc = document.getElementById("overview");
			desc.innerText = data.results[1].overview;
			console.log(data.results[1].overview);
		});
}
function displayMovieData() {
	let image = document.getElementById("images");
	image.scr = data.results.backdrop_path;
}

document.addEventListener("DOMContentLoaded", () => {
	getMovieData();
});
