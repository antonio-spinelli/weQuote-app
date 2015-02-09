angular.module('weQuote.services')
	.constant('Colors', {
		white: {
			label: 'Bianco',
			value: '#FFFFFF'
		},
		black: {
			label: 'Nero',
			value: '#000000'
		},
		red: {
			label: 'Rosso',
			value: '#FF0000'
		},
		blue: {
			label: 'Blu',
			value: '#0000FF'
		},
		green: {
			label: 'Verde',
			value: '#00FF00'
		}
	})
	.factory('Backgrounds', ['Colors', function(Colors) {
		var data = [{
			path: 'amore/000.jpg',
			color: Colors.white,
			tags: ['amore']
		}, {
			path: 'amore/001.jpg',
			color: Colors.white,
			tags: ['amore']
		}, {
			path: 'amore/002.jpg',
			color: Colors.white,
			tags: ['amore']
		}, {
			path: 'amore/003.jpg',
			color: Colors.white,
			tags: ['amore']
		}, {
			path: 'calcio/000.jpg',
			color: Colors.white,
			tags: ['calcio']
		}, {
			path: 'calcio/001.jpg',
			color: Colors.white,
			tags: ['calcio']
		}, {
			path: 'calcio/002.jpg',
			color: Colors.white,
			tags: ['calcio']
		}, {
			path: 'fede/000.jpg',
			color: Colors.white,
			tags: ['religione']
		}, {
			path: 'fede/001.jpg',
			color: Colors.white,
			tags: ['religione']
		}, {
			path: 'fede/002.jpg',
			color: Colors.white,
			tags: ['religione']
		}, {
			path: 'musica/000.jpg',
			color: Colors.white,
			tags: ['musica']
		}, {
			path: 'musica/001.jpg',
			color: Colors.white,
			tags: ['musica']
		}, {
			path: 'musica/002.jpg',
			color: Colors.white,
			tags: ['musica']
		}, {
			path: 'passione/000.jpg',
			color: Colors.white,
			tags: ['passione']
		}, {
			path: 'passione/001.jpg',
			color: Colors.white,
			tags: ['passione']
		}, {
			path: 'passione/002.jpg',
			color: Colors.white,
			tags: ['passione']
		}, {
			path: 'passione/003.jpg',
			color: Colors.white,
			tags: ['passione']
		}, {
			path: 'passione/004.jpg',
			color: Colors.white,
			tags: ['passione']
		}, {
			path: 'misc/000.jpg',
			color: Colors.white
		}, {
			path: 'misc/001.jpg',
			color: Colors.white
		}, {
			path: 'misc/002.jpg',
			color: Colors.white
		}, {
			path: 'misc/003.jpg',
			color: Colors.white
		}, {
			path: 'misc/004.jpg',
			color: Colors.white
		}, {
			path: 'misc/005.jpg',
			color: Colors.white
		}, {
			path: 'misc/006.jpg',
			color: Colors.white
		}, {
			path: 'misc/007.jpg',
			color: Colors.white
		}, {
			path: 'misc/008.jpg',
			color: Colors.white
		}, {
			path: 'misc/009.jpg',
			color: Colors.white
		}, {
			path: 'misc/010.jpg',
			color: Colors.white
		}, {
			path: 'misc/011.jpg',
			color: Colors.white
		}, {
			path: 'misc/012.jpg',
			color: Colors.white
		}, {
			path: 'misc/013.jpg',
			color: Colors.white
		}, {
			path: 'misc/014.jpg',
			color: Colors.white
		}, {
			path: 'misc/015.jpg',
			color: Colors.white
		}, {
			path: 'misc/016.jpg',
			color: Colors.white
		}, {
			path: 'misc/017.jpg',
			color: Colors.white
		}, {
			path: 'misc/018.jpg',
			color: Colors.white
		}, {
			path: 'misc/019.jpg',
			color: Colors.white
		}, {
			path: 'misc/020.jpg',
			color: Colors.white
		}, {
			path: 'misc/021.jpg',
			color: Colors.white
		}, {
			path: 'misc/022.jpg',
			color: Colors.white
		}, {
			path: 'misc/023.jpg',
			color: Colors.white
		}];

		return Object.freeze(data);
	}]);