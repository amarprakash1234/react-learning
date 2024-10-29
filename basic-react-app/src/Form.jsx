
function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form was submitted!");
}

export default function Form() {
    return(
        <form onSubmit={handleFormSubmit} action="/">
            <input placeholder="Write something" type="text" />
            <button>Submit</button>
        </form>
    );
}