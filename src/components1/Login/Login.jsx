import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../commom/FormsControls/FormsComtrols";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reduser";
import { Redirect } from "react-router-dom";
import style from "./../commom/FormsControls/FormsComtrols.module.css"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          validate={[required]}
          component={Input}
          type={"password"}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememderMe"} component={Input} />{" "}
        remember me
      </div>
      {props.error && <div className={style.formSummaryError}>
                  {props.error}
  </div> }
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

if(props.isAuth){
  return <Redirect to={"/profile"}/>
}

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToPrors = (state) => (
{
  isAuth: state.auth.isAuth
}
)


export default connect(mapStateToPrors, { login })(Login);
