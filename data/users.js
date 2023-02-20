import bcrypt from 'bcryptjs';


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name: 'Hasan',
        email: 'hasan@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name: 'Forkan',
        email: 'forkan@example.com',
        password:bcrypt.hashSync('123456',10),
    },

    
]

export default users;