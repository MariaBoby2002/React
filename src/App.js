import "bulma/css/bulma.css"
import CardPage from "./CardPage.js"
import ToolsImage from "./images/tools1.png"
import GarageNearMeImage from "./images/tools2.png"
import FixMeImage from "./images/tools3.png"
function App(){
    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Garages Near You</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                        <CardPage 
                        title="Tools" 
                        handler="@tools" 
                        image={ToolsImage}
                        description="Tools offers premium vehicle servicing with certified technicians, ensuring your car gets the best care with a quick turnaround time." />
                        </div>
                        <div className="column is-4">
                        <CardPage 
                        title="Garage Near Me" 
                        handler="@garagenearme" 
                        image={GarageNearMeImage}
                        description="Garage near me is known for affordable pricing and excellent customer service, specializing in routine maintenance and emergency repairs." />
                        </div>
                        <div className="column is-4">
                        <CardPage 
                        title="Fix Me" 
                        handler="@fixme" 
                        image={FixMeImage}
                        description="Fix Me provides eco-friendly car services, using sustainable products and advanced technology for efficient vehicle repairs and upgrades." />
                        </div>
                    </div>
                </section>
            </div>          
    
    
    
    </div>
    )

}
export default App