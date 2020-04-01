import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/FormsControls';
import { validatorEmptyPost } from '../../utlis/validators/validatorsProfile';
import { login } from '../../redux/redusers/auth-reducer';
import { connect } from 'react-redux';

const Login = (props) => {
    const login = (formData) => {
        props.login(formData)
    }    

    return (
        <div>
            <h3>You need to login in this app!</h3>
            <LoginReduxForm onSubmit={login}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                    placeholder="Enter your email"
                    component={Input}
                    validate={[validatorEmptyPost]}
                    name={"email"} />
            </div>
            <div>
                <Field type="text"
                    placeholder="Enter your password"
                    component={Input}
                    validate={[validatorEmptyPost]}
                    type="password"
                    name={"password"} />
            </div>
            <div>
                <Field type="checkbox"
                    component={Input}
                    name={"rememberMe"} />remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default connect(null, {login})(Login);