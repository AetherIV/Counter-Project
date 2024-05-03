const buttons = document.querySelectorAll('.buttons');

// Function to toggle enlargement on hover
buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.classList.add('enlarged');
    });
    button.addEventListener('mouseout', function() {
        this.classList.remove('enlarged');
    });
});

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
};

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
};

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
};
