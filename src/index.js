console.log('Hello from src!')

export default function addContent() {
    const textNode = document.createElement('div')
    textNode.innerHTML = `<h1>Thames.Mead</h1>
    <img src="https://images.unsplash.com/photo-1584225064785-c62a8b43d148" style='width:50%;height:50%'>
    <h2>As simple as it sounds - mead,  from Thamesmead.</h2>
    <p>Thamesmead has a history of mead making at the Lesnes Abbey. We bring this<img src="" alt=""> ancient tradition back to life, using modern tools!</p>`
    document.getElementById('content').appendChild(textNode)
}
addContent()