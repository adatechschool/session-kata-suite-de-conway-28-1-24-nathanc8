//Créer une fonction decoupeChaine qui prend en paramètre une string et renvoie la même string dans laquelle les caractères successifs non identiques sont séparés par un espace.

function cutChaine(stringToCut: string): string | undefined {
	let stringArray: Array<string> = stringToCut.split('');
	for (let i: number = 0; i < stringArray.length - 1; i++) {
		if (stringArray[i] !== stringArray[i + 1]) {
			stringArray.splice(i + 1, 0, ' ');
			i++;
		}
	}
	stringToCut = stringArray.join('');
	return stringToCut;
}

// Créer une fonction decritChaine, inspirée de decoupeChaine, qui prend en paramètre une string et renvoie une string qui décrit, tel qu'expliqué ci-dessus, les caractères qui constituent la chaîne en paramètre.

function describeChaine(stringTodescribe: string) {
	let describingString: string = '';
	let count: number = 1;
	for (let i = 0; i < stringTodescribe.length; i++) {
		if (stringTodescribe[i] == stringTodescribe[i + 1]) {
			count++;
		} else {
			describingString += `${count}` + stringTodescribe[i];
			count = 1;
		}
	}
	return describingString;
}

// Créer une fonction suiteConway qui donne les n premiers termes de la suite qui commence par le caractère carac. n et carac sont passés en paramètres de la fonction.
function conwaySuite(char: string, n: number) {
	for (let i: number = 0; i < n; i++) {
		let describingString: string = '';
		let count: number = 1;
		for (let j: number = 0; j < char.length; j++) {
			if (char[j] == char[j + 1]) {
				count++;
			} else {
				describingString += `${count}` + char[j];
				count = 1;
			}
		}
		char = describingString;
		let body = document.querySelector('body') as HTMLBodyElement;
		body.style.display = 'flex';
		body.style.flexDirection = 'column';
		body.style.flexWrap = 'wrap';
		body.style.alignContent = 'center';
		body.style.justifyContent = 'center';

		let iterationToDisplay = document.createElement(
			'p'
		) as HTMLParagraphElement;
		iterationToDisplay.innerText = describingString;
		iterationToDisplay.style.textAlign = 'center';
		body.appendChild(iterationToDisplay);
	}
}

conwaySuite('a', 3);
