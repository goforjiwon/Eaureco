import Home from './pages/Home';
import Problem from './pages/Problem';
import Solution from './pages/Solution';
import Comparison from './pages/Comparison';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Problem": Problem,
    "Solution": Solution,
    "Comparison": Comparison,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};