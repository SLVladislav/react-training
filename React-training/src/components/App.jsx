import { Route, Routes } from "react-router-dom"
import NotFound from "../page/NotFound"
import HomePage from "../page/HomePage"
import Layout from "../page/Layout"


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" elements={<Layout/> } >
          <Route index element={<HomePage/> } />
          <Route paath="/register" />
          <Route path="/login" />
          <Route path="/contacts" />
          <Route path="*" element={NotFound} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
