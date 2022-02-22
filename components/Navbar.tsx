import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter();
  const isIndex = router.route === '/';
    return (
        <div style={{opacity:isIndex?0.5:1}} className="d-flex  navbar flex-row" onClick={() => router.back()}>
          <div>
          <i className="fa-solid fa-arrow-left mr-2"></i>
          </div>
          <span className="ml-2">Back</span>
        </div>
    )
}