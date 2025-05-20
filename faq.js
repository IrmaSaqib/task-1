
// ....onclick work start
const quesAns = document.querySelectorAll('.quesAns');

quesAns.forEach(quesAns => {
    const icon = quesAns.querySelector('.icon');
    const answer = quesAns.querySelector('.ans');

    quesAns.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active')
    })
})
// ....onclick work end
