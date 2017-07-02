require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imageDatas = require('../data/imageDatas.json');

imageDatas = (function genImageURL(imageDataArr) {
	for (var i in imageDataArr) {
		var singleImageData = imageDataArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDataArr;
})(imageDatas);

class AppComponent extends React.Component {
	render() {
		return (
			<section className = "stage">
				<section className = "img-sec">
				</section>
				<nav className = "controller-nva">
				</nav>
			</section>
		);
	}
}

AppComponent.defaultProps = {};

export default AppComponent;