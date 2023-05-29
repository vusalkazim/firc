import Navbar from "./Navbar/Navbar";
import "./App.css"
import User from "./User/User";
function App(){
    return(
        <>
        <Navbar></Navbar>
        <div className="Users">
            <User name = "vusal"></User>
        </div>
        </>
    )
}
export default App;