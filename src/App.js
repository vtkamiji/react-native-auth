import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/commons';
import LoginForm from './components/LoginForm';

class App extends Component {

	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyCt_ZTdVLas0R5apu_MAW_HyulMjnors7Y",
		    authDomain: "auth3344e.firebaseapp.com",
		    databaseURL: "https://auth3344e.firebaseio.com",
		    projectId: "auth3344e",
		    storageBucket: "auth3344e.appspot.com",
		    messagingSenderId: "75823089179"

		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderLogoutButton() {		
		return (
			<Card>
				<CardSection>
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
				</CardSection>
			</Card>
		);
	};

	renderContent() {		
		switch(this.state.loggedIn) {
			case true:
				return this.renderLogoutButton();
			case false:
				return <LoginForm />;
			default:
		}		return <Spinner size='large' />;
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	};
}

export default App;