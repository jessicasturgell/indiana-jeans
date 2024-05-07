/*
    Responsibility: Provide UI controls fro survey-takers to choose 'yes' or 'no' for ownership of blue jeans

    Strategy:
        1. A component function that produces HTML for two radio buttons for 'Yes' and 'No"
*/

// creates button. name attribute affects ability to assign multiple inputs.
export const ownJeansChoices = () => {
    let html = "<h2>Do you own a pair of blue jeans?</h2>"
    html += "<input type='radio' name='ownsJeans' value='true' /> Yes"
    html += "<input type='radio' name='ownsJeans' value='true' /> No"
    return html
}