import './Hero.css';
import logo from '../../Assets/hero image.png';

function Hero() {
    return (
        <div className="hero__controls">
            <div className="hero__top">
                <div className="hero__left">
                    <p>Ever wanted to get a curated version of your favorite tweets?<br /> Here you go :)</p>
                    <button>Learn More</button>
                </div>
                <div className="hero__right">
                    <img src={logo} alt="Logo" />;
            </div>
            </div>

            <div className="hero__bottom">
                <p>Made with love by <span>Kushal Bhanot</span>.</p>
            </div>
        </div>
    );
}

export default Hero;