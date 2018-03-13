

document.getElementById("add_book").addEventListener("click", function(){
	var image_url = document.getElementById('Book-Image-Input').value;
	var name = document.getElementById('Book-Name-Input').value;
	var price = document.getElementById('Book-Price-Input').value;
	var condition = document.getElementById('Book-Condition-Input').value;
	var access_code = document.getElementById('codeChoice1').value;

	if(!access_code) {
		access_code = document.getElementById('codeChoice2').value;
	}

	if(!image_url || !name || !price || !condition || !access_code){
		alert("Please fill out all fields")
	}
	else{
			//save values to local storage

			localStorage.setItem("image_url", image_url);
			localStorage.setItem("name", name);
			localStorage.setItem("price", price);
			localStorage.setItem("condition", condition);
			localStorage.setItem("access_code", access_code);

			localStorage.setItem("new_element_toggle", 1);
			document.location.href = "./index.html";
		}

	});
