import './App.css'
import { useGeolocated } from 'react-geolocated'
import { Clock } from './components/Clock'

const App = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false
      },
      userDecisionTimeout: 5000
    })

  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        {coords && <Clock lng={coords.longitude} isSolarTime={true} />}

        {!isGeolocationAvailable ? (
          <div>Su navegador no soporta geolocalización</div>
        ) : !isGeolocationEnabled ? (
          <div>Geolocalización no habilitada</div>
        ) : coords && coords.latitude && coords.longitude ? (
          <div>
            Latitud: {coords.latitude} - Longitud: {coords.longitude}
          </div>
        ) : null}
      </header>
    </div>
  )
}

export default App
