function Title({arr}) {
    let name  = "Amar Prakash"
    return (
        <div>
            {/* <p>2 * 2 = {2 * 2}</p>
            <p>Hi, {name.toUpperCase()}</p> */}
            <p>{arr.map( (ele, i) => <li key={i}>{ele}</li> )}</p>
        </div>
    );
}


export default Title;

// function sum(a, b) {
//     return a+b;
// }

// export {Title, sum};
