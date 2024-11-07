
function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form was submitted!");
    console.log(event.target.children[0].value);
    event.target.children[0].value = "";
}

export default function Form() {
    return(
        <form onSubmit={handleFormSubmit} action="/abcd">
            <input style={{width: "300px", height: "50px"}} placeholder="Write something" type="text" />
            <br /><br />
            <button>Submit</button>
        </form>
    );
}