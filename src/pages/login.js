import liff from "@line/liff"
function Login() {
  const loginbuggon = async (e) => {
    console.log("logins_________")
    await liff.login();
  }
  return (
    <div>
      <button onClick={loginbuggon}>logins</button>
    </div>
  )
}
export default Login;