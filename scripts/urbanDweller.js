import { setSocioLocationId } from "./transientState.js"
// await functions must be marked with async

export const locationTypeChoices = async () => {
    const response = await fetch ("http://localhost:8088/socioLocations")
    const locations = await response.json()
    
    document.addEventListener("change", handleOwnershipChange)

    // let choicesHTML = "<h2>Which type of area do you live in?</h2>"
    // for (const location of locations) {
    //     choicesHTML += `<input type='radio' name='location' value='${location.id}'/> ${location.label}`
    // }

    // return choicesHTML


    let choicesHTML = "<h2>Which type of area do you live in?</h2>"

    const divStringArray = locations.map(
        (location) => {
            return `<input type='radio' name='location' value='${location.id}' />${location.label}</div>`
        }
    )
    
    choicesHTML += divStringArray.join("")
    return choicesHTML
}

 /*
     Note that you will have to use parseInt() to convert the value of the choice instead of JSON.parse() since the value of each radio button is an integer instead of a boolean.
 */
     const handleOwnershipChange = (changeEvent) => {
        if (changeEvent.target.name === "location") {
            const convertedToInteger = parseInt(changeEvent.target.value)
            setSocioLocationId(convertedToInteger)
        }
    }