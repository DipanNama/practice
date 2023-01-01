import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Social Face</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illo, qui voluptates alias ex enim molestias minima eveniet labore illum.</p>
          <span>Do you have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login