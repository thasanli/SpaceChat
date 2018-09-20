import $ from 'jquery';
import { logInWithGoogle, createPersistantSession } from '../session';
import mountSignUpScreen from './signUpScreen';

export default
    function mountloginScreen() {
    $('#root').html(loginScreen());
    initLoginScreenListeners();
}

function loginScreen() {
    let container = document.createElement('div');
    container.id = 'login-screen';
    container.classList.add('login-screen');
    container.innerHTML = `
    <div class='loginContainer'>
    <div class='logoContainer'>
        <img src='./img/logo.jpg' class='logoImage' alt='logo image'>
    </div>
    <div class='inputsContainer'>
        <div class='input1'><span class='usernameTxt'> Username </span><input type='text' class='usernameInput'> </div>
        <div class='input2'><span class='passwordTxt'> Password </span><input type='password' class='passwordInput'></div>
    </div>
    <div class='socialMedia'>
        <a href='https://www.facebook.com/'>
            <img src='./img/facebook.png' class='facebookImg' alt='facebook_logo_icon'>
        </a>
        <a href='#' id="google-login-btn">
            <img src='./img/insta.png' class='instagramImg' alt='instagram_logo_icon'>
        </a>
    </div>
    <div class='singInAndUpBtn'>
        <button class='singInBtn'> SIGN IN </button>
        <button class='singUpBtn'> SIGN UP </button>
    </div>
</div>
    
 `
    return container;
}


function initLoginScreenListeners() {
    $('#google-login-btn').on('click', function () {
        createPersistantSession(logInWithGoogle)
    });
    $('.singUpBtn').on('click', function () {
        mountSignUpScreen()
    })

}


