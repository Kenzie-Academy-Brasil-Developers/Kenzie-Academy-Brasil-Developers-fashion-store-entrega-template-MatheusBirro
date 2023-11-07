import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./Routes/RoutesMain"
import "./Styles/GlobalStyles.scss"

function App() {

  return (
    <>
      <RoutesMain />
      <ToastContainer position="top-right"/>
    </>
  )
}

export default App
