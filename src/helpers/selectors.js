
const matchAppointments = (appointments, ids) => {
  const matched = ids.map(id => appointments[id]);
  return matched;
}
//Go through a state array with a days object and an appointments object
//Match the appointments given in the days object to those in the appointments object
function getAppointmentsForDay(state, day) {
  let appointmentArr = [];
  state.days.map(dayObject => {
    if (dayObject.name === day) {
      dayObject.appointments.forEach(apptId => appointmentArr.push(apptId))
    }
  })
  return matchAppointments(state.appointments, appointmentArr);
}

function getInterview(state, interview) {
  if(!interview) {
    return null;
  }
  const interviewInfo = state.interviewers[interview.interviewer];
  return {
    student: interview.student,
    interviewer: interviewInfo
  }
}

function getInterviewersForDay(state, day) {
  let interviewersArr = [];
  state.days.map(dayObject => {
    if (dayObject.name === day) {
      dayObject.interviewers.forEach(intId => interviewersArr.push(intId))
    }
  })
  return matchAppointments(state.interviewers, interviewersArr);
}


module.exports = { matchAppointments, getAppointmentsForDay, getInterview, getInterviewersForDay };