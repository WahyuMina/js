const tombol = document.getElementById('tombol');
const hasil = document.getElementById('jwbfizzbuzz');
const input = document.getElementById('inputnomor');
tombol.addEventListener('click', function () {
    if(input.value === "" ){
        alert("Harap Diisi Data Nya?!");
    } else {
        hasil.innerHTML = `${input.value}`;
    } 
    if (input.value % 3 == 0) {
        hasil.innerHTML ="Fizz!";
            } 
        if (input.value % 5 == 0) {
        hasil.innerHTML ="Buzz!";
            }
    if ((input.value % 5 || input.value % 3) == 0) {
        hasil.innerHTML ="FizzBuzz!";
            }       

    if ( input.value < 0) {
        hasil.innerHTML ="Invalid";
    
    }
})