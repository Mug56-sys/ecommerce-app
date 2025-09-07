import { useNavigate } from 'react-router-dom'

export default function Method() {
  const navigate=useNavigate()
    return (
      <div>
        <button onClick={()=>{navigate('/checkout/payment')}}>Next</button>
      </div>
    )
}
