export default function formatEventDateTime(start_date) {
  const date = new Date(start_date);

  const options = { month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  const day = date.getDate();
  const formattedDay = day < 10 ? `0${day}` : day;

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHour = hours % 12 || 12; // convert 0 to 12 for 12am/pm

  return {
    month: formattedDate.split(' ')[0],
    day: formattedDay,
    time: `${formattedHour}${minutes > 0 ? ':' + minutes : ''}${ampm}`
  };
}
