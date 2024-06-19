import * as React from 'react'
import { useColorScheme, View as DefaulView } from 'react-native'
import Colors from '../../../constants/colors'

export function View(props) {
	const theme = useColorScheme()
	const { style, ...otherProps } = props
	//console.log(Colors[theme].background)
	return (
		<DefaulView
			style={[{ backgroundColor: Colors[theme].background, paddingHorizontal:18 }, style]}
			{...otherProps}
		/>
	)
}

//6:29
