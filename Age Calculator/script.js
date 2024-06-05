const buttonElement = document.querySelector(".calc-btn");
const dateElement = document.getElementById("date-input");
const resultElement = document.querySelector(".js-result");

function calculateAge(){
    const birthDate = dateElement.value;
    if(birthDate === ""){
        alert('Please enter your birthday!');
    }
    else{
        const age = getAge(birthDate);
        resultElement.innerHTML = `You are ${age} years old.`
    }
}

function getAge(birthDate){
    const today = new Date();
    const birthDateObject = new Date(birthDate);
    let age = today.getFullYear() - birthDateObject.getFullYear();
    const month = today.getMonth() - birthDateObject.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthDateObject.getDate())
      ) {
        age--;
      }
    
      return age;
}

buttonElement.addEventListener('click' , calculateAge);