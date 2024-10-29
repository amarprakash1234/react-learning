import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username cannot be empty!';
    } 
  
    return errors;
};

export default function CommentsForm({addNewComment}) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // });

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5,
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return {...currData, [event.target.name]: event.target.value}
    //     });
    // };

    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5,
    //     });

    // };

    return(
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={formik.handleSubmit} action="">
                <label htmlFor="username">Username</label>
                <input id="username" name="username" placeholder="username" type="text" value={formik.values.username} onChange={formik.handleChange}/>
                {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null}
                <br /><br />
                <label htmlFor="remarks">Remarks</label>
                <textarea id="remarks" placeholder="add few remarks" name="remarks" value={formik.values.remarks} onChange={formik.handleChange}></textarea>
                <br /><br />
                <label htmlFor="rating">Rating</label>
                <input id="rating" name="rating" placeholder="rating" type="number" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange}/>
                <br /><br />
                <button type="submit">Add comment</button>
            </form>
        </div>
    )
}