import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamData: updatedData, isLoading: false})
  }

  //   renderBlogItemDetails = () => {
  //     const {teamData} = this.state
  //     // const {title, imageUrl, content, avatarUrl, author} = blogData

  //     return (
  //       <div className="blog-info">
  //         <h2 className="blog-details-title">{title}</h2>
  //         <div className="author-details">
  //           <img className="author-pic" src={avatarUrl} alt={author} />
  //           <p className="details-author-name">{author}</p>
  //         </div>
  //         <img className="blog-image" src={imageUrl} alt={title} />
  //         <p className="blog-content">{content}</p>
  //       </div>
  //     )
  //   }

  render() {
    const {teamData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData

    return (
      <div className="app-container">
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="">
            <img
              className="team-banner"
              src={teamBannerUrl}
              alt="team banner"
            />
            <LatestMatch
              latestMatchDetails={latestMatchDetails}
              key={latestMatchDetails.id}
            />
            <ul className="match-cards">
              {recentMatches.map(eachMatch => (
                <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
