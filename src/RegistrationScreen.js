import React, { useState } from 'react';

const RegistrationScreen = () => {


    const [ state, setState ] = useState(
        {
            showErrors: false
        }
    )
    // Undefined only before return
    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneField;
    let tcsCheckBox;

    const registerUser = () => {
        const errors = [];
        // Validate the user's input
        if(firstNameField.value.length === 0) {
            errors.push("Please enter your first name!");
        }

        if(lastNameField.value.length === 0) {
            errors.push("Please enter your last name!");
        }

        if(emailField.value.length === 0) {
            errors.push("Please enter your email!");
        }

        if(passwordField.value.length === 0) {
            errors.push("Please enter your password!");
        }

        if(tcsCheckBox.checked === false) {
            errors.push("You need to accept terms & conditions.");
        }

        if(errors.length > 0) {
            setState(
                {
                    showErrors: true,
                    errors: errors
                }
            )
        } else {
            setState(
                {
                    showErrors: false,
                    errors: null
                }
            )
        }
    }

    return (
        <div className="container mt-5 mb-5" 
        style={
            {
                maxWidth: "40em"
            }
        }>
        <h1>Register your Interest</h1>
        <br/>

        {
            state.showErrors === true && 
            <div className="error-messages alert alert-danger">
                <ol>
                { 
                    state.errors.map(
                        (error) =>
                            <li>
                                {error}
                            </li>
                    ) 
                }
                </ol>
            </div>
        }

        <label>Enter your firstname *</label>
        <input 
        ref={(elem) => firstNameField = elem}
        className="field form-control" name="firstName" type="text" />

        <label>Enter your lastname *</label>
        <input 
        ref={(elem) => lastNameField = elem}
        className="field form-control" name="lastName" type="text" />

        <label>Enter your email *</label>
        <input 
        ref={(elem) => emailField = elem}
        className="field form-control" name="email" type="text" />

        <label>Enter a password *</label>
        <input 
        ref={(elem) => passwordField = elem}
        className="field form-control" name="password" 
        autocomplete="off" type="password" />

        <label>Enter your phone (optional)</label>
        <input 
        ref={(elem) => phoneField = elem}
        className="field form-control" name="phone" type="text" />

        <br/><br/>

        <label>Upload your profile picture</label>
        <input className="field form-control" id="photo" name="file" 
        type="file" multiple="multiple"/>

        <br/><br/>

        <label>Do you agree to terms &amp; conditions? *</label>
        <input 
        ref={(elem) => tcsCheckBox = elem}
        className="checkbox" name="termsConditions" type="checkbox" /> Yes

        <br/><br/>

        <button 
        className="btn btn-primary"
        onClick={registerUser}
        style={
            {
                padding: "10px", 
                fontSize: "16px"
            }
        }>
            Register your Interest
        </button>
    </div>
    )
}

export default RegistrationScreen;