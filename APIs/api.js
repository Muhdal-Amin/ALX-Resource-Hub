document.addEventListener('DOMContentLoaded', () => {
    const limit = 5; // Set your desired limit here
    fetchFAQsFromMocky(limit);
});

function fetchFAQsFromMocky(limit) {
    const mockyUrl = 'https://run.mocky.io/v3/52b4e35d-5a92-4329-a778-5f315d2d3e19'; // Replace with your Mocky URL

    fetch(mockyUrl)
        .then(response => response.json())
        .then(data => {
            const randomFAQs = getRandomFAQs(data, limit);
            displayFAQs(randomFAQs);
        })
        .catch(error => console.error('Error fetching mock data:', error));
}

function getRandomFAQs(faqs, limit) {
    const shuffled = faqs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
}

function displayFAQs(faqs) {
    const faqContainer = document.querySelector('.faqs .wrapper');
    faqContainer.innerHTML = ''; // Clear existing FAQs

    faqs.forEach(faq => {
        const faqElement = document.createElement('div');
        faqElement.classList.add('container', 'animate-on-scroll2');
        faqElement.innerHTML = `
            <div class="question">${faq.title}</div>
            <div class="answercont">
                <div class="answer">${faq.body}</div>
            </div>
        `;
        faqContainer.appendChild(faqElement);
    });

    // Reapply the click event for FAQ toggling
    const questionElements = document.querySelectorAll('.question');
    questionElements.forEach(question => {
        question.addEventListener('click', event => {
            const active = document.querySelector('.question.active');
            if (active && active !== question) {
                active.classList.toggle("active");
                active.nextElementSibling.style.maxHeight = 0;
            }
            question.classList.toggle("active");
            const answer = question.nextElementSibling;
            if (question.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
}
