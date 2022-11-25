import {Routes, Route} from "react-router-dom"

import {MainLayout} from "./layouts/MainLayout";
import {Holidays} from "./components";

function App() {
    return (
        <Routes>

            <Route path={'/'} element={<MainLayout/>}/>
            <Route path={'holidays/:countryCode'} element={<Holidays/>}/>

        </Routes>
    );
}

export default App;
