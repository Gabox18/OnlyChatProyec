import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { withAuthenticator } from '@aws-amplify/ui-react-native'
import { Amplify, Auth } from 'aws-amplify'
import awsConfig from './src/aws-exports'

Amplify.configure(awsConfig)

const App = () => {
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 32, fontWeight: 'bold' }}>Home screen</Text>
			<StatusBar style='auto' />
		</View>
	)
}

export default withAuthenticator(App)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
