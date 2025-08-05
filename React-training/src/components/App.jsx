import { Route, Routes } from "react-router-dom"


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" elements={ } >
          <Route index element={ } />
          <Route paath="register" />
          <Route path="login" />
          <Route path="contacts" />
        </Route>
      </Routes>
    </div>
  )
}

export default App
