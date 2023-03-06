import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamimageUrl, name} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="item-container">
        <img className="team-logo" src={teamimageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
