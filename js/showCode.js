// показываем-скрываем код оформления таблицы

let codeHiddens = document.querySelectorAll('.codeZone__btn');
for (let el of codeHiddens) {
	el.onclick = showCode;
	el.onfocus = showCode;
}


// для разделения событий клика и фокуса на кнопке
let codeTimeBtn = 0;

function showCode(e) {
	if (e.type == 'click') {setTimeout('', 30)}
	if (e.target.classList.contains('codeZone__btn') && !codeTimeBtn) {
		codeTimeBtn = 1;
		if ( e.target.nextElementSibling &&
				 e.target.nextElementSibling.classList.contains('codeZone__text') ) {
			e.target.nextElementSibling.classList.toggle('codeZone__hidden');
			setTimeout( function() {codeTimeBtn = 0}, 150 );
		}
	}
}
