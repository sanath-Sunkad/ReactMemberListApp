import React from 'react';
import '../App.css';
const MemberListsItem =({item})=>{
        return(
            <div className='Members_item'>
                <h3>{item.real_name.toUpperCase()}</h3>
            </div>
        )
}

export default MemberListsItem;