import React from 'react'

const Signup = () => {
    return (
        <div>
      <h1>Sign-Up</h1>
        <form className='form-group'>
          <input className="form-control origin" type='text' name='username'  placeholder="Username" value={""} /><br/>
          <input className="form-control origin" type='password' name='password'  placeholder="Password" value={""}/><br/>
          <input className="form-control origin" type='password' name='password'  placeholder="Confirm Password" value={""}/><br/>
          <input className="form-control origin" type='email' name='email'  placeholder="Email" value={""}/><br/>
          <input className="form-control origin" type='email' name='email'  placeholder="Confirm Email" value={""}/><br/>
          <button><input type='submit' value="Sign-Up" /></button>
        </form>
      </div>
    )
}

export default Signup