import React from 'react'

const Login = () => {
    return (
        <div>
      <h1>Login</h1>
        <form className='form-group'>
          <input className="form-control origin" type='text' name='username'  placeholder="Username" value={""} /><br/>
          <input className="form-control origin" type='password' name='password'  placeholder="Password" value={""}/><br/>
          <input className="form-control origin" type='email' name='email'  placeholder="Email" value={""}/><br/>
          <button><input type='submit' value="Login" /></button>
        </form>
      </div>
    )
}

export default Login