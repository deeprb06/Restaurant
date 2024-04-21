import { createContext } from 'react';

const userContext = createContext({
    user: {
        name: 'deep rabadiya',
        email: 'deeprabadiya@gmail.com',
    },
});

export default userContext;
