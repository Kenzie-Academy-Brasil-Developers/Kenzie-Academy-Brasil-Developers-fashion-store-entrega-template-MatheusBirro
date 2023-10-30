import { Footer } from "../../Footer"
import { HeaderAuthenticated } from "../../Headers/HeaderAuthenticated"

export const TemplatePageAuthenticated = ({children}) => {
    return(
        <>
            <HeaderAuthenticated/>
                {children}
            <Footer/>
        </>
    )
}