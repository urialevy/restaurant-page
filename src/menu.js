export function aboutPg(){
    const aboutBtn = document.querySelector('#about');
    aboutBtn.addEventListener('click', function() {
        const mainBody = document.querySelector('#pageContent');
        mainBody.innerHTML = `<h1>The Mead Menu</h1>
        <h2>Bringing ancient traditions to life with modern tools.</h2>
        <p>Honey wine - commonly called mead - is one of the first forms of alcohol consumed by humans. We are a collection of home brewers who try to share this ancient tradition with others, using modern tools. Our mead selection includes:</p>
        <div id="menu">
            <div id="meadList"><div class="header">Mead name</div><div class="header">Tasting notes</div><div class="header">ABV</div><div class="header">Price</div><div class="header">Bottle size</div>
            <div class="entry">"The Trappist"</div><div class="entry">Lemony, zesty with hints of spice</div><div class="entry">11.8%</div><div class="entry">£19.99</div><div class="entry">75cl</div>
            <div class="entry">"The Sack"</div><div class="entry">Sweet, light, hints of caramel</div><div class="entry">15.5%</div><div class="entry">£24.99</div><div class="entry">75cl</div>
            <div class="entry">"Killer Bee"</div><div class="entry">Spicy and zesty, with hints of pepper</div><div class="entry">12%</div><div class="entry">£14.99</div><div class="entry">50cl</div>
            <div class="entry">"Cyser Squad"</div><div class="entry">Tart, sweet with hints of vanilla</div><div class="entry">10%</div><div class="entry">£9.99</div><div class="entry">33cl</div></div>
        </div>`
    })
}