import { ownJeansChoices } from "./ownsJeans.js"
import { saveSubmission } from "./saveSubmissionComponent.js"
import { submissionList } from "./submissions.js"
import { locationTypeChoices } from "./urbanDweller.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = ownJeansChoices()
    const locationsHTML = await locationTypeChoices()
    const buttonHTML = saveSubmission()
    const submissionListHTML = await submissionList()

    container.innerHTML = `
        ${jeanOwnershipHTML}
        ${locationsHTML}
        ${buttonHTML}
        ${submissionListHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()