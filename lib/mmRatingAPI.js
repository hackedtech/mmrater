/*
   Developed By Krunchtalks Media for Krunchtalks Media 
   Dependecies: W3.css,JQuery
   Developed By Tausif Alam
   ©2021, Krunchtalks Media
*/
function mmVersion(version){
			version = "mmRatingAPI: v" + 1.1;
			return version;
}
if (window.matchMedia("(max-width: 340px)").matches){
   document.write("<code>Your Device Is No Longer Supported With MovieRatingAPI</code>")
}else{
	function mmRating(exec,story,screenplay,direction,performance,dataOne,dataTwo,dataThree,dataFour){
	/*
		variable definations
		1. exec -> boolean -> true/false
		2. story -> number -> number
		3. screenplay -> number -> number
		4. direction -> number -> number
		5. performance -> number -> number
		let rTotal = story+screenplay+direction+performance;
		let avgCriteria = rTotal/4 //gives number between 0-5 (0 & 5 inclusive)
		let t_dataOne = document.querySelector("#dataOne");
		let t_dataTwo = document.querySelector("#dataTwo");
		let t_dataThree = document.querySelector("#dataThree");
		let t_dataFour = document.querySelector("#dataFour");
		let percentage_calc = document.querySelector("#percentage_calc");
		let mm_rating_widget = document.querySelector("#mm_rating_widget");
		let ratingMeter = document.querySelector(".ratingMeter");
		let data_rating_story = document.querySelector("#data_rating_story");
		let rTotal = story+screenplay+direction+performance;
		let avgCriteria = rTotal/4 //gives number between 0-5 (0 & 5 inclusive)
		let IsMess = document.querySelector("#IsMess");
		let IsMarvelous = document.querySelector("#IsMarvelous");
		let myscheme = document.querySelector(".myscheme");
		let avgrater = document.querySelector("#avgrater");
		let nume_one_story = document.querySelector("#numerical-rating-story");
		let nume_one_screenplay = document.querySelector("#numerical-rating-screenplay");
		let nume_one_direction = document.querySelector("#numerical-rating-direction");
		let nume_one_performance = document.querySelector("#numerical-rating-performance");
		let average_numerical = document.querySelector("#average_numerical");
	*/	
	let t_dataOne = document.querySelector("#dataOne");
	let t_dataTwo = document.querySelector("#dataTwo");
	let t_dataThree = document.querySelector("#dataThree");
	let t_dataFour = document.querySelector("#dataFour");
	let percentage_calc = document.querySelector("#percentage_calc");
	let mm_rating_widget = document.querySelector("#mm_rating_widget");
	let ratingMeter = document.querySelector(".ratingMeter");
	let data_rating_story = document.querySelector("#data_rating_story");
	let rTotal = story+screenplay+direction+performance;
	let avgCriteria = rTotal/4 //gives number between 0-5 (0 & 5 inclusive)
	let IsMess = document.querySelector("#IsMess");
	let IsMarvelous = document.querySelector("#IsMarvelous");
	let myscheme = document.querySelector(".myscheme");
	let avgrater = document.querySelector("#avgrater");
	let nume_one_story = document.querySelector("#numerical-rating-story");
	let nume_one_screenplay = document.querySelector("#numerical-rating-screenplay");
	let nume_one_direction = document.querySelector("#numerical-rating-direction");
	let nume_one_performance = document.querySelector("#numerical-rating-performance");
	let average_numerical = document.querySelector("#average_numerical");
	if (exec == true){
		//initailize widget
		    mm_rating_widget.style.display = "block";
        ratingMeter.style.width = avgCriteria*20 + "%";
        percentage_calc.innerHTML = (avgCriteria*20).toFixed(1) + "%";
        nume_one_story.innerHTML = story.toFixed(1) + "/5";
        nume_one_screenplay.innerHTML = screenplay.toFixed(1) + "/5";
        nume_one_direction.innerHTML = direction.toFixed(1) + "/5";
        nume_one_performance.innerHTML = performance.toFixed(1) + "/5";
        average_numerical.innerHTML = avgCriteria.toFixed(1);
    //tabledata custom text
    if (dataOne){
       t_dataOne.innerHTML = dataOne;
    }
    if (dataTwo){
    	t_dataTwo.innerHTML = dataTwo;
    }
    if (dataThree){
    	t_dataThree.innerHTML = dataThree;
    }
    if (dataFour){
    	t_dataFour.innerHTML = dataFour;
    }
    //stars for story rating
        	// Round to nearest half
  story = Math.round(story * 2) / 2;
  var output_story = [];

  // Append all the filled whole stars
  for (var st = story; st >= 1; st--)
    output_story.push('<i class="fa fa-star" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');

  // If there is a half a star, append it
  if (st == .5) output_story.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');

  // Fill the empty stars
  for (let st = (5 - story); st >= 1; st--)
    output_story.push('<i class="fa fa-star-o" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');
	
  let story_stars = document.querySelector("#story_stars").innerHTML = output_story.join('');
        //screenplay for story rating
        	// Round to nearest half
  screenplay = Math.round(screenplay * 2) / 2;
  var output_screenplay = [];

  // Append all the filled whole stars
  for (var scr = screenplay; scr >= 1; scr--)
    output_screenplay.push('<i class="fa fa-star" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');

  // If there is a half a star, append it
  if (scr == .5) output_screenplay.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');

  // Fill the empty stars
  for (let scr = (5 - screenplay); scr >= 1; scr--)
    output_screenplay.push('<i class="fa fa-star-o" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');
	
  let story_screenplay = document.querySelector("#story_screenplay").innerHTML = output_screenplay.join('');
  //direction for story rating
        	// Round to nearest half
  direction = Math.round(direction * 2) / 2;
  var output_direction = [];

  // Append all the filled whole stars
  for (var dir = direction; dir >= 1; dir--)
    output_direction.push('<i class="fa fa-star" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');

  // If there is a half a star, append it
  if (dir == .5) output_direction.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');

  // Fill the empty stars
  for (let dir = (5 - direction); dir >= 1; dir--)
    output_direction.push('<i class="fa fa-star-o" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');
	
  let story_direction = document.querySelector("#story_direction").innerHTML = output_direction.join('');
  //performance for story rating
        	// Round to nearest half
  performance = Math.round(performance * 2) / 2;
  var output_performance = [];

  // Append all the filled whole stars
  for (var perfo = performance; perfo >= 1; perfo--)
    output_performance.push('<i class="fa fa-star" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');

  // If there is a half a star, append it
  if (perfo == .5) output_performance.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');

  // Fill the empty stars
  for (let perfo = (5 - performance); perfo >= 1; perfo--)
    output_performance.push('<i class="fa fa-star-o" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');
	
  let story_performance = document.querySelector("#story_performance").innerHTML = output_performance.join('');
    //avgCriteria for story rating
        	// Round to nearest half
  avgMeter = Math.round(avgCriteria * 2) / 2;
  var output_avgCriteria = [];

  // Append all the filled whole stars
  for (var avg = avgMeter; avg >= 1; avg--)
    output_avgCriteria.push('<i class="fa fa-star" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');

  // If there is a half a star, append it
  if (avg == .5) output_avgCriteria.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');

  // Fill the empty stars
  for (let avg = (5 - avgMeter); avg >= 1; avg--)
    output_avgCriteria.push('<i class="fa fa-star-o" aria-hidden="true" style="color: #ffb400;"></i>&nbsp;');
	
  let story_avgCriteria = document.querySelector("#story_avgCriteria").innerHTML = output_avgCriteria.join('');    
        if(avgCriteria*20 <= 79){
         if (avgCriteria*20 <= 45){	
        	myscheme.style.backgroundColor = "#000000";
        	avgrater.style.backgroundColor = "#000000";
        	ratingMeter.style.backgroundColor = "#ff0000";
        	IsMess.style.color = "#ff0000";
        	IsMarvelous.style.color = "#ffffff";
        	IsMarvelous.fontSize = "24px";
        	if (x.matches){
        	IsMess.style.fontSize = "24px";
           }else{
           	IsMess.style.fontSize = "34px";
           }
        	// yes it is a mess
        }else{
        	console.log("Madhyam darje ka hai!");
        	myscheme.style.backgroundColor = "#000000";
        	avgrater.style.backgroundColor = "#000000";
        	ratingMeter.style.backgroundColor = "#ffb400";
        	IsMess.style.color = "#ffffff";
        	IsMess.style.fontSize = "24px";
        	IsMarvelous.style.fontSize = "24px"
        	IsMarvelous.style.color = "#ffffff";
        	// madhyam darje ka hai
        }
        }else if (avgCriteria*20 >= 80){
        	myscheme.style.backgroundColor = "#000000";
        	avgrater.style.backgroundColor = "#000000";
        	ratingMeter.style.backgroundColor = "#ffb400";
        	IsMess.style.color = "#ffffff";
        	IsMess.style.fontSize = "24px";
        	IsMarvelous.style.color = "#ffb400";
        	if (x.matches){
        	IsMarvelous.style.fontSize = "24px";
           }else{
           	 IsMarvelous.style.fontSize = "34px";
           }
        	// yes it is marvelous
        }
         return true;
	}
	else{
		console.log("mmRatingAPI: false");
		mm_rating_widget.style.display = "none";
		return false;
	}
}
mmRating(x);
var x = window.matchMedia("(max-width: 700px)")
x.addListener(mmRating) // Attach listener function on state changes
}