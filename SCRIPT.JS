function checkEligibility() {
    const income = document.getElementById('income').value;
    const loanAmount = document.getElementById('loanAmount').value;
    const creditScore = document.getElementById('creditScore').value;
    const employment = document.getElementById('employment').value;
    const resultDiv = document.getElementById('result');

    // Basic eligibility logic
    if (income >= 3000 && loanAmount <= income * 5 && creditScore >= 650) {
        resultDiv.textContent = `Congratulations! You are eligible for the loan.`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `Sorry, you are not eligible for the loan.`;
        resultDiv.style.color = 'red';
    }
}
