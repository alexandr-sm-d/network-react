import React from 'react';
import { Field, reduxForm } from 'redux-form'

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }    

    return (
        <div>
            <h3>You need to login in this app!</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                    placeholder="Enter your email"
                    component={"input"}
                    name={"email"} />
            </div>
            <div>
                <Field type="text"
                    placeholder="Enter your password"
                    component={"input"}
                    name={"password"} />
            </div>
            <div>
                <Field type="checkbox"
                    component={"input"}
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

export default Login;