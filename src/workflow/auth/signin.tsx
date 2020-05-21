import React, { useState } from 'react';
import { SignInInterface } from '../../helpers/interface';

function handleChange(event: { target: HTMLInputElement }, state: any): void {
   event.target.type === 'checkbox' ? state(event.target.checked) : state(event.target.value);
}

function sendData(userName: string, firstName: string, lastName: string, passWord: string, checkBox: boolean, props: SignInInterface) {
   if (userName && firstName && lastName && passWord) {
      props.create({
         userName: userName,
         firstName: firstName,
         lastName: lastName,
         passWord: passWord,
         checkBox: checkBox,
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

   return (
      <React.Fragment>
         <div className="p-3" style={{ marginTop: '61px' }}>
            <input
               type="text"
               id="username"
               placeholder="User Name"
               className="d-block col-sm p-0 rounded border p-2 mb-3"
               value={userName}
               onChange={(event) => handleChange(event, setUserName)} />
            <input
               type="text"
               id="firstname"
               placeholder="First Name"
               className="d-block col-sm p-0 rounded border p-2 mb-3"
               value={firstName}
               onChange={(event) => handleChange(event, setFirstName)} />
            <input
               type="text"
               id="lastname"
               placeholder="Last Name"
               className="d-block col-sm p-0 rounded border p-2 mb-3"
               value={lastName}
               onChange={(event) => handleChange(event, setLastName)} />
            <input
               type="text"
               id="password"
               placeholder="Password"
               className="d-block col-sm p-0 rounded border p-2 mb-3"
               value={passWord}
               onChange={(event) => handleChange(event, setPassword)} />
            <div className="d-flex justify-content-between">
               <input type="checkbox" checked={checked} onChange={event => handleChange(event, setCheckBox)} />
               <button
                  type="button"
                  className="btn btn-info d-block mx-auto col-sm-3 py-1"
                  onClick={() => sendData(userName, firstName, lastName, passWord, checked, props)}>Submit</button>
            </div>
         </div>
         <p className="text-info text-center m-0 p-0 pointer"><small onClick={() => props.exist(true)}>Existing User?</small></p>
      </React.Fragment>
   );
}

export default SignIn;