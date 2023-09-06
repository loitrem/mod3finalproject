import React, {useState,useEffect} from 'react'
import * as groupsService from '../../utilities/usergroups-service';
import {getAllUsers, getUser} from '../../utilities/users-service';

function UserGroups() {

  const[users,setUsers]=useState([])
  const[userGroups,setUserGroups]=useState([])

  useEffect(()=>{
    let usersList = [] 
    const data = getAllUsers() 
    
    let userGroupList = []
    const groupData = groupsService.findAll()



    data.then(results =>{
        results.map((current)=>{
              usersList.push(current)
            setUsers(usersList.slice(0,usersList.length).reverse())

        })
    })



    groupData.then(results =>{
        results.map((current)=>{
            
              userGroupList.push(current)
            setUserGroups(userGroupList)
        })
    })
  },[])

console.log('JDJDJD', users);

const addUser = (id) =>{
  
}

  return (
    <div className="userGroupsWrapper">
      <div className="userGroupsTitle">Select who has access to your To Do List</div>
      <div className="userGroups">
        
        <div className="userGroupsUserCell">
          <div className="userGroupsUserName">
            {users?users.map((current,i)=>{
              console.log(getUser().name);
              if(current.name!==getUser().name){
              return(
              <div className='groupUserWrapper' key={i}>
                <div className="groupsUserName">{current.name}</div>
                <div className="userGroupsUserBtn">
                  <button className="userGroupsButton" onClick={()=>{
                    addUser(current._id)
                  }}>ADD</button>
                </div>
              </div>
              )}
            }):''}
          </div>
        </div>
        <div className="userGroupsUserCell">
        {userGroups?userGroups.map((current,i)=>{
          console.log(getUser().name);
          if(current.name!==getUser().name){
          return(
            <div className='groupUserWrapper' key={i}>
              <div className="groupsUserName">{current.user}</div>
              <div className="userGroupsUserBtn">
                <button className="userGroupsButton">REMOVE</button>
              </div>
            </div>
            )}
          }):''}
        </div> 
      </div>
    </div>
  )
}

export default UserGroups