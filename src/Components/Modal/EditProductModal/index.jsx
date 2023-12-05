import { useContext, useState } from "react"
import styles from "./styles.module.scss"
import { ProductContext } from "../../../Providers/ProductsProvider"
import closeBtn from "../../../assets/CloseBtn.svg"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchemaEditProduct } from "../../FormSchema"
import { useForm } from "react-hook-form";
import plusBtn from "../../../assets/PlusBtn.svg"



export const EditModal = ({ setEditIsOpen }) => {
  const [loading, setLoading] = useState(false)
  const { cartProductList, priceCart, quantityProductCart, removeProductCart, cartProductListFull, addProductCart } = useContext(ProductContext)

  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(formSchemaEditProduct) 
});

    const submit = (payload) => {
        UserLogin(payload, setLoading)
    }

  return (
    <div className={styles.modalOverlay} >
      <div className={styles.modalBox}>
        <div className={styles.modal__header}>
          <h3>NOVO PRODUTO</h3>
          <button className={styles.closeButton} onClick={() => {}}>
            <img src={closeBtn} alt="Botão de fechar" onClick={()=>{setEditIsOpen(false)}}/>
          </button>
        </div>
        <form className={styles.login__form} onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="NOME" {...register("name")}/>
                {errors.name ? <small >{errors.name.message}</small> : null }
                <input type="text" placeholder="PREÇO (R$)" {...register("price")}/>
                {errors.price ? <small >{errors.price.message}</small> : null }
                <input type="text" placeholder="IMAGEM (URL)" {...register("image")}/>
                {errors.image ? <small >{errors.image.message}</small> : null }
                <input type="text" placeholder="DESCRIÇÃO RESUMIDA" {...register("description")}/>
                {errors.description ? <small >{errors.description.message}</small> : null }
                <div>
                    <button className={styles.login__btn} type="submit" disabled={loading} >
                        <img src={plusBtn} alt="Simbolo de adicionar" />
                        <p>NOVO PRODUTO</p>
                    </button>
                </div>
            </form>
      </div>
    </div>
  )
}