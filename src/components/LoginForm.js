import React, { Component } from 'react';
import { Text } from 'react-native';
import * as firebase from '@firebase';
import { Button, Card, CardSection, Input } from './commons';

class LoginForm extends Component {

	state = { 
		email: '',
		password: '',
		error: ''
	};

	onButtonPress() {
		const { email, password } = this.state;
		console.log(firebase);
		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(() => {
						this.setState({error: 'Authentication Failed!'});
					});
			});
	}

	render() {
		return(
			<Card>
				<CardSection>
					<Input 
						label='Email'
						placeholder='user@gmail.com'
						value={this.state.text}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input 
						secureTextEntry
						label='Password'
						placeholder='password'
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				<CardSection />

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

export default LoginForm;