import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import MembersListItem from './MembersListItem'

const MemberLists =(props)=>{

    const items=props.members.map((item)=>{
        return(
            
            <Link to={`/${item.id}`} key={item.id} style={{textDecoration:"none"}}>
                <MembersListItem key={item.id} item={item}></MembersListItem>
            </Link>
            
        )
    });
    return(
        <div>   
        
    <div className='membersList'>{items}</div>
        </div>

    )
}

export default MemberLists;