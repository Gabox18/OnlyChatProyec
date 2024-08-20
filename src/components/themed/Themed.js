import * as React from 'react'
import { useColorScheme, View as DefaulView } from 'react-native'
import Colors from '../../../constants/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export function View(props) {
	const theme = useColorScheme()
	const { style, ...otherProps } = props
	//console.log(Colors[theme].background)
	return (
		<DefaulView
			style={[
				{ backgroundColor: Colors[theme].background, paddingHorizontal: 18 },
				style,
			]}
			{...otherProps}
		/>
	)
}

export function ScrollView(props) {
	const theme = useColorScheme()
	const { style, children, ...otherProps } = props
	//console.log(Colors[theme].background)
	return (
		<KeyboardAwareScrollView
			style={[
				{ backgroundColor: Colors[theme].background, paddingHorizontal: 18 },
				style,
			]}
			{...otherProps}
		>
			{children}
		</KeyboardAwareScrollView>
	)
}
