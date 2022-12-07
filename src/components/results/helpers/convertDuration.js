export function convertDuration(durationInMinutes) {
  const minutes = durationInMinutes % 60
  const hours = (durationInMinutes - minutes) / 60

  return `${hours}ч ${minutes}м`
}
