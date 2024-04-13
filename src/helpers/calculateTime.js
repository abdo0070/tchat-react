export function calcTime(timestamp) {
  // Given timestamp
  const givenTimestamp = new Date(timestamp);

  // Current time
  let currentTime = new Date();
  // Add 68 minutes to the current time
  currentTime.setMinutes(currentTime.getMinutes() + 68);

  // Calculate the difference in minutes
  const timeInMinutes = (currentTime - givenTimestamp) / (1000 * 60);

  if (timeInMinutes < 60) {
    return `${parseInt(timeInMinutes)} minutes ago`;
  } else if (timeInMinutes < 60 * 24) {
    const hours = timeInMinutes / 60;
    return `${parseInt(hours)} hours ago`;
  } else if (timeInMinutes < 60 * 24 * 7) {
    const days = timeInMinutes / (60 * 24);
    return `${parseInt(days)} days ago`;
  } else {
    const weeks = timeInMinutes / (60 * 24 * 7);
    return `${parseInt(weeks)} weeks ago`;
  }
}
