function addContent() {
    const textNode = document.createElement('div')
    textNode.id = 'main'
    textNode.innerHTML = `<div id="menu"><div class="menuItem" id="about"><button class='menuBtn'>About Us</button></div>
    <div class="menuItem" id="history"><button class='menuBtn'>Our History</button></div>
    <div class="menuItem" id="contact"><button class='menuBtn'>Contact</button></div></div>
    <div id='pageContent'><h1>Thames.mead</h1>
    <img src="https://images.unsplash.com/photo-1584225064785-c62a8b43d148" id='landingImg' style='height:450px;;object-fit:contain'>
    <h2>As simple as it sounds - mead,  from Thamesmead.</h2>
    <p>Thamesmead has a history of mead making at the Lesnes Abbey. We bring this ancient tradition back to life, using modern tools!</p></div>`
    document.getElementById('content').appendChild(textNode)
}

function createDiv() {
    const divNode = document.createElement('div')
    divNode.id='content'
    document.body.appendChild(divNode)
}
createDiv()
addContent()
import { aboutPg } from "./about"
aboutPg()
import './style.css'