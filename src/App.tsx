import GlobalStyles from './components/GlobalStyles'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import FollowUs from './components/FollowUs'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const StyledApp = styled.div`
  background-color: var(--primary-hard);
 `

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Navbar />
        <FollowUs />
        <Newsletter />
        <Footer />
      </StyledApp>
    </>
  )
}

export default App
