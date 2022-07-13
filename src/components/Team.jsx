import '../styles/Team.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Team = () => {
    return (
        <>
            {/* Team */}
            <div className="team">
                <div className="title">Team</div>

                {/* 1 */}
                <div className="member">
                <div className="member-img">
                    <FontAwesomeIcon icon={ faUserAlt } />
                </div>
                <div className="name">Team member</div>
                </div>

                {/* 2 */}
                <div className="member">
                <div className="member-img">
                    <FontAwesomeIcon icon={ faUserAlt } />
                </div>
                <div className="name">Team member</div>
                </div>

                {/* 3 */}
                <div className="member">
                <div className="member-img">
                    <FontAwesomeIcon icon={ faUserAlt } />
                </div>
                <div className="name">Team member</div>
                </div>

                {/* 4 */}
                <div className="member">
                <div className="member-img">
                    <FontAwesomeIcon icon={ faUserAlt } />
                </div>
                <div className="name">Team member</div>
                </div>

                {/* 5 */}
                <div className="member">
                <div className="member-img">
                    <FontAwesomeIcon icon={ faUserAlt } />
                </div>
                <div className="name">Team member</div>
                </div>
        </div>
      </>
    )
}

export default Team;