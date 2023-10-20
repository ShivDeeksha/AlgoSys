let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

// JavaScript function to toggle gradient
function toggleGradient() {
    const container = document.getElementById('container');
    const joinWithUsText = document.querySelector('.text.sign-up h2');

    // Toggle the final-gradient class to change the gradient
    container.classList.toggle('final-gradient');
    joinWithUsText.textContent = (joinWithUsText.textContent === 'Join with us') ? 'Welcome' : 'Join with us';
}

// Call the toggleGradient function when the page loads
window.addEventListener('load', toggleGradient);
// Add an event listener to the "Sign up here" link
const signUpLink = document.querySelector('.text.sign-up b.pointer');
signUpLink.addEventListener('click', toggleGradient);

// JavaScript function to toggle circle gradient
function toggleCircleGradient() {
    const circles = document.querySelectorAll('.circle');

    // Toggle the final-circle-gradient class on all circles
    circles.forEach(circle => {
        circle.classList.toggle('final-circle-gradient');
    });
}

// JavaScript function to reset circle gradient to initial state
function resetCircleGradient() {
    const circles = document.querySelectorAll('.circle');
    
    // Remove the final-circle-gradient class from all circles
    circles.forEach(circle => {
        circle.classList.remove('final-circle-gradient');
    });
}

// Call the resetCircleGradient function when the page loads
window.addEventListener('load', resetCircleGradient);
// Add event listeners to the "Sign up here" and "Sign in here" links
// const signUpLink = document.querySelector('.text.sign-up b.pointer');
signUpLink.addEventListener('click', toggleCircleGradient);

const signInLink = document.querySelector('.text.sign-in b.pointer');
signInLink.addEventListener('click', resetCircleGradient);
