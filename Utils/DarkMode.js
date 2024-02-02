const DARK_MODE_ENABLED = 'enabled'
const DARK_MODE_DISABLED = 'disabled'

const enableDarkMode = () => {
  document.body.classList.add( 'dark-mode' )
  darkModeToggle.classList.add( 'dark-button' )
  localStorage.setItem( 'darkMode', DARK_MODE_ENABLED )
}

const disableDarkMode = () => {
  document.body.classList.remove( 'dark-mode' )
  darkModeToggle.classList.remove( 'dark-button' )
  localStorage.setItem( 'darkMode', DARK_MODE_DISABLED )
}

export const setInitialState = () => {
  const darkModeToggle = document.getElementById( 'darkModeToggle' )

  if( !darkModeToggle ) return

  localStorage.getItem('darkMode') === DARK_MODE_ENABLED ? enableDarkMode() : disableDarkMode()

  darkModeToggle.addEventListener( 'click', () => localStorage.getItem( 'darkMode' ) === DARK_MODE_ENABLED ? disableDarkMode() : enableDarkMode() )
}
