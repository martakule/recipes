import React from 'react';

export const Info = ({visible}) => {
	if(visible) {return(
			<div className="infoClass">
				<span>x</span>
				<p>
					This is my first React app, without Redux, using the <a href="https://developer.edamam.com/" target="_blank">Edamam API</a>. Credits for the icons go to <a href="https://www.flaticon.com/free-icon/salad_135637" target="_blank">Smashicons</a>, <a href="https://www.flaticon.com/free-icon/orange_201709" target="_blank">Prosymbols</a>, and <a href="https://www.flaticon.com/packs/multimedia-collection" target="_blank">Gregor Cresnar</a>. Thanks for visiting! <br/><a href="https://martakule.github.io/" target="_blank">Marta Kule</a>
				</p>
			</div>		
	)} else {return null}
}