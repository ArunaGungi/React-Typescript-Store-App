import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"
import ProductPage from "./components/ProductPage"
import TopSellers from "./components/TopSellers"


function App() {

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />

       <div className="rounded w-full flex justify-center flex-wrap">
        <Routes>
          <Route path="/" element={<MainContent/>}/>
          <Route path="/product/:id" element={<ProductPage/>}></Route>
        </Routes>
       </div>
       <TopSellers/>
        
      </div>
      
    </BrowserRouter>
  )
}

export default App