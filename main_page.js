		


document.getElementById("CartButton").addEventListener("click", function(){
	document.location.href = "./myCart.html";
});


if(localStorage.getItem("new_element_toggle") == 1){

	var image_url = localStorage.getItem("image_url");
	var name = localStorage.getItem("name");
	var price = localStorage.getItem("price");
	var condition = localStorage.getItem("condition");
	var access_code = localStorage.getItem("access_code");

	createBook(image_url, name, price, condition, access_code);
	//localStorage.setItem("new_element_toggle", 0);
}

function createBook(image_url, name, price, condition, access_code) {
	var bookDiv = document.createElement('div');
	bookDiv.classList.add('book');


	var bookContentsDiv = document.createElement('div');
	bookContentsDiv.classList.add('book-contents');
	bookDiv.appendChild(bookContentsDiv);

	var imageCont = document.createElement('div');
	imageCont.classList.add('book-image-container');
	bookContentsDiv.appendChild(imageCont);

	var bookImage = document.createElement('img');
	bookImage.src = image_url;
	bookImage.alt = "book";
	imageCont.appendChild(bookImage);

	var bookInfoDiv = document.createElement('div');
	bookInfoDiv.classList.add('book-info-container');
	bookContentsDiv.appendChild(bookInfoDiv);

	var bookLink = document.createElement('a');
	bookLink.classList.add('book-name');
	bookLink.href = '#';
	bookLink.textContent = name;
	bookInfoDiv.appendChild(bookLink);


	var priceSpan = document.createElement('span');
	priceSpan.classList.add("book-price");
	priceSpan.textContent = '$' + price;
	bookInfoDiv.appendChild(priceSpan);


	var condSpan = document.createElement('span');
	condSpan.classList.add("book-condition");
	condSpan.textContent = "Condition: " + condition;
	bookInfoDiv.appendChild(condSpan);

	var codeSpan = document.createElement('span');
	codeSpan.classList.add("book-access-code");
	codeSpan.textContent = "Access Code: " + access_code;
	bookInfoDiv.appendChild(codeSpan);

	const insertLoc = document.getElementById("Main-div");
	//alert(document.getElementById("Main-div"));


	insertLoc.appendChild(bookDiv);


}