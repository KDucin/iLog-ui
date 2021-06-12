
import './CHOICE.css'

const SINGLE_CHOICE = (answer) => {
    return(
        <>
        {console.log("single")}
        <label class="answer-container">{answer.name}
        <span class="checkmark">
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </span>
        </label>
        </>
    )}

export default SINGLE_CHOICE