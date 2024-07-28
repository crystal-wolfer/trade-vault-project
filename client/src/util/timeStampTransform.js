export default function timeStampTranform(input){

// Create a Date object using the timestamp
const date = new Date(input);

// Extract the date and time components
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

// Format the date and time as desired
const formattedDate = `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`;
const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

const output = `${formattedTime} - ${formattedDate}`;
return output;

}