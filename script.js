const form = document.getElementById('dueDateForm');
const firstBreeding = document.getElementById('firstBreeding');

flatpickr(firstBreeding, {
    dateFormat: "d/M/Y",
});
const gestationPeriod = document.getElementById('gestationPeriod');
const pinkingUpElement = document.getElementById('pinkingUp');
const dueDateElement = document.getElementById('dueDate');

firstBreeding.addEventListener('input', () => {
    if (form.checkValidity()) {
        calculateDueDate();
    }
});

gestationPeriod.addEventListener('input', () => {
    if (form.checkValidity()) {
        calculateDueDate();
    }
});

function calculateDueDate() {
    const firstBreedingDate = new Date(firstBreeding.value);
    const gestationPeriodValue = parseInt(gestationPeriod.value);
    const pinkingUpDate = new Date(firstBreedingDate.getTime() + 21 * 24 * 60 * 60 * 1000);
    const dueDate = new Date(firstBreedingDate.getTime() + gestationPeriodValue * 24 * 60 * 60 * 1000);
    pinkingUpElement.textContent = formatDate(pinkingUpDate);
    dueDateElement.textContent = formatDate(dueDate);
}

function formatDate(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


// Trigger calculation when page is loaded
window.onload = () => {
    if (form.checkValidity()) {
        calculateDueDate();
    }
};


