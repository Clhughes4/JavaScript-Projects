function displayType(hero) {
    var heroType = hero.getAttribute("data-character-type");
    alert(heroType + " is the HERO in " + hero.innerHTML + ".");
}