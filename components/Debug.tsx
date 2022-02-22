import { useRouter } from 'next/router'
const ReactJson = typeof document === 'undefined' ? null : require('react-json-view').default
import flagsmith from 'flagsmith'
export default function Navbar() {
  const router = useRouter();
  if (typeof document === 'undefined') return null
  return (
    <div style={{position:"fixed", bottom:0, left:0, right:0, backgroundColor:"#f1f1f1"}}>
       <ReactJson displayObjectSize={false} displayDataTypes={false} name="flagsmith data" src={{
         identity: flagsmith.identity||undefined,
         flags: flagsmith.getAllFlags()
       }} />
    </div>
  )
}