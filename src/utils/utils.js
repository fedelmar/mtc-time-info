import SunCalc from 'suncalc3'

export const getHourInfo = (hour) => {
  switch (hour) {
    case 1:
    case 2:
      return { animal: 'Buey', organo: 'Hígado' }
    case 3:
    case 4:
      return { animal: 'Tigre', organo: 'Pulmón' }
    case 5:
    case 6:
      return { animal: 'Conejo', organo: 'Intestino grueso' }
    case 7:
    case 8:
      return { animal: 'Dragón', organo: 'Estómago' }
    case 9:
    case 10:
      return { animal: 'Serpiente', organo: 'Bazo' }
    case 11:
    case 12:
      return { animal: 'Caballo', organo: 'Corazón' }
    case 13:
    case 14:
      return { animal: 'Conejo', organo: 'Intestino grueso' }
    case 15:
    case 16:
      return { animal: 'Mono', organo: 'Vejiga' }
    case 17:
    case 18:
      return { animal: 'Gallo', organo: 'Riñón' }
    case 19:
    case 20:
      return { animal: 'Perro', organo: 'Maestro Corazón' }
    case 21:
    case 22:
      return { animal: 'Jabalí', organo: 'Triple recalentador' }
    case 23:
    case 24:
      return { animal: 'Rata', organo: 'Vesícula Biliar' }
    default:
      break
  }
}

export const getLocalSolarTime = async (date, lng, utcOffset) => {
  const offset = (utcOffset / 60) * -1

  return  SunCalc.getSolarTime(date, lng, offset)
}
