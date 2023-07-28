import './Content.css'
import { Routes, Route } from 'react-router-dom'
import Home from "../../views/examples/Home";
import About from "../../views/examples/About"
import Param from "../../views/examples/Param"
import NotFound from "../../views/examples/NotFound"

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" exact element={<About />}/>
            <Route path="/param/:id" exact element={<Param />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/*" exact element={<NotFound />}/>
        </Routes>
    </main>
)

export default Content