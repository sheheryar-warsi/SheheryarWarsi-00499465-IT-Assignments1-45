let Name :string = '';
Name = prompt('What is your name?') || ''

let lowercase = Name.toLowerCase();
let uppercase = Name.toLocaleUpperCase()
let titlecase = Name.split(' ').map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ');

if(Name !== null && Name !== ''){

    alert(`Hello ${Name}, here is your word in
    LowerCase= ${lowercase}
    UpperCase= ${uppercase}
    TitleCase= ${titlecase}`)

    }
else{
    alert(`Please fill your name!`)
}
