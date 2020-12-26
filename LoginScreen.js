import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'

class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }
    render() {
        return (
            <ScrollView style= {styles.container} showVerticalScrollIndicator={false}>
                <View style = {styles.loginTextContainer}>
                    <Text style = {styles.LoginText}>Log in</Text>
                </View>

                <View>
                    <TextInput 
                    style = {styles.input} 
                    placeholderTextColor = '#666667'
                    placeholder= 'Username'
                    value = {this.state.userName}
                    autoCapitalize = 'none'
                    autoCorrect= {false}
                    onChangeText = {(userName) =>{this.setState({userName})}}
                    />
                    <TextInput 
                    style = {styles.input} 
                    placeholderTextColor = '#666667'
                    secureTextEntry= {true}
                    placeholder= 'Password'
                    value = {this.state.password}
                    onChangeText = {(password) =>{this.setState({password})}}
                    />
                    <Text style = {styles.forgotPassword}>Forgot password?</Text>
                </View>

                <View>
                    <TouchableOpacity style = {styles.buttonContainer}>
                        <Text style = {styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.noAccountContainer}>
                    <Text style={styles.noAccountText}>Don't have an account?</Text>
                    <Text style={styles.signupText}>Sign up</Text>
                </View>

            </ScrollView>

                
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50
    },
    LoginText: {
        fontSize: 50,
        color: "#762f9b"
    },
    loginTextContainer: {
        marginBottom: 30
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "#762f9b",
        fontSize: 20,
        height: 50,
        marginTop: 30 
    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginVertical: 3,
        color: '#4882f0'   
    },
    buttonContainer: {
        height: 50,
        backgroundColor: '#762f9b',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 60
    }, 
    buttonText: {
        color: 'white',
        fontSize: 26 
    },
    noAccountContainer: {
        flexDirection: "row",
        justifyContent: 'center'
    },
    noAccountText: {
        marginRight: 10,
        fontSize: 16
    },
    signupText: {
        fontSize: 16,
        color: '#762f9b'
    }
})

export default LoginScreen;