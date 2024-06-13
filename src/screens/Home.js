import * as React from 'react'
import MyText from '../components/MyText'
import MyButton from '../components/MyButton'
import { Auth } from 'aws-amplify'

export default function Home() {
	// const [user, setUser] = React.useState(null);

	// React.useEffect(() => {
	//   (async () => {
	//     try {
	//       const { attributes } = await Auth.currentAuthenticatedUser();
	//       setUser(attributes);
	//     } catch (e) {
	//       console.log(e);
	//     }
	//   })();
	// }, []);

	// async function handleSignOut() {
	//   try {
	//     await Auth.signOut();
	//     setUser(null);
	//   } catch (e) {
	//     console.log(e);
	//   }
	// }

	return (
		<React.Fragment>
			<MyText type='title'>Welcome back! 🚀</MyText>
			{/* <MyText>{user?.sub}</MyText>
      <MyText>{user?.email}</MyText>
      <MyButton title={"Sign Out"} onPress={handleSignOut} /> */}
		</React.Fragment>
	)
}
