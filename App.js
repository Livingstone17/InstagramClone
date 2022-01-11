import Bio from './modules/Bio.js';
import Nav from './modules/Nav.js';
import Gallery from './modules/Gallery.js';



const App = () =>{
    return`
        ${Nav()}
        <div class="container">
        ${Bio()}
        ${Gallery()}
        </div>
       
    `
}

document.getElementById('root').innerHTML = App();