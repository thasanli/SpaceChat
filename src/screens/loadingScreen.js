

import $ from 'jquery';
import { session } from '../session';



export default
    function mountLoadingScreen() {
    $('#root').html(loadingScreen());

    setTimeout(() => {
        session();
    }, 5000);
}

function loadingScreen() {
    let container = document.createElement('div');
    container.id = 'container';
    container.innerHTML = `
    
    <div id="loadingLogo"> 
        <div class='chatTxt'> SPACE </div> 
            </br>
        <div class='chatTxt'> CHAT </div> 
    </div>  
    
    <div id='loadingAnimation'> Loading your comfy space </div> 
   

    `

    return container;

}


