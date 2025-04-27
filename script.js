function calculateBMI() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if (height == '' || weight == '') {
        alert("Please fill in both fields!");
        return;
    }

    height /= 100;
    let bmi = weight / (height ** 2);
    bmi = bmi.toFixed(2);

    let message = '';

    if (bmi < 18.5) {
        message = 'You are underweight 😟';
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        message = 'You are normal weight 😊'
    }
    else if (bmi >= 25 && bmi < 29.9) {
        message = 'You are overweight 😐';
    } else {
        message = 'You are obese 😟';
    }
    
    document.getElementById('result').innerHTML = `Your BMI is ${bmi} | ${message}`;
}

function clearFields() {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('result').innerHTML = '';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
    document.getElementById('darkModeToggle').classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
}
