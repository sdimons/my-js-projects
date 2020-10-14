const firstName = 'Britney';
const lastName = 'Spears';
const age = 35;

let str;
// ES5
str = 'Hello, my name is ' + firstName + ' ' + lastName;
str = '<ul>'+ 
        '<li>First Name: ' + firstName + '</li>' +
        '<li>Last Name: ' + lastName + '</li>' +
        '<li>Age: ' + age + '</li>' +
      '</ul>'


// ES6
str = `
<ul>
  <li>FirstName: ${firstName}</li>
  <li>LastName: ${lastName}</li>
  <li>Age: ${age}</li>
  <li>Math.random: ${Math.random()}</li>
  <li>5 + 5: ${5 + 5}</li>
</ul>
`;
//console.log(str);
document.body.innerHTML = str;