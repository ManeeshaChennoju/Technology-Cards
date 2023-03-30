import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={className}>
      <h3> {title} </h3>
      <p className="para"> {description} </p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
