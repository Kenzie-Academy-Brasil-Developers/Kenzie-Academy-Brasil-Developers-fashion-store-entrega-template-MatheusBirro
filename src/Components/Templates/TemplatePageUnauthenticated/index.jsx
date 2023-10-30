import { Footer } from "../../Footer"
import { HeaderUnauthenticated } from "../../Headers/HeaderUnauthenticated"

export const TemplatePageUnauthenticated = ({children}) => {
    return(
        <>
            <HeaderUnauthenticated/>
                {children}
            <Footer/>
        </>
    )
}