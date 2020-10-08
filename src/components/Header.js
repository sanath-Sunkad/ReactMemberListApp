import React from 'react';


class Header extends React.Component{

    state={
        kewwords:''
    }

    inputChange=(event)=>{
        this.setState({keywords: event.target.value})
        this.props.membersearch(event.target.value)
    }

    render(){
        
        return(
            <header>
                <div className='logo'
                onClick={()=>console.log('clicked')}
                ><h1>LIST OF EMPLOYEES</h1></div>
                <input className="filter_members" type="text" placeholder="Enter Name or ID"
                onChange={this.inputChange}
                ></input>
                
            </header>
        )
    }

}

export default Header;