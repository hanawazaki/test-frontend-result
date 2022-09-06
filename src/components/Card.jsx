import React from 'react'
import userImage from '../assets/user.png'

const Card = ({ users }) => {

  return (
    <>
      {
        users && users.length > 0 ? (
          users.map((item, index) => (
            <div className="w-6/12 md:w-4/12 lg:w-3/12 p-2" key={index}>
              <div
                className="flex flex-col justify-between items-center user-card w-100 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <img
                  src={userImage}
                  alt="user"
                  className="user-img"
                />

                <div
                  className="flex flex-col justify-center items-center mt-3"
                >
                  <h4 className="user-name">{item.username}</h4>

                  <p className="user-role">{item.name}</p>
                </div>

                <div
                  className="flex justify-center items-center user-status verified"
                >
                  <span>{item.email}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center w-full">
            <h2 className="text-center">No data found</h2>
          </div>
        )
      }
    </>
  )
}

export default Card