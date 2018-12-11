/*
    funWithJS.js
*/

function changeImage() {
    if (document.getElementById("storyImage").src = "imgs/IMG_2115.jpg") {

        document.getElementById("storyImage").src = "imgs/IMG_2332.jpg";
        document.getElementById("storyImage").alt = "Sitting off Apartment Balcony";
    } else if (document.getElementById("storyImage").src = "imgs/IMG_2332.jpg") {

        document.getElementById("storyImage").src = "imgs/IMG_2535.jpg";
        document.getElementById("storyImage").alt = "Tom and Cal";
    } else if (document.getElementById("storyImage").src = "imgs/IMG_2535.jpg") {

        document.getElementById("storyImage").src = "imgs/IMG_2115.jpg";
        document.getElementById("storyImage").alt = "London Sunset";
    } //Loops london photos back 
    else if (document.getElementById("storyImage").src = "imgs/IMG_2669.jpg") {

        document.getElementById("storyImage").src = "imgs/IMG_2687.jpg";
        document.getElementById("storyImage").alt = "Cal Sitting on the Edge of a Bridge";
    } else if (document.getElementById("storyImage").src = "imgs/IMG_2687.jpg") {

        document.getElementById("storyImage").src = "imgs/IMG_2694.jpg";
        document.getElementById("storyImage").alt = "Tom standing in front of a leaning tower";
    } else if (document.getElementById("storyImage").src = "imgs/IMG_2694.jpg") {

        document.getElementById("storyImage").src = "imgs/IMG_2735.jpg";
        document.getElementById("storyImage").alt = "Cal at a bar with kid clearly underage";
    } else if (document.getElementById("storyImage").src = "imgs/IMG_2735.jpg") {

        document.getElementById("storyImage").src = "imgs/IMG_2737.jpg";
        document.getElementById("storyImage").alt = "Sunset leaving Venice";
    } else if (document.getElementById("storyImage").src = "imgs/IMG_2737.jpg") {

        document.getElementById("storyImage").src = "imgs/IMG_2669.jpg";
        document.getElementById("storyImage").alt = "Venice Canal";
    } //loops italys photos back


}

