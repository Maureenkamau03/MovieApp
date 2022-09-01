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
function showCommentsForm() {
	let commentbtn = document.getElementById("commenticon");
	commentbtn.addEventListener("click", () => {
		comments.className = " ";
	});
}
function hideResetForm() {
	// let postbtn = document.getElementById("postbtn");
	let form = document.getElementById("form");
	form.addEventListener("submit", () => {
		// alert("i was clicked");
		// console.log("I was clicked");
		form.reset();
		comments.className = "hidden";
	});
}
function likes() {
	let unliked = document.getElementById("unliked");
	// let like = document.getElementById("like");

	unliked.addEventListener("click", (event) => {
		event.target.style.color = "red";
		const noOfLikes = document.getElementById("likescount");
		let likes = 0;

		likes += 1;
		noOfLikes.textContent = `${likes} likes`;
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const comments = document.getElementById("comments");
	comments.className = "hidden";

	desc2 = document.getElementById("overview2");
	image2 = document.getElementById("img2");
	title2 = document.getElementById("title2");
	releaseDate2 = document.getElementById("release");
	likes();
	showCommentsForm();
	getMovieData();
	hideResetForm();
});
