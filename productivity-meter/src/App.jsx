import { Component } from "react"
import {Header} from "./components/Header"
import { Container } from "./components/Container"

const appStyles = {
  fontFamily: 'Montserrat'
}

export class App extends Component {
  render(){
    return (
      <main style={appStyles}>
        <Header name={'Masyhar'}/>
        <Container />
      </main>
    )
  }
}

export default App
