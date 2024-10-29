function handleClick(event) {
    console.log(event);
    console.log("Hello!");
}
function handleMouseOver() {
    console.log("Bye!");
}
function handleDblclick() {
    console.log("You double click!");
}

export default function Button() {
    return ( 
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloribus architecto doloremque consectetur optio, officiis laudantium accusantium obcaecati dolores laborum impedit eveniet, voluptatum ut exercitationem cumque molestias maxime. Maxime, harum.</p>
            <button onDoubleClick={handleDblclick}>Double Click me!</button>
        </div> 
    );


}