

export const ProductCard = ({product}) => {
    return(
            <li key={product.id}>
                <img src={product.image} alt={`Imagem do produto, ${product.name}`} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <div>
                    <img src="" alt="" />
                    <small>SAIBA MAIS</small>
                </div>
            </li>
    )
}