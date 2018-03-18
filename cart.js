
document.getElementById("book1-remove").addEventListener("click", function(){
	document.getElementById("book1-row").style.display = 'none';
	localStorage.setItem("removed_book", 1);

});

if(localStorage.getItem("removed_book")){
		document.getElementById("book1-row").style.display = 'none';
}