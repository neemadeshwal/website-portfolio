import Home from "./components/home";
import Header from "./components/header";
import Skill from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
function App(){
  return(
    <div className="profile-container">
<Header/>
<Home/>
<Skill/>
<Projects/>
<Contact/>
    </div>
  )
}

export default App;