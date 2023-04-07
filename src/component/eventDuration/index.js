import React, { useState, useEffect } from 'react';

function EventDuration(props) {
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const startDate = new Date(props.startDate);
    const endDate = new Date(props.endDate);
    const durationInMs = endDate.getTime() - startDate.getTime();
    const durationInDays = Math.floor(durationInMs / (1000 * 60 * 60 * 24));
    const durationInHours = Math.floor((durationInMs / (1000 * 60 * 60)) % 24);
    setDuration(`${durationInDays} days ${durationInHours} hours`);
  }, [props.startDate, props.endDate]);

  console.log(props.startDate, props.endDate)
  if(props.startDate=== "" ){
    return(<><div>Total Event Duration : Please select Event Start  Date</div></>)
  }else if(props.endDate=== ""){
    return(<><div>Total Event Duration : Please select Event End Date</div></>)
  }else{
     return (
    <div>
      Event duration: {duration}
    </div>
  );
  }
 
}

export default EventDuration;
