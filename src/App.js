import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import AboutIconLink from "./components/AboutIconLink"
import FeedbackForm from "./components/FeedbackForm"
import AboutPages from "./pages/AboutPages"
import { FeedbackProvider } from "./context/FeedackContext"

function App() {

    return  (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    } >
                    </Route>
                <Route path="/about" element={<AboutPages/>} />
                </Routes>

                <AboutIconLink />
            </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App