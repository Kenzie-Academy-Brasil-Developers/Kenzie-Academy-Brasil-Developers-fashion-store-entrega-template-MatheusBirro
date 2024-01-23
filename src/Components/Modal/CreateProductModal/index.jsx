import { useContext, useEffect, useState } from "react"
import styles from "./styles.module.scss"
import { ProductContext } from "../../../Providers/ProductsProvider"
import closeBtn from "../../../assets/CloseBtn.svg"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchemaCreateProduct } from "../../FormSchema"
import { useForm } from "react-hook-form";
import editBtnWhite from "../../../assets/EditBtnWhite.svg"
import imgDefault from "../../../assets/ImageDefault.svg"



export const CreateProductModal = ({ setCreateIsOpen }) => {
  const [loading, setLoading] = useState(false)
  const {createProduct, renderProducts} = useContext(ProductContext)

  const { register, handleSubmit, formState: {errors}} = useForm({
    values:{
      image: imgDefault, 
  },
  resolver: zodResolver(formSchemaCreateProduct) 
  });

  const submit = (payload) => {
    createProduct(payload, setCreateIsOpen)
  }

  useEffect(() => {
    renderProducts({setLoading})
  },[])

  return (
    <div className={styles.modalOverlay} >
      <div className={styles.modalBox}>
        <div className={styles.modal__header}>
          <h3>EDITAR PRODUTO</h3>
          <button className={styles.closeButton} onClick={() => {}}>
            <img src={closeBtn} alt="Botão de fechar" onClick={()=>{setCreateIsOpen(false)}}/>
          </button>
        </div>
          <form className={styles.product__form} onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="NOME DO PRODUTO" {...register("name")}/>
                {errors.name ? <small >{errors.name.message}</small> : null }
                <input type="text" placeholder="PREÇO (R$)" {...register("price")}/>
                {errors.price ? <small >{errors.price.message}</small> : null }
                <input type="text" placeholder="IMAGEM DO PRODUTO (URL)" {...register("image")}/>
                {errors.image ? <small >{errors.image.message}</small> : null }
                <textarea type="text" placeholder="DESCRIÇÃO RESUMIDA" {...register("description")}/>
                {errors.description ? <small >{errors.description.message}</small> : null }
                <div>
                    <button className={styles.login__btn} type="submit" disabled={loading}>
                        <img src={editBtnWhite} alt="Simbolo de editar" />
                        <p>EDITAR PRODUTO</p>
                    </button>
                </div>
            </form>
      </div>
    </div>
  )
}