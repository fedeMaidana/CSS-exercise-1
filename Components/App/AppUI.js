import { setInitialState } from '../../Utils/DarkMode.js'
import './app.css'

document.addEventListener( 'DOMContentLoaded', setInitialState )
window.addEventListener( 'storage', event => { if( event.key === 'darkMode' ) setInitialState() } )

document.querySelector( '#app' ).innerHTML = /* html */ `
  <main>
    <h1>Cambia entre el modo oscuro y el modo claro</h1>
    <button type="button" id="darkModeToggle">Cambiar</button>
  </main>
`