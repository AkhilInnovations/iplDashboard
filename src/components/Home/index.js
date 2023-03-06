// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const {teams} = data
    console.log(teams)

    const formattedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamimageUrl: eachItem.team_image_url,
    }))

    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    console.log(teamsData)
    console.log(isLoading)
    return (
      <div className="bg-container">
        <div className="ipl-logo">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
          />
          <h1 className="heading ">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="card">
            <ul className="team-list">
              {teamsData.map(eachTeam => (
                <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
