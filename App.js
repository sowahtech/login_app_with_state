import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, RefreshControl, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import LoginScreen from './LoginScreen'
class App extends Component {

	render() {
		return (
			<View style={styles.container}>
				<LoginScreen />
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		marginTop: 100
	},


});

export default App;