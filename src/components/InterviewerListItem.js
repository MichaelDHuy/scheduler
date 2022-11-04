import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

// Therefore, the <InterviewerListItem> component should receive the following props:
// id:number - the id of the interviewer
// name:string - the name of the interviewer
// avatar:url - a url to an image of the interviewer
// selected:boolean - determines if an interviewer is selected or not and displays the name and applies appropriate styles if selected.
// setInterviewer:function - is run when the <InterviewerListItem> is clicked. This function receives the interviewer's id as an argument. It sets the selected interviewer.


export default function InterviewerListItem(props) {

  let interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
    "interviewers__item": !props.selected
  });

  let interviewerImage = classNames("interviewers__item-image", {
    "interviewers__item-image--selected": props.selected,
    "interviewers__item-image": !props.selected
  })
  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}