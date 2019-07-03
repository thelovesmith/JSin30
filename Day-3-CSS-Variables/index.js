//Select all inputs on the page with in the div with the class .controls and set them to the JS variable inputs 
var inputs = document.querySelectorAll('.controls input');



// function to be executed when somehting changes in the targeted object
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix );
    console.log(document.documentElement.style, 'document element');
    console.log('name', this.name);
    console.log('value', this.value);
    
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
