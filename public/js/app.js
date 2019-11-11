console.log("hey there client side js!");

// fetch - browsing based API 
//forecast info in client side js

const weatherForm = document.querySelector('form')   //js representation somes in
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


//event listener
//frst is string and second is callback that runs every time the form is submitted

weatherForm.addEventListener('submit', (e) => {
   //prevent default that is browser refreshing itself
    e.preventDefault()

    const location = search.value
  
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = '' 

fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messsageOne.textContent = data.error
        } else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
                    
        }
        
    })
})

})


