import '../styles/Frameworks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faGit, faNodeJs, faPython, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';

const FrameWorks = () => {
    return (
        <>
            <div className="frameworks">
                <div className="title">
                    Frameworks
                </div>

                <div className="end">
                    <div className='sub-title'>Frontend</div>

                    {/* React */}
                    <div className="framework">
                        <FontAwesomeIcon icon={ faReact } />
                    </div>

                    {/* Vue */}
                    <div className="framework">
                        <FontAwesomeIcon icon={ faVuejs } />
                    </div>

                    {/* Angular */}
                    <div className="framework">
                        <FontAwesomeIcon icon={ faAngular } />
                    </div>
                </div>

                <div className="end">
                    <div className="sub-title">Backend</div>
                    {/* Node */}
                    <div className="framework">
                        <FontAwesomeIcon icon={ faNodeJs } />
                    </div>

                    {/* Python */}
                    <div className="framework">
                        <FontAwesomeIcon icon={ faPython } />
                    </div>

                    {/* Git */}
                    <div className="framework">
                        <FontAwesomeIcon icon={ faGit } />
                    </div>
                </div>

            </div>
        </>
    )
}

export default FrameWorks;