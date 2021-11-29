let welcome = document.getElementById('welcome');
let get = document.getElementById('get');
let full = document.getElementById('full');
let next = document.getElementById('next');
let err = document.getElementById('err');
get.addEventListener('click', function(){
	welcome.style.display = 'none';
	full.style.display = 'block';
});

next.addEventListener('click', function(){
	let fr = document.getElementById('first').value;
	let ls = document.getElementById('last').value;
	if (fr != '' && ls != '') {
		full.style.display = 'none';
		let username = document.getElementById('user');
		username.style.display = 'block';
	} 
	if (fr == '') {
		full.style.display = 'block';
		let username = document.getElementById('user');
		username.style.display = 'none';
		err.style.display = 'block';
		setTimeout( function(){
			err.style.display = 'none';
		}, 3000);
	}
	let hh4 = document.getElementById('hh4');
	hh4.innerHTML = fr + ' ' + ls;
});
let n2 = document.getElementById('n2');
n2.addEventListener('click', function(){
	let fr2 = document.getElementById('inn').value;
	if (fr2 != '') {
	let user = document.getElementById('user');
	user.style.display = 'none';
	let great = document.getElementById('great');
	great.style.display = 'block';
	} 
	if (fr2 == '@')  {
		let user = document.getElementById('user');
		user.style.display = 'block';
		let great = document.getElementById('great');
		great.style.display = 'none';
		err.style.display = 'block';
		let errh = document.getElementById('errh');
		errh.innerHTML = 'Write correct username';
	}
});