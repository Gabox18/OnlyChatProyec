import * as React from 'react'
import MyText from '../components/MyText'
import MyButton from '../components/MyButton'
import { useAuthenticator } from '@aws-amplify/ui-react-native'
import { getCurrentUser } from 'aws-amplify/auth'

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

	const { signOut } = useAuthenticator()
	const getUser = async () => {
		const { signInDetails } = await getCurrentUser()
		return signInDetails
	}

	const user = getUser()
	return (
		<React.Fragment>
			<MyText type='title'>Welcome back! 🚀</MyText>
			{/* <MyText>{user?.sub}</MyText>
			<MyText>{user?.loginId}</MyText> */}
			<MyButton title={'Sign Out'} onPress={signOut} />
		</React.Fragment>
	)
}
