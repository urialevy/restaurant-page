export function contactsUs() {
    const historyBtn = document.querySelector('#contact')
    historyBtn.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelector('#pageContent').innerHTML= `<h1>Contact us</h1>
        <h2>Want to get in touch?</h2>`
        
        })
}