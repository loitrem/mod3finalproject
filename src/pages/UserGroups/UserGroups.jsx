import React, {useState} from 'react'
import * as userGroupsService from '../../utilities/groups-service';

function UserGroups() {

  return (
    <div className="userGroupsWrapper">
      <div className="userGroupsTitle">Select who has access to your To Do List</div>
      <div className="userGroups">
        
        <div className="userGroupsUserCell">
          <div className="userGroupsUserName">temp</div>
          <div className="userGroupsUserBtn">
            <button className="userGroupsButton">ADD</button>
            </div>
        </div>
        <div className="userGroupsUserCell">
            <div className="userGroupsUserName">temp</div>
            <div className="userGroupsUserBtn">
            <button className="userGroupsButton">REMOVE</button>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default UserGroups