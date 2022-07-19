import '../styles/Works.scss';

const Works = () => {
    return (
        <>
        <div className="works swp_wrapper">
            <div className="title">Works</div>
            <div className="content">
                <div className="gif">
                    <img src={require("../assets/images/arc-anim_1.gif")} alt="gif" />
                </div>
                <div className='works-text'>
                    We've been working on a variety of projects, from small to large, from simple to complex.
                </div>
                <button className='projects-btn'>Check out some them</button>
            </div>
        </div>
        </>
    )
}

export default Works;