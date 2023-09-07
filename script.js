// Current Day Displayed

const currentDate = new Date();

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const currentDayIndex = currentDate.getDay();

const currentDayName = daysOfTheWeek[currentDayIndex];

const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

currentDayElement.textContent = `Current Day of the Week: ${currentDayName}`;

// Current Time Displayed
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

const currentUTCTime = currentDate.toISOString().substr(11, 8);

currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime}`;