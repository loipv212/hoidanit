import videoHomePage from "../../assets/video/videoHomePage.mp4"
const HomePage = (props) => {
    return (<div className="homepage-container">
        <div className="homepage-video">
            <video autoPlay loop muted playsInline>
                <source src={videoHomePage} 
                type="video/mp4"/>
            </video>
        </div>
        <div className="homepage-content">
            <div className="title-1">Lorem ipsum dolor sit amet.</div>
            <div className="title-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, beatae.</div>
            <div className="title-3">
                <button>Get's started. It's free</button>
            </div>
        </div>
    </div>)
}
export default HomePage;