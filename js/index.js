window.onload = init;

var element;

function init(){
		element= document.getElementById('element');

		element.addEventListener('click',function(){
			alert('d');
		})
}

