import AppLayout from "./AppLayout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactMe from "./Pages/ContactMe";
import Projects from "./Pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='my-project' element={<Projects />} />
          <Route path='contact-me' element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
