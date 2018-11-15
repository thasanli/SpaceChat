import $ from 'jquery';
import {
    socialMediaLogIn,
    createPersistantSession,
    signInEmailAndPassword,
    providerGoogle,
    providerFacebook
} from '../session';
import mountSignUpScreen from './signUpScreen';

export default
    function mountloginScreen() {
    $('#root').html(loginScreen());
    initLoginScreenListeners();
}

function loginScreen() {
    let container = document.createElement('div');
    container.id = 'container';
    container.innerHTML = `
    <div id="loadingLogo"> 
        <div class='chatTxt'> SPACE </div> 
            </br>
        <div class='chatTxt'> CHAT </div> 
    </div>  
            </br>   </br>
    <div class="inputContainer">
            <input type='text' class='inputs' id='usernameInput' placeholder="Nickname or Email address"> 
            <input type='password' class='inputs' id='passwordInput' placeholder="Password">
    </div> 
    <div class='loginWithSMcontainer'>
        <a>
            <img src='./img/facebook.png' class='iconsSM'  id="facebookLogInBtn" alt='facebook_logo_icon'>
        </a>
        <a>
            <img src='./img/google.png' class='iconsSM' id="googleLogInBtn"  alt='google_logo_icon'>
        </a>
    </div>

    <div class='btnContainer'>
        <div class='btns' id = 'singInBtn'> SIGN IN  </div>
        <div  class='btns' id = 'singUpBtn'> SIGN UP  </div>
    </div>
    
 `
    return container;
}


function initLoginScreenListeners() {
    $('#googleLogInBtn').click(function () {
        createPersistantSession(socialMediaLogIn(providerGoogle))
    });
    $('#singUpBtn').click(function () {
        mountSignUpScreen()
    })
    $('#singInBtn').click(function () {
        let email = $('#usernameInput').val();
        let password = $('#passwordInput').val();
        signInEmailAndPassword(email, password)

    });
    $('#facebookLogInBtn').click(function () {
        createPersistantSession(socialMediaLogIn(providerFacebook))

    })

}
