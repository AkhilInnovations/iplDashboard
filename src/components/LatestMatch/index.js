import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedDetails

  return (
    <div className="latestMatch-container">
      <div className="before-match">
        <p className="competing-team ">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="remain">{venue} </p>
        <p className="remain">{result} </p>
      </div>
      <div className="competing-team-logo">
        <img
          className="competing-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="after-match">
        <h1 className="date2">First Innings</h1>
        <p className="remain2">{firstInnings} </p>
        <h1 className="date2">Second Innings</h1>
        <p className="remain2">{secondInnings} </p>
        <h1 className="date2">man Of The Match</h1>
        <p className="remain2">{manOfTheMatch} </p>
        <h1 className="date2">Umpires</h1>
        <p className="remain2">{umpires} </p>
      </div>
    </div>
  )
}

export default LatestMatch
