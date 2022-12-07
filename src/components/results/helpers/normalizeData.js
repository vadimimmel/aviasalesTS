import { convertPrice } from './convertPrice'
import { convertDuration } from './convertDuration'
import { countLayovers } from './countLayovers'
import { convertDate } from './convertDate'
import { addWordEnding } from './addWordEnding'

export function normalizeData(dataObj) {
  const { price, carrier, segments, id } = dataObj
  const [there, back] = segments
  const { origin, destination, date, stops, duration } = there
  const {
    origin: backOrigin,
    destination: backDestination,
    date: backDate,
    stops: backStops,
    duration: backDuration,
  } = back

  return {
    price: convertPrice(price),
    iconLink: `//pics.avs.io/99/36/${carrier}.png`, //нужно получить иконку по этому коду
    route: `${origin} - ${destination}`,
    backRoute: `${backOrigin} - ${backDestination}`,
    duration: convertDuration(duration),
    backDuration: convertDuration(backDuration),
    layovers: addWordEnding(countLayovers(stops)),
    backLayovers: addWordEnding(countLayovers(stops)),
    stops: stops.join(', '),
    backStops: backStops.join(', '),
    date: `${convertDate(date)} - ${convertDate(date, duration)}`,
    backDate: `${convertDate(backDate)} - ${convertDate(
      backDate,
      backDuration
    )}`,
    id: id,
  }
}
