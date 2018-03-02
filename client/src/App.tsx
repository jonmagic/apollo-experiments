import * as React from 'react'
import './App.css'

const logo = require('./logo.svg')

interface Props {}
interface State {
  ping: { now: number, status: string } | null
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      ping: null,
    }
  }

  componentDidMount() {
    (async() => {
      try {
        const response = await fetch('/_ping')
        const ping = await response.json()
        this.setState({ ping })
      } catch (e) {
        this.setState({ ping: { now: 0, status: 'failed' } })
      }
    })()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Current state: {JSON.stringify(this.state.ping)}</p>
      </div>
    )
  }
}

export default App
