import React from 'react';

export const ListItem = ({data}) => {

	return(
		<li className="recipeItem">
			<div className="recipeLabel">{data.label}</div>
			<div className="calories">{Math.round(data.totalNutrients.ENERC_KCAL.quantity).toLocaleString()} {data.totalNutrients.ENERC_KCAL.unit}</div>		
		</li>
	);
}

// Array(10)
// 0
// :
// calories
// :
// 4210.106336865426
// cautions
// :
// []
// dietLabels
// :
// []
// digest
// :
// (24) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// healthLabels
// :
// (4) ["Vegetarian", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]
// image
// :
// "https://www.edamam.com/web-img/482/482417e9943411f0e7db4be74a7b5114.jpg"
// ingredientLines
// :
// (14) ["2 cup sifted cake flour(not self-rising; sift before measuring),for cake", "2 tbsp sifted cake flour,for cake", "1 tsp Baking Powder,for cake", "3/4 tsp Baking Soda,for cake", "1/2 tsp Salt,for cake", "1 stick unsalted butter, softened(4 oz),for cake", "1 cup Granulated Sugar,for cake", "1 tsp pure vanilla extract,for cake", "2 x large eggs, at room temperature 30 minutes,for cake", "1 cup Buttermilk,well shaken,for cake", "1 cup Heavy Cream,for caramel glaze", "1/2 cup packed light brown sugar,for caramel glaze", "1 tbsp Light Corn Syrup,for caramel glaze", "1 tsp pure vanilla extract,for caramel glaze"]
// ingredients
// :
// (14) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// label
// :
// "Caramel Cake"
// shareAs
// :
// "http://www.edamam.com/recipe/caramel-cake-b66666d5c882ca199f43def8f1b8a03f/cake"
// source
// :
// "Lottie + Doof"
// totalDaily
// :
// {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, CHOCDF: {…}, FIBTG: {…}, …}
// totalNutrients
// :
// {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, FATRN: {…}, FAMS: {…}, …}
// totalWeight
// :
// 1338.7224361358944
// uri
// :
// "http://www.edamam.com/ontologies/edamam.owl#recipe_b66666d5c882ca199f43def8f1b8a03f"
// url
// :
// "http://www.lottieanddoof.com/2009/02/my-favorite-cake-period/"
// yield
// :
// 14