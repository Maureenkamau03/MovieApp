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
			return res.json();
		})
		// .then((res) => res.json())
		.then((data) => {
			// console.log(data);
			function displayMovieData() {
				// image2.scr = data.results["poster_path"];
				image2.scr = data.results[0].poster_path;

				desc2.innerText = data.results[0].overview;
				// console.log(data.results[1].overview);
				title2.innerText = data.results[0].title;
				// console.log(data.results[2].title);
				releaseDate2.innerText = data.results[0].release_date;
				// console.log(data.results[2].first_air_date;
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

// function to hide and reset comments form
function hideResetForm() {
	// let postbtn = document.getElementById("postbtn");
	let form = document.getElementById("form");
	form.addEventListener("submit", (e) => {
		// alert("i was clicked");
		// console.log("I was clicked");

		e.preventDefault();
		// commentscont.className = " ";
		let li = document.createElement("li");
		li.textContent = document.getElementById("commentinput").value;
		document.getElementById("commentsgohere").appendChild(li);
		console.log(li);
		form.reset();
		comments.className = "hidden";
	});
}

// function for liking
function likes() {
	let unliked = document.getElementById("unliked");
	// let like = document.getElementById("like");

	unliked.addEventListener("click", (event) => {
		event.target.style.color = "red";
		// event.target.className = "liked";
		const noOfLikes = document.getElementById("likescount");
		let likes = 0;
		likes += 1;
		noOfLikes.textContent = `${likes} likes`;
	});
}

//function to add a watchlist
function addMovieToWatchlist() {
	let watchListForm = document.getElementById("mylistform");
	watchListForm.addEventListener("submit", (e) => {
		e.preventDefault();
		let list = document.createElement("li");
		let btn = document.createElement("button");
		btn.setAttribute("id", "delete");
		btn.addEventListener("click", deleteitem);
		btn.textContent = " x ";

		// console.log(list);
		list.textContent = document.getElementById("mylistinput").value;
		document.getElementById("watchlistitems").appendChild(list);
		list.appendChild(btn);
		watchListForm.reset();
	});
}
function deleteitem(e) {
	e.target.parentNode.remove();
}

document.addEventListener("DOMContentLoaded", () => {
	const comments = document.getElementById("comments");
	comments.className = "hidden";
	// const list = document.getElementById("list");
	// list.className = "hidden";
	desc2 = document.getElementById("overview2");
	image2 = document.getElementById("img2");
	title2 = document.getElementById("title2");
	releaseDate2 = document.getElementById("release");
	title1 = document.getElementById("title1");

	likes();
	showCommentsForm();
	getMovieData();
	hideResetForm();
	addMovieToWatchlist();
});
