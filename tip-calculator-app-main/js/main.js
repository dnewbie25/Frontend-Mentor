'use strict';

const bill = document.getElementById('bill');
const numberOfPeople = document.getElementById('number-people');
const reset = document.getElementById('reset');
const customTip = document.getElementById('custom-tip');
const tipOptions = document.querySelectorAll('.tip-value');
const tipPerPerson = document.querySelector('#tip-person .result');
const totalPerson = document.querySelector('#total-person .result');

class Calculator {
  constructor() {
    this.bill = 0;
    bill.value = '';
    this.people = 1;
    numberOfPeople.value = '';
    this.tipAmount = 0;
    customTip.value = '';
    // event listeners
    bill.addEventListener('input', this.clickedBill.bind(this));
    customTip.addEventListener('input', this.setCustomTip.bind(this));
    tipOptions.forEach(tip => {
      tip.addEventListener('click', e => this.tipAmount = Number(e.target.value) / 100);
    });
    numberOfPeople.addEventListener('input', this.numberOfPeople.bind(this));
    reset.addEventListener('click', this.reset.bind(this));
  }

  setBill() {
    this.bill = Number(bill.value);
  }

  clickedBill(e) {
    this.setBill();
    this.updatePersonTip();
    this.updatePersonAmount();
  }

  setCustomTip(e) {
    if (Number(customTip.value) > 0) {
      this.tipAmount = Number(customTip.value) / 100;
    }
    this.updatePersonTip();
    this.updatePersonAmount();
  }

  numberOfPeople(e) {
    if (Number(numberOfPeople.value) > 0) {
      this.people = Number(numberOfPeople.value);
    }
    this.updatePersonTip();
    this.updatePersonAmount();
  }

  reset(e) {
    this.bill = 0;
    bill.value = '';
    this.people = 0;
    numberOfPeople.value = '';
    this.tipAmount = 0;
    customTip.value = '';
    tipPerPerson.textContent = "$0.00"
    totalPerson.textContent = "$0.00"
  }

  updatePersonTip(){
    if(this.bill > 0 && this.tipAmount > 0 && this.people >= 1){
      tipPerPerson.textContent = `$${((this.bill * this.tipAmount) / this.people).toFixed(2)}`;
    }
  }

  updatePersonAmount(){
    if(this.bill > 0 && this.tipAmount > 0 && this.people >= 1){
      totalPerson.textContent = `$${((this.bill * this.tipAmount + this.bill) / this.people).toFixed(2)}`;
    }
  }
}

const calculator = new Calculator();