import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { connect, useDispatch } from 'react-redux';

interface SignUpProps {
  
}
interface User {
  email: string
  password: string
 

}
const SignUp: React.FC<SignUpProps> = () => {

//   const newUser = () => {
   
//     const [userName, setUserName] = useState<User>()

//     useEffect(() => {
     
//         const name  = localStorage.getItem("userName")
      
//         setUserName(name)
//     }, [ userName])

//     return {
     
//         userName
//     }
// }

  return (
    <div>Sign up</div>
  )
}
export default SignUp