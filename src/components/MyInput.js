import { TextInput, Text, View, StyleSheet, useColorScheme } from 'react-native'
import Colors from '../../constants/colors'
export default function MyInput({
	label,
	value,
	onChangeText,
	secureTextEntry,
}) {
	const theme = useColorScheme()
	return (
		<View style={[styles.container, styles[theme]]}>
			<TextInput
				placeholder={label}
				style={styles.input}
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 45,
		justifyContent: 'center',
		margin: 10,
		padding: 10,
		borderRadius: 8,
		borderWidth: 1,
	},
	dark: {
		backgroundColor: Colors.dark.text + '06',
		borderColor: Colors.dark.text + '60',
	},
	light: {
		backgroundColor: Colors.light.text + '06',
		borderColor: Colors.light.text + '60',
	},
	input: {
		color: 'gray',
		fontSize: 17,
	},
})
//16:01
