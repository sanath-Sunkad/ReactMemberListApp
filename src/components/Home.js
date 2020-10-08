import React from 'react';
import '../App.css';

import MemberLists from './MemberLists';
import Header from './Header'
import JSON from '../TestJSON.json'
// const URL_HOME = 'http://localhost:3004/members'


class Home extends React.Component{
  state={
    data:JSON,
    filtered:JSON
  }
  // componentDidMount() {
  //   fetch(URL_HOME, { method: 'GET'})
  //   .then(response => response.json())
  //   .then(json => {
        
  //       this.setState({data:json,filtered:json})
  //   })
  // }

  filterMembers=(keywords)=>{
    let filtered=this.state.data.filter((item)=>{
        return item.real_name.indexOf(keywords.toLowerCase()) >-1 || item.id.indexOf(keywords.toUpperCase()) > -1;
    })

    this.setState({filtered})

}

  render(){
    return(
      <div className="homecontainer">
        <Header membersearch={this.filterMembers}></Header>
        <div className="member_list_container">
        <MemberLists members={this.state.filtered}></MemberLists>
        </div>
      </div>

    );
  }
}

export default Home;
