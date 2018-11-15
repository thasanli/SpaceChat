
import $ from 'jquery';
import navigate from '../navigation';
import { signUpWithEmailAndPassword } from '../session';
import { isValidEmail, isValidPassword } from '../validate';




export default
    function mountloginScreen() {
    $('#root').html(signUpScreen());
    initSignUpScreenListeners()
}

function signUpScreen() {
    let container = document.createElement('div');
  
    container.id = 'container';
    container.innerHTML = `
    <div class="returnBtnDiv">
    <div class="returnBtn">Return</div>
    </div>

    <div id="loadingLogo"> 
        <div class='chatTxt'> SPACE </div> 
            </br>
        <div class='chatTxt'> CHAT </div> 
    </div>  
     </br>

     <div class="inputContainer">
        <input placeholder="Nickname" type="text" class="inputs">
        <input placeholder="Email" type="text" class="inputs">
        <input placeholder="Password" type="password" class="inputs">
        <input placeholder="Password Confirmation" type="password" class="inputs">
     </div>

      <div class="btnContainer">
        <div class="btns" id = 'singUpBtn'>Sign Up</div>
      </div>
    `;
  
    return container;
  }
  
  function initSignUpScreenListeners() {
    $('.returnBtn').on('click', function() {
      navigate('login-screen');
    });
  
    $('#singUpBtn').on('click', function(){
      let email = $('#email').val();
      let password = $('#password').val();
      let passwordConfirmation = $('#password-confirmation').val();
  
      if (!isValidEmail(email)) {
        alert('Invalid e-mail');
      }
      else if (!isValidPassword(password)) {
        alert('Invalid password');
      }
      else if (password !== passwordConfirmation) {
        alert('Passwords do not match');
      }
      else {
        signUpWithEmailAndPassword(email, password)
      }
      
    });
  }

