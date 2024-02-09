import React, { createContext, useState } from 'react';

const UserContext = createContext({
    currentUser : null ,
});

export default UserContext ;