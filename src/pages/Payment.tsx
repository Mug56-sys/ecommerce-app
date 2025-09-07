import { useNavigate } from 'react-router-dom'

export default function Payment() {
  const navigate=useNavigate()
    return (
      <div>
        <button onClick={()=>{navigate('/checkout/success')}}>Finish</button>
      </div>
    )
}
