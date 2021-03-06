import React, {useState} from 'react';
import {SignInInterface} from '../../helpers/interface';
import Input from '../../helpers/input';

function sendData(userName: string, firstName: string, lastName: string, passWord: string, checkBox: boolean, props: SignInInterface): void {
   if (userName && firstName && lastName && passWord) {
      props.create({
         username: userName,
         firstname: firstName,
         lastname: lastName,
         password: passWord,
         isAdmin: checkBox,
      });
   }
   return;
}

const SignIn: React.FunctionComponent<SignInInterface> = (props: SignInInterface): React.ReactElement => {
   const [userName, setUserName] = useState<string>('');
   const [firstName, setFirstName] = useState<string>('');
   const [lastName, setLastName] = useState<string>('');
   const [passWord, setPassword] = useState<string>('');
   const [checked, setCheckBox] = useState<boolean>(false);

   const getUsername = (value: string): void => setUserName(value);
   const getFirstName = (value: string): void => setFirstName(value);
   const getLastName = (value: string): void => setLastName(value);
   const getPassword = (value: string): void => setPassword(value);

   return (
      <React.Fragment>
         <div className="p-3" style={{marginTop: '61px'}}>
            <Input
               type="text"
               placeholder="Username"
               id="signin_username"
               value={getUsername}
            />

            <Input
               type="text"
               placeholder="First Name"
               id="signin_firstname"
               value={getFirstName}
            />

            <Input
               type="text"
               placeholder="Last Name"
               id="signin_lastname"
               value={getLastName}
            />

            <Input
               type="password"
               placeholder="Password"
               id="signin_password"
               value={getPassword}               
            />

            <button
               type="button"
               className="btn d-block mx-auto col-sm-3 py-1 signinBlue text-white"
               onClick={() => sendData(userName, firstName, lastName, passWord, checked, props)}>Sign Up</button>
            
            <p className="text-center m-0 p-0 mt-4">
               <small>Already have an Account? </small>
               <small className="pointer loginColor" onClick={() => props.exist(true)}>Login!</small>
            </p>
         </div>
      </React.Fragment>
   );
};

export default SignIn;