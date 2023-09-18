import { Header } from "../components"
import {Navbar} from "../components"
import { Outlet } from "react-router-dom"

function HomeLayout() {
  return (
    <>
    <Header/>
    <Navbar/>
   <main className="align-elements"> <Outlet/></main>
    </>
  )
}

export default HomeLayout