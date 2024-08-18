import "./index.scss"
import { Rightcomponent } from "./Rightcomponent";

export const HomeScreen = () => {
    return(
        <div className="home-container">
            <div className="left-container">
                <div className="items-container">
                    <img src="koalaf.png" alt="koala" className="koala-img"/>
                    <h1>KOALA</h1>
                    <h2>Code, Collaborate, Chase.</h2>
                    <button>
                    <span class="material-symbols-outlined">swords</span> 
                    <span className="btn-text">New Battlefield</span>                   
                    </button>
                </div>
                
            </div>
            <Rightcomponent />
        </div>
    );
}