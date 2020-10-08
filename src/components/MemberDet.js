import React from 'react';
import '../App.css';
import DayPicker from './DayPicker'
const URL_HOME = 'http://localhost:3004/members'

class MemberDet extends React.Component{
    state={
        memberdata:[],
        datefiltered:''
    }

    componentDidMount(){
        fetch(`${URL_HOME}?id=${this.props.match.params.id}`, { method: 'GET'})
         .then(response => response.json())
         .then(json => {
             this.setState({memberdata:json})
         })
         
     }

     addfil = (val)=> {
            this.setState({datefiltered:val});
     }

     renderTime(activity_periods){
         return activity_periods.filter((item)=>{return item.start_time.indexOf(this.state.datefiltered) > -1 }).map((item,id)=>{
             return(
                 <div className="activity_period" key={id}>
                     <div className="start_time">
                     <span>In: </span>{item.start_time}
                     </div>
                     <div className="end_time">
                     <span>Out: </span>{item.end_time}
                     </div>
                 </div>
             )
         })
     }

     renderData({memberdata}){
         return memberdata.map((item)=>{
             return (
                 <div key={item.id}>
                     <div className="Member_det_container">
                        <h1>{item.real_name.toUpperCase()}</h1>
                        <h3>{item.id}</h3>
                        <h4>{item.tz}</h4>
                     </div>
                        <DayPicker onfil={this.addfil}></DayPicker>
                     <div className="activity_container">
                         {this.renderTime(item.activity_periods)}
                     </div>
                 </div>
             )
         })
     }

    render(){
        console.log(this.state.datefiltered);
         return(
             <div className="MemberDetMain">
                 {this.renderData(this.state)}
             </div>
         )
     }
}

export default MemberDet;