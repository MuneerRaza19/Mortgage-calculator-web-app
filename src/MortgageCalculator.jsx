// MortgageCalculator.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const ResultContainer = styled.div`
  margin-top: 15px;
  font-weight: bold;
`;

function MortgageCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [repaymentTime, setRepaymentTime] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  const loanAmount = purchasePrice - downPayment;

  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = repaymentTime * 12;

    const mortgagePayment =
      loanAmount *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return mortgagePayment.toFixed(2);
  };

  return (
    <CalculatorContainer>
      <h2>Mortgage Calculator</h2>

      <InputContainer>
        <label>Purchase Price:</label>
        <input
          type="number"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(Number(e.target.value))}
        />
      </InputContainer>

      <InputContainer>
        <label>Down Payment:</label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
        />
      </InputContainer>

      <InputContainer>
        <label>Repayment Time (in years):</label>
        <input
          type="number"
          value={repaymentTime}
          onChange={(e) => setRepaymentTime(Number(e.target.value))}
        />
      </InputContainer>

      <InputContainer>
        <label>Interest Rate:</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </InputContainer>

      <ResultContainer>
        <p>
          <strong>Loan Amount:</strong> ${loanAmount.toFixed(2)}
        </p>
        <p>
          <strong>Monthly Payment:</strong> ${calculateMonthlyPayment()}
        </p>
      </ResultContainer>
    </CalculatorContainer>
  );
}

export default MortgageCalculator;
