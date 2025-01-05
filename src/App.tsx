import styled from 'styled-components'
import Navbar from './components/Navbar'
import GlobalStyles from './components/GlobalStyles'

function App() {
  const StyledApp = styled.div`
  background-color: var(--primary-hard);
 `

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Navbar />
      </StyledApp>
    </>
  )
}

export default App
