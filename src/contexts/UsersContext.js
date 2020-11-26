import React, { createContext } from 'react'

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const value = {

  }

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider;
