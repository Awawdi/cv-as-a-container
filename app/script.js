document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('section');

    function type(element) {
        let content = element.getAttribute('data-content');
        let index = 0;
        let speed = Math.floor(Math.random() * (100 - 30 + 1) + 30);
        element.style.visibility = 'visible';
        
        function typing() {
            if (index < content.length) {
                element.textContent += content[index];
                index++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }

    function validateCredentials() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password-1').value;
        let encodedUsername = btoa(username);

        if (password === encodedUsername) {
            let secondStageElement = document.getElementById('second-stage');
            secondStageElement.style.display = 'block';
            let typingElement = secondStageElement.querySelector('.typing-effect');
            typingElement.setAttribute('data-content', typingElement.textContent);
            typingElement.textContent = '';
            type(typingElement);
        } else {
            alert('Incorrect Username or Password!');
        }
    }

    function validateSecondPassword() {
        const password2 = document.getElementById('password-2').value;
        let secondPassword = '427437419382427408';

        if (password2 === secondPassword) {
            let lastStageElement = document.getElementById('third-stage');
            lastStageElement.style.display = 'block';
            let typingElement = lastStageElement.querySelector('.typing-effect');
            typingElement.setAttribute('data-content', typingElement.textContent);
            typingElement.textContent = '';
            type(typingElement);
        } else {
            alert('Incorrect Second Password!');
        }
    }

    function validateThirdPassword() {
        const password3 = document.getElementById('password-3').value;
        let thirdPassword = '1234';
    
        if (password3 === thirdPassword) {
            let lastStageElement = document.getElementById('last-stage');
            lastStageElement.style.display = 'block';
            let typingElements = lastStageElement.querySelectorAll('.typing-effect');
            typingElements.forEach(element => {
                element.setAttribute('data-content', element.textContent);
                element.textContent = '';
                type(element);
            });
        } else {
            alert('Incorrect Third Password!');
        }
    }

    window.validateCredentials = validateCredentials;
    
    document.getElementById('wanna-see-me-dance-heading').addEventListener('click', function(){
        let firstStageElement = document.getElementById('first-stage');
        firstStageElement.style.display = 'block';
        
        let typingElement = firstStageElement.querySelector('.typing-effect');
        typingElement.setAttribute('data-content', typingElement.textContent);
        typingElement.textContent = '';
        type(typingElement);
    });
    
    document.getElementById('second-form').addEventListener('submit', function (event) {
        event.preventDefault();
        validateSecondPassword();
    });

    document.getElementById('last-form').addEventListener('submit', function (event) {
        event.preventDefault();
        validateThirdPassword();
    });

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

    let headerElement = document.querySelector('header .typing-effect');
    headerElement.setAttribute('data-content', headerElement.textContent);
    headerElement.textContent = '';
    type(headerElement);
});
