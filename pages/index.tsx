import Link from 'next/link'
import flagsmith from 'flagsmith'
// The index page
export default function Home() {
  const checkoutUrl = flagsmith.getValue("checkout") || "/checkout"
  const login = (e)=>{
    e.preventDefault()
    flagsmith.identify(document.getElementById("username").value)
  }
  const logout = (e)=>{
    e.preventDefault()
    flagsmith.logout()
  }
  return (
    <div>
	      <h1>Welcome to the Flagsmith Store</h1>
          {flagsmith.identity && (
            <form onSubmit={logout}>
            <input type="submit" value="Log Out"/>
            </form>
          )}

          {!flagsmith.identity && (
            <form onSubmit={login}>
            <input type="text" id="username"/>
            <input type="submit" value="Log In"/>
            </form>
          )}
        
        <Link href="/checkout">
           Check Out
        </Link>
    </div>
  )
}
