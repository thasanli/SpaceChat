

import $ from 'jquery';
import {session} from '../session';



export default
    function mountLoadingScreen() {
    $('#root').html(loadingScreen());

    setTimeout(() => {
        session();
    }, 1);
}

function loadingScreen() {
    let container = document.createElement('div');
    container.id = 'loading-screen';
    container.classList.add('loading-screen');
    container.innerHTML = `
    <img src="./img/loadingImg.png" alt="Loading_image" class="loadingImg">
    `;

    return container;
}