function choice() {

    console.log("choice()");

    var route = document.getElementById("choiceText").value;

    route = route.toLowerCase();

    console.log("route = " + route);

    var story;

    if (route == "spain") {

        document.getElementById("storyImage").src = "imgs/IMG_2321.jpg";
        document.getElementById("storyImage").alt = "Spain Sunset from plane";

        story = "Your low budget airline puddle jumps from London to Alicante and drops you and your friends off in pristine weather. You muster together a sentence in Spanish to get directions to your hostel before you explore. After getting settled in your hostel and finish flirting with the receptionist Laura, you make your way into the city. The sun is getting ready to set and you want to find a good vantage point to watch the sunset from. Laura recommended you guys either go to the castle on top of the hill in the center of the city or to the waterfront. <br><br>If you want to go to the castle to watch the sunset, Enter <b class='white'>Castle</b> in the box. If you want to go to the waterfront, Enter <b class='white'>Waterfront</b> in the box."

        document.getElementById("storyAudio").src = "music/Despacito.mp3";

        document.getElementById("container").className = "bg-blue";
        document.getElementById("storyInput").className = "red";

        document.getElementById("storyInput").innerHTML = story;


    } else if (route == "italy") {

        document.getElementById("storyImage").src = "imgs/IMG_2669.jpg";
        document.getElementById("storyImage").alt = "Venice Canal";


        story = "<p>You land in Venice after a short flight and make your way to your hostel where you are presented your own cabin to stay in for the week. You guys explore the pool and bar of the hostel before making your way over the bridge to the city. An intricate set of water ways act as roads for the city and people dressed as Waldo try to give you rides on their boats. You decide walking is a better way to actually see the city and use the large bridges to get from island to island. All the walking is making you hungry and you can’t decide whether you want pasta of pizza. <br><br>If you want to eat Pizza, enter <b class='red'>Pizza</b> in the box. If you want to eat pasta, Enter <b class='red'>Pasta</b> in the box.</p>"

        document.getElementById("storyAudio").src = "music/ThreeLittleBirds.mp3";

        document.getElementById("container").className = "bg-white";
        document.getElementById("storyInput").className = "blue";

        document.getElementById("storyInput").innerHTML = story;
    } else if (route == "waterfront") {

        document.getElementById("storyImage").src = "imgs/IMG_2371.jpg";
        document.getElementById("storyImage").alt = "Spain Sunset from Water Front";


        story = "<p>Before heading to the waterfront, you guys stop into a local convenience store and pick up some Estrella’s for the walk. The city is full if life and the difference in culture is very apparent. The people are much more welcoming and friendly compared to London. The walk to the waterfront isn’t very far from your hostel which give you some more time to explore before the sunsets. You guys walk down the waterfront admiring the boats and palm trees covering the area. The sunsets and you get your first glimpse of paradise. </p>"

        document.getElementById("storyAudio").src = "Safari.mp3";

        document.getElementById("container").className = "bg-green";
        document.getElementById("storyInput").className = "purple";

        document.getElementById("storyInput").innerHTML = story;

        document.getElementById('choice-input').style.display = "none";
    } else if (route == "castle") {

        document.getElementById("storyImage").src = "imgs/IMG_2500.jpg";
        document.getElementById("storyImage").alt = "Spain Sunset from Castle";


        story = "<p>A large hill erupts out of the middle of the city with long brick walk ways leading to the high castle walls on the top of the hill. The castle looks ancient and compared to the city that surrounds it. As you hike up the steep inclines of the hill, you and your friends discuss what it must’ve have been like to live back in the times when the castle was actually utilized. As you finally reach the top of the castle, the sun begins to creep behind the mountains in the distance. You guys find a nice vantage point along the castle wall as seagulls begin to perch alongside you. </p>"

        document.getElementById("storyAudio").src = "music/OtraVez.mp3";

        document.getElementById("container").className = "bg-red";
        document.getElementById("storyInput").className = "purple";

        document.getElementById("storyInput").innerHTML = story;

        document.getElementById('choice-input').style.display = "none";
    } else if (route == "pizza") {

        document.getElementById("storyImage").src = "imgs/IMG_2676.jpg";
        document.getElementById("storyImage").alt = "Seafood Pizza";


        story = "<p>The group agrees that you should eat outside overlooking the large canal in the heart of the city. Many restaurants line the canal and you can’t decide where to go. As you march down the canal, a restaurant owner offers the first drink on the house and you can’t turn it down. They seat you on the river and serve you an incredible seafood pizza with an Ice Cold Peroni. After your meal, you decide to head back to you hostel, where you meet up with some other travels. You end up dancing to Spanish music with a polish girl in Italy. Congratulations! You are cultured!</p>"

        document.getElementById("storyAudio").src = "music/AnotherDayInParadise.mp3";

        document.getElementById("container").className = "bg-white";
        document.getElementById("storyInput").className = "blue";

        document.getElementById("storyInput").innerHTML = story;

        document.getElementById('choice-input').style.display = "none";

    } else if (route == "pasta") {

        document.getElementById("storyImage").src = "imgs/IMG_2700.jpg";
        document.getElementById("storyImage").alt = "Seafood Pasta";


        story = "<p>Tom’s parents recommend that you eat at this fancy restaurant in the city that has incredible pasta. You make your way to the restaurant and check out the menu before going in. Upon looking at the menu, you realize prices are way out of your budget and call Tom’s parent to get another recommendation. Tom’s parents insist that you go and give you’re their credit card information to go! Great success! You go in to the nicest restaurant you been to in years and have the most delicious meal of your life. To top it all off, the meal ends with complimentary shots of Italian liquor. Very nice! </p>"

        document.getElementById("storyAudio").src = "music/Heaven.mp3";

        document.getElementById("container").className = "bg-white";
        document.getElementById("storyInput").className = "blue";

        document.getElementById("storyInput").innerHTML = story;

        document.getElementById('choice-input').style.display = "none";

    } else if (route == "pasta") {

        document.getElementById("storyImage").src = "imgs/IMG_2700.jpg";
        document.getElementById("storyImage").alt = "Seafood Pasta";


        story = "<p>Tom’s parents recommend that you eat at this fancy restaurant in the city that has incredible pasta. You make your way to the restaurant and check out the menu before going in. Upon looking at the menu, you realize prices are way out of your budget and call Tom’s parent to get another recommendation. Tom’s parents insist that you go and give you’re their credit card information to go! Great success! You go in to the nicest restaurant you been to in years and have the most delicious meal of your life. To top it all off, the meal ends with complimentary shots of Italian liquor. Very nice! </p>"

        document.getElementById("storyAudio").src = "music/Heaven.mp3";

        document.getElementById("container").className = "bg-black";
        document.getElementById("storyInput").className = "blue";

        document.getElementById("storyInput").innerHTML = story;

        document.getElementById('choice-input').style.display = "none";
    } else if (route == "pasta") {

        document.getElementById("storyImage").src = "imgs/IMG_2700.jpg";
        document.getElementById("storyImage").alt = "Seafood Pasta";


        story = "<p>Tom’s parents recommend that you eat at this fancy restaurant in the city that has incredible pasta. You make your way to the restaurant and check out the menu before going in. Upon looking at the menu, you realize prices are way out of your budget and call Tom’s parent to get another recommendation. Tom’s parents insist that you go and give you’re their credit card information to go! Great success! You go in to the nicest restaurant you been to in years and have the most delicious meal of your life. To top it all off, the meal ends with complimentary shots of Italian liquor. Very nice! </p>"

        document.getElementById("storyAudio").src = "music/Heaven.mp3";

        document.getElementById("container").className = "bg-black";
        document.getElementById("storyInput").className = "blue";

        document.getElementById("storyInput").innerHTML = story;

        document.getElementById('choice-input').style.display = "none";
    } else if (route == "pasta") {

        document.getElementById("storyImage").src = "imgs/IMG_2700.jpg";
        document.getElementById("storyImage").alt = "Seafood Pasta";


        story = "<p>Tom’s parents recommend that you eat at this fancy restaurant in the city that has incredible pasta. You make your way to the restaurant and check out the menu before going in. Upon looking at the menu, you realize prices are way out of your budget and call Tom’s parent to get another recommendation. Tom’s parents insist that you go and give you’re their credit card information to go! Great success! You go in to the nicest restaurant you been to in years and have the most delicious meal of your life. To top it all off, the meal ends with complimentary shots of Italian liquor. Very nice! </p>"

        document.getElementById("storyAudio").src = "music/Heaven.mp3";

        document.getElementById("container").className = "bg-black";
        document.getElementById("storyInput").className = "blue";

        document.getElementById("storyInput").innerHTML = story;

        document.getElementById('choice-input').style.display = "none";
    }

}
