import React, { Component } from 'react';
import './SettingsEmailPassword.css';
import Button from '../../../components/UI/Button/Button';
class EmailForm extends Component {
    state = {
        // if user sees current email in input box then
        // needs to be derived from web token or props
        email: 'testemail@gmail.com',
        success: null,
        error: null
    };

    onSubmit = event => {
        event.preventDefault();
        // fetch made here
    };

    onChange = event => {
        this.setState({ email: event.target.value });
    };

    render() {
        const { email, success, error } = this.state;
        let errorMessage;
        let successMessage;
        if (error) {
            errorMessage = (
                <span className="form__msg form__msg--err" aria-live="polite">
                    {error}
                </span>
            );
        }
        if (success) {
            successMessage = (
                <span
                    className="form__msg form__msg--success"
                    aria-live="polite"
                >
                    {success}
                </span>
            );
        }
        return (
            <form onSubmit={this.onSubmit} className="form form--settings">
                <div className="form__section">
                    {errorMessage}
                    {successMessage}
                    <label className="form__label form__label--settings">
                        Email
                    </label>
                    <input
                        className="form__input form__input--settings"
                        type="text"
                        onChange={this.onChange}
                        value={email}
                        name="email"
                        required
                    />
                </div>
                <div>
                    <Button btnType="SettingsEmailPassword" type="submit">
                        Change Email
                    </Button>
                </div>
            </form>
        );
    }
}

export default EmailForm;
