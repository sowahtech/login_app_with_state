import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, RefreshControl, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import ContactsScreen from './ContactsScreen';
import LoginScreen from './LoginScreen';
import Contacts from './components/Contacts';

class App extends Component {

	render() {
		return (
			<View style={styles.container}>
				<ContactsScreen />
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