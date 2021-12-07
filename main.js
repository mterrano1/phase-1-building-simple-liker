// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function heartCallBack(e) {
  let heartValue = e.target
  mimicServerCall()
  .then(() => {
    if (heartValue.innerText === EMPTY_HEART){
      heartValue.innerText = FULL_HEART,
      heartValue.classList.add('activated-heart')
    }else{
      heartValue.innerText = EMPTY_HEART,
      heartValue.classList.remove('activated-heart')
    }
  })
  .catch(() => {
    let modal = document.querySelector('#modal')
    modal.className = ''
    setTimeout(() => {modal.className = 'hidden'}, 3000)
  })
}

const hearts = document.querySelectorAll('.like-glyph')
for (const heart of hearts){
  heart.addEventListener('click', heartCallBack)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
