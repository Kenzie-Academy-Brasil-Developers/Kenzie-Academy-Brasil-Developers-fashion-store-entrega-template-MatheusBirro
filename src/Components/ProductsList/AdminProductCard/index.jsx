import styles from "./style.module.scss"
import { useContext, useState } from "react"
import { ProductContext } from "../../../Providers/ProductsProvider"
import editBtn from "../../../assets/EditBtn.svg";
import delteBtn from "../../../assets/DeleteBtn.svg";
import { EditModal } from "../../Modal/EditProductModal";

export const AdminProductCard = ({product}) => {
    const { setProduct } = useContext(ProductContext)
    const [editIsOpen, setEditIsOpen] = useState(false)
    
    return(
            <li key={product.id} className={styles.product__card}>
                <img src={product.image} alt={`Imagem do produto, ${product.name}`} className={styles.product__img}/>
                <div className={styles.product__container_description}>
                    <div className={styles.product__container_text}>
                        <h3>{product.name}</h3>
                        <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>
                    <div className={styles.product__container_btn}>
                        <img src={editBtn} alt="Simbolo de edição" onClick={()=>{setEditIsOpen(true)}}/>
                        {editIsOpen?
                            <EditModal setEditIsOpen={setEditIsOpen}/> :
                            null
                        }
                        <img src={delteBtn} alt="Simbolo de lixeira" />
                    </div>
                </div>
            </li>
    )
}