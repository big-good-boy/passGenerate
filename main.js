const upp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const sym = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '.', '/', ':', ';', '=', '>', '?', '@', '[', '\\', ']', '^', '`', '{', '|', '}', '~', '\'', '-', '<', '_', '>'];

function generate() {
	let pass;
	let libSym = new Array();
	if (document.getElementById('symbol').checked) {
		libSym = libSym.concat(upp, low, num, sym);
		pass = password(libSym);
		if (parser(pass, upp)
		 && parser(pass, low)
		 && parser(pass, num)
		 && parser(pass, sym)) {
			document.querySelector('.pass').textContent = pass.join('');
		} else {
			generate();
		}
	} else {
		libSym = libSym.concat(upp, low, num);
		pass = password(libSym);
		if (parser(pass, upp)
		 && parser(pass, low)
		 && parser(pass, num)) {
			document.querySelector('.pass').textContent = pass.join('');
		} else {
			generate();
		}
	}
	if (document.getElementById('whitespace').checked) {
		addSpace(pass);
		document.querySelector('.pass').textContent = pass.join('');
	}
}

function password(arr) {
	let passArr = new Array();
	for (let i = 0; i < document.getElementById('length').value; i++) {
		passArr.push(arr[Math.floor(Math.random() * arr.length)]);
	}
	return passArr;
}

function parser(arr, lib) {
	for (const i of lib) {
		for (const ii of arr) {
			if (ii === i) {
				return true;
			}
		}
	}
}

function addSpace(arr) {
	arr[Math.floor(Math.random() * (arr.length - 2) + 1)] = ' ';
}

function copy() {
	window.navigator.clipboard.writeText(document.querySelector('.pass').textContent);
}

generate();
