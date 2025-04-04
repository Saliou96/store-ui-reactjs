import './App.css'
import Header from "./components/header/Header.jsx";
import "@fontsource/poppins"; // Default weight
import "@fontsource/poppins/500.css";
import Main from "./components/main/Main.jsx"; // Medium weight

function App() {

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <Main/>
            </div>
        </>
    )
}

export default App
