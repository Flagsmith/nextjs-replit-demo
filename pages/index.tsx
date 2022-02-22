import Link from 'next/link'

export default function Home() {
  return (
    <div>
	      <h1>Welcome to the Flagsmith Store</h1>
        <Link href="/checkout">
           Check Out
        </Link>
    </div>
  )
}