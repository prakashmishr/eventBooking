import React, { useState } from 'react';

function App() {
  const [eventStartDateTime, setEventStartDateTime] = useState("");
  const [setupDateTime, setSetupDateTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEventStartDateTimeChange = (event) => {
    setEventStartDateTime(event.target.value);
  }

  const handleSetupDateTimeChange = (event) => {
    setSetupDateTime(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Parse input values as dates
    const eventStartDate = new Date(eventStartDateTime);
    const setupDate = new Date(setupDateTime);

    // Check if setup date and time is before event start date and time
    if (setupDate.getTime() >= eventStartDate.getTime()) {
      setErrorMessage("Setup date and time should be before event start date and time.");
      return;
    }

    // Check if setup date is after event date
    const eventEndDate = new Date(eventStartDate.getTime() + (2 * 60 * 60 * 1000)); // 2 hours after event start time
    if (setupDate.getTime() >= eventEndDate.getTime()) {
      setErrorMessage("Setup date and time should be before event end date and time.");
      return;
    }

    // Check if setup date is more than 1 day before event
    const oneDayBeforeEvent = new Date(eventStartDate.getTime() - (24 * 60 * 60 * 1000)); // 1 day before event start time
    if (setupDate.getTime() < oneDayBeforeEvent.getTime()) {
      setErrorMessage("Setup date and time should not be more than 1 day before event start date and time.");
      return;
    }

    // Validation passed, do something with the form data
    console.log("Form submitted successfully");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Start Date and Time:</label>
          <input type="datetime-local" value={eventStartDateTime} onChange={handleEventStartDateTimeChange} />
        </div>
        <div>
          <label>Setup Date and Time:</label>
          <input type="datetime-local" value={setupDateTime} onChange={handleSetupDateTimeChange} />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
