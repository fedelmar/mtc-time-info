import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import { getHourInfo, getLocalSolarTime } from '../utils/utils'

export const Clock = ({ lng, isSolarTime = false }) => {
  const [date, setDate] = useState(new Date())
  const [solarDate, setSolarDate] = useState()
  const [legalHourInfo, setLegalHourInfo] = useState()
  const [solarHourInfo, setSoalarHourInfo] = useState()

  const refreshClock = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  useEffect(() => {
    const callFunction = async () => {
      const localTime = await getLocalSolarTime(
        date,
        lng,
        date.getTimezoneOffset()
      )
      setSolarDate(localTime)
    }

    if (lng && date) {
      callFunction()
    }
  }, [lng, date])

  useEffect(() => {
    setLegalHourInfo(getHourInfo(parseInt(format(date, 'HH'))))
    if (solarDate) {
      setSoalarHourInfo(getHourInfo(parseInt(format(solarDate, 'HH'))))
    }
  }, [date, solarDate])

  return isSolarTime ? (
    <>
      <h2>{solarDate && `Hola Solar: ${format(solarDate, 'HH:mm')}`}</h2>
      {solarHourInfo && (
        <p>
          Animal: {solarHourInfo.animal} - Órgano: {solarHourInfo.organo}
        </p>
      )}
    </>
  ) : (
    <>
      <h2>Hora Legal: {format(date, 'HH:mm')}</h2>
      {legalHourInfo && (
        <p>
          Animal: {legalHourInfo.animal} - Órgano: {legalHourInfo.organo}
        </p>
      )}
    </>
  )
}
