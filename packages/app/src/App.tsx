import Main from './components/Main'
import NavBar from './components/NavBar'
import Web3Provider from './web3/provider'

function App() {

  return (
    <Web3Provider>

      <NavBar />

      <Main />

    </Web3Provider>
  )
}

export default App
