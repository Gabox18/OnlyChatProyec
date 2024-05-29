import * as React from 'react'
import MyInput from './MyInput'
import MyButton from './MyButton'
import MyText from './MyText'
import { Button } from 'react-native'
//import { AuthContext } from "../Context/AuthContext";

export default function SignIn() {
	// const { setAuthState, setEmail, setPassword, handleSignIn } =
	//   React.useContext(AuthContext);

	return (
		<React.Fragment>
			<MyText type='title'>Sign In</MyText>
			{/* <MyInput label="Email" onChangeText={setEmail} />
      <MyInput label="Password" secureTextEntry onChangeText={setPassword} />
      <MyButton title="Sign In" onPress={handleSignIn} />
      <Button title="Sign Up" onPress={() => setAuthState("signUp")} /> */}

			<MyInput label='Email' />
			<MyInput label='Password' secureTextEntry />
			<MyButton title='Sign In' />
			<MyButton title='Sign Up' />
		</React.Fragment>
	)
}
