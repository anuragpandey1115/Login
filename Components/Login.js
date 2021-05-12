import React from 'react';
import "../App.css";

const Login = () => {
    // handleSubmit = () => {
    //     alert(`${this.state.emain}  Registered Successfully !!!!`)
    // }
    return (
        <>
            <div>
                <form onSubmit
                // ={this.handleSubmit}
                >
                <div className="container1" >
                    <legend className="rit">Signin</legend>
                    <div className="mains">
                        <label>Email:  </label>
                        <input className="inp" type="email"  name="email address" required placeholder="enter your email" />
                    </div>
                    <div className="mains">
                        <label>Password:  </label>
                        <input className="inp" type="password"  name="password" required placeholder="enter your password" />
                    </div>
                    <div className="mains">
                        <label>Confirm Password:  </label>
                        <input className="inp" type="password"  name="password" required placeholder="re enter your password" />
                    </div>
                    <div className="inp2">Forgot Password?</div>
                    <div className="inp1">
                        <input className="inp1"
                            type="submit" value="Sign in"
                        />
                    </div>
                    <div className="inp3">
                        <a href="./Signup">Signup</a>
                    </div>
                </div>
                </form>
            </div >
        </>
    )
}
export default Login ;