export function aboutPg(){
    const aboutBtn = document.querySelector('#about');
    aboutBtn.addEventListener('click', function() {
        const mainBody = document.querySelector('#main');
        mainBody.innerHTML = `<div id="menu"><div class="menuItem" id="homeBtn"><button class='menuBtn'>Home</button></div>
        <div class="menuItem" id="about"><button class='menuBtn'>About Us</button></div>
        <div class="menuItem" id="history"><button class='menuBtn'>Our History</button></div>
        <div class="menuItem" id="contact"><button class='menuBtn'>Contact</button></div></div>
        <div id='pageContent'><h1>About</h1>
        <h2>Bringing ancient traditions to life with modern tools.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque ipsum a lorem placerat, nec gravida eros aliquet. Ut porttitor pretium quam, eget sodales ex fermentum sit amet. Ut porttitor diam eget sapien lacinia finibus. In egestas, nunc sed vestibulum fermentum, tortor nisl consequat magna, ut interdum mauris leo ac ante. In hac habitasse platea dictumst. Integer nisl metus, elementum consequat faucibus nec, ornare venenatis lectus. Cras sagittis tempus pellentesque. Donec ornare tellus sem, eu vestibulum est iaculis ut. Integer semper volutpat tortor sed vehicula. Vivamus luctus eget nisi eu sodales. Quisque ut diam lectus. Nulla ante risus, tempor in mi sed, congue euismod arcu. Aliquam tempor nibh in ante rutrum, id placerat turpis ullamcorper. Sed semper ullamcorper sodales. Fusce ullamcorper, ligula ut scelerisque pretium, mi ipsum efficitur libero, eu feugiat arcu sem a ante.

        Sed nunc tortor, ultrices at dui quis, eleifend pharetra nulla. Maecenas scelerisque turpis eu semper ultricies. Sed et arcu finibus, maximus velit sit amet, elementum mauris. Aenean a lacus sit amet lacus cursus euismod. Etiam fermentum justo vitae malesuada dignissim. Nulla aliquam nibh id volutpat porta. Pellentesque vel nunc pretium, tempor libero id, pretium dolor. Sed velit lacus, porta eu imperdiet vitae, facilisis at tellus. Quisque ipsum tellus, mollis vel pretium vel, molestie vel nulla.</p></div>`
    })
}