import { saveSurveySubmission } from "./transientState.js"

const handleSurveySubmissionClick = (clickEvent) => {
   if (clickEvent.target.id === "save-submission") {
    saveSurveySubmission()
   }
}

export const saveSubmission = () => {
    document.addEventListener("click", handleSurveySubmissionClick)

    return "<div><button id='save-submission'>Save Submission</button></div>"
}
