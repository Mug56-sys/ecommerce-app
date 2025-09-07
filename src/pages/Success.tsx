import { useNavigate } from "react-router-dom"

export default function Success() {
const navigate=useNavigate()
    return (
      <div>
        <button onClick={()=>{navigate('/home')}}>Go Home</button>
      </div>
    )
}
