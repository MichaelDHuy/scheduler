import React from "react";
import DayListItem from "components/DayListItem.js";

export default function DayList(props) {

  const dayMapped = props.days.map((dayElement) => {
  return (
    <DayListItem
      key={dayElement.id}
      // name={dayElement.name}
      // spots={dayElement.spots} 
      // selected={dayElement.name === props.value}
      // setDay={props.onChange} 
      selected={dayElement.name === props.day}
      setDay={props.setDay}
      {...dayElement}
    />
    )
  });

  return <ul>{dayMapped}</ul>
}