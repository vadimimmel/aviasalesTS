export function convertDate(date, duration = 0) {
  //конвертируем date в мс
  const dateToMs = Date.parse(date)
  //конвертируем duration в мс
  const durationToMs = duration * 60 * 1000
  //получаем объект даты для date
  const dateObj = new Date(dateToMs + durationToMs)
  const hours = dateObj.getHours()
  const minutes = dateObj.getMinutes()
  //вспомогательная функция для добавления нуля, если цифра в значении единственная
  const addZero = (num) => {
    return String(num).length === 1 ? `0${num}` : `${num}`
  }

  return `${addZero(hours)}:${addZero(minutes)}`
}
