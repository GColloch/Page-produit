import '../styles/FigurineItem.css'

function handleClick(figurineName) {
	alert(`Vous voulez acheter 1 ${figurineName}? Très bon choix 🌱✨`)
}

function FigurineItem({ cover, name, materiaux, price }) {
	return (
			<li className='lmj-figurine-item' onClick={() => handleClick(name)}>
				<span className='lmj-figurine-item-price'>{price}€</span>
				<img className='lmj-figurine-item-cover' src={cover}  alt={`${name} cover`} />
				<b>{name} </b>
				matériaux : {materiaux}
			</li>
	)
}

export default FigurineItem
