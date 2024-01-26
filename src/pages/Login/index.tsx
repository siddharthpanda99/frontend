
import Logo from '../../assets/react.svg'
import Input from '../../components/Input'

const Login = () => {

  const handleChange = () => {}

  return (
    <div style={{ textAlign: "left", maxWidth: 400, border: '1px solid #fff', borderRadius: 10, maxHeight: '500px', margin: 'auto', padding: 20 }}>
      <img src={Logo} className="logo react" alt="React logo" />
      <h3>Hello there, Sign in to continue</h3>
      <div>
        <div>
          <Input
            type="text"
            label="Username"
            value=''
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            value=''
            onChange={handleChange}
          />
          <button
            style={{ display: "block", marginTop: 10, width: "100%" }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login