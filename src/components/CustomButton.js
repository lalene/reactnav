import React from 'react';
import { TouchableNativeFeedback, Text, View, StyleSheet } from 'react-native';

function CustomButton(props) {
	return (
		<TouchableNativeFeedback onPress={props.onPress}>
			<View style={[styles.button, {backgroundColor: props.color}]}>
				<Text style={styles.label}>{props.label}</Text>
			</View>
		</TouchableNativeFeedback>
	);
}

const styles = StyleSheet.create({
	button: {
		width: '90%',
		padding: 14,
        alignItems: 'center',
        marginTop: 12
	},
	label: {
		color: '#fff',
		fontSize: 18,
	},
});

export default CustomButton;
