//alert('Login JS');

const correctEmail = 'eksadevi@gmail.com';
const correctPassword = '0807';

const messageContainer = document.getElementById('message-container');

function cekLogin(){
    const userEmail = document.getElementById('fEmail').value;
    const userPassword = document.getElementById('fPassword').value;

if ((userEmail != correctEmail) || (userPassword != correctPassword)){
    messageContainer.innerHTML = "<p class='error-message'>Login Gagal, Password atau Email Salah !</p>";
}else{
    messageContainer.innerHTML = "<p class='success-message'>Login Berhasil . . .</p>";
}

}