import Comparison from './pages/Comparison';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Solution from './pages/Solution';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Comparison": Comparison,
    "Contact": Contact,
    "Home": Home,
    "Problem": Problem,
    "Solution": Solution,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};