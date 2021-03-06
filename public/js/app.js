const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('p#message-1')
const messageTwo = document.querySelector('p#message-2')

weatherForm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const location = search.value

    //reset values
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) messageOne.textContent = data.error
            else {
                messageOne.textContent = data.location
                messageTwo.innerHTML = data.forecast
            }
        })
    })
})