// Write your code here
import './index.css'

const DestinationItem = props => {
  const {user} = props
  const {name, imgUrl} = user

  return (
    <li className="destination-item">
      <img className="destination-image" src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
