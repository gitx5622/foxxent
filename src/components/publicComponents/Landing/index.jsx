import React  from 'react';
import "../../../styles/Landing/Landing.scss";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Footer from "./footer";

const Landing = ({ history }) => {

    return (
        <div className="foxx-landing-page">
            <div className="foxx-part-one" style={{backgroundImage:"url('/images/Landing/back.jpg')"}}>
                <div className="foxx-top-links">
                    <div className="foxx-logo">
                        <h3>Foxx Entertainment</h3>
                    </div>
                    <div className="foxx-topbar-links">
                        <Button squared className="custom-button" onClick={() => history.push('/dashboard/home')} >Dashboard</Button>
                        <Button squared className="custom-button" onClick={() => history.push('/dashboard/home')}>It's Free!! Enjoy</Button>
                    </div>
                </div>
                <div className="foxx-middle-links">
                    <div/>
                    <div>
                        <center>
                            <h1>Welcome.
                                Millions of movies, TV shows and people to discover. Explore now.
                            </h1><br/>
                            <h3>Ready to Watch ? Create an account with us to enjoy</h3><br/>
                            <Button squared className="custom-button" onClick={() => history.push("/dashboard/home")}>Get Started It's Free</Button>
                        </center>
                    </div>
                    <div/>
                </div>
            </div>
            <div className="foxx-part-two">
                <div/>
                <div className="animations">
                    <h1>Explore your favorite Animation</h1>
                    <p>Send kids on adventures with their favorite animations at our website</p>
                    <p>Animations for kids, anime for adults, animated adventures for teens films</p>
                </div>
                <div><img src="/images/Landing/gg.png" alt="kids" width="100%"/></div>
                <div/>
            </div>
            <div className="foxx-part-three">
                <div/>
                <div><img src="/images/Landing/blacklist.jpeg" style={{borderRadius:"30%"}} alt="blacklist" width="100%"/></div>
                <div className="animations">
                    <h1>Explore your favorite Conspiracy</h1>
                    <p>Send kids on adventures with their favorite animations at our website</p>
                    <p>Animations for kids, anime for adults, animated adventures for teens films</p>
                </div>
                <div/>
            </div>
            <div className="foxx-part-four">
                <div/>
                <div className="animations">
                    <h1>Explore your favorite Sci-fi</h1>
                    <p>Send kids on adventures with their favorite animations at our website</p>
                    <p>Animations for kids, anime for adults, animated adventures for teens films</p>
                </div>
                <div><img src="/images/Landing/gg.png" alt="kids" width="100%"/></div>
                <div/>
            </div>
            <Footer/>
        </div>
    );
};

export default withRouter(Landing);