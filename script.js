document.addEventListener('DOMContentLoaded', () => {
    let elements = document.querySelectorAll('.typing-effect');
    let sections = document.querySelectorAll('section');
    let totalCharacters = 0;

    elements.forEach(el => {
        totalCharacters += el.textContent.length;
        el.setAttribute('data-content', el.textContent);
        el.textContent = '';
    });

    let overallIndex = 0;

    function type() {
        let secondStage = document.getElementById('second-stage');
        if (window.getComputedStyle(secondStage, null).display === 'none') {
            requestAnimationFrame(type); // If second stage is not visible, try again in the next frame
            return;
        }
    
        let speed = Math.floor(Math.random() * (100 - 30 + 1) + 30);
        setTimeout(() => {
            for (let el of elements) {
                let content = el.getAttribute('data-content');
                if (content && overallIndex < content.length) {
                    if (overallIndex === 0) el.style.visibility = 'visible'; // Make the element visible only when starting to type
                    el.textContent += content[overallIndex];
                }
            }
            overallIndex++;
            if (overallIndex < totalCharacters) {
                requestAnimationFrame(type);
            }
        }, speed);
    }      

    function validateCredentials() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password-1').value;
        let encodedUsername = btoa(username);

        if (password === encodedUsername) {
            document.getElementById('second-stage').style.display = 'block';
        } else {
            alert('Incorrect Username or Password!');
        }
    }

    function validateSecondPassword() {
        const password2 = document.getElementById('password-2').value;
        let secondPassword = '427437419382427408';
        if (password2 === secondPassword) {
            document.getElementById('last-stage').style.display = 'block';
        } else {
            alert('Incorrect Second Password!');
        }
    }

    window.validateCredentials = validateCredentials; // Expose validateCredentials to global scope to be accessed from HTML inline script

    // Add submit event listener to the second-form to validate the second password.
    document.getElementById('second-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        validateSecondPassword(); // Call the validation function for the second password.
    });

    // Intersection Observer for scroll effect
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.filter = "blur(0)";
                entry.target.style.opacity = "1";
            } else {
                entry.target.style.filter = "blur(5px)";
                entry.target.style.opacity = "0.5";
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    type();
});
