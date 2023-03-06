import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const updatedDetails = {
    umpires: eachMatch.umpires,
    result: eachMatch.result,
    manOfTheMatch: eachMatch.man_of_the_match,
    id: eachMatch.id,
    date: eachMatch.id,
    venue: eachMatch.venue,
    competingTeam: eachMatch.competing_team,
    competingTeamLogo: eachMatch.competing_team_logo,
    firstInnings: eachMatch.first_innings,
    secondInnings: eachMatch.second_innings,
    matchStatus: eachMatch.match_status,
  }

  const {result, competingTeam, competingTeamLogo, matchStatus} = updatedDetails

  const textColor = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="match-card-container">
      <div className="card">
        <img
          src={competingTeamLogo}
          className="competing-logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="team">{competingTeam}</p>
        <p className="result">{result} </p>
        <p className={textColor}>{matchStatus} </p>
      </div>
    </li>
  )
}

export default MatchCard
