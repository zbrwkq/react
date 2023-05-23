import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Experience from '../pages/Experience'
import NotFound from './NotFound'

const Routeur = () => {
    return (
        <Router>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route exact path='/' element={<Home />} />
                <Route exact path='/experience/:id' element={<Experience />} />
                <Route path='/About' element={<About />} />
            </Routes>
        </Router>
    )
}

export default Routeur
