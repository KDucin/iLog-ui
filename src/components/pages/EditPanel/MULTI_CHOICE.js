
const MULTI_CHOICE = (answer) => {
    return(
        <>
        {console.log("multi")}
         <label class="answer-container">{answer.name}
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
        </>
    )}

export default MULTI_CHOICE