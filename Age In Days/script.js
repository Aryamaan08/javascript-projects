function getAge() {
    var birthYear = prompt("What year were you born in?");
    var age = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("Your age is " + age + " days.");
    h1.setAttribute('id', 'age');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('age').remove();
}
