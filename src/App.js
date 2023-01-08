import './App.css'
import { format } from 'date-fns'
import Clock from './components/Clock'
import { getHourInfo } from './utils/utils'

const App = () => {
  const date = new Date()
  const hourInfo = getHourInfo(parseInt(format(date, 'hh')))

  return (
    <div className="App">
      <header className="App-header">
        <Clock />

        <p>
          Animal: {hourInfo.animal} - Órgano: {hourInfo.organo}
        </p>
      </header>
    </div>
  )
}

export default App
