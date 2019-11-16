import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from 'react-native';

import {savePostAsync} from '../../service/connector';

export default class SavePost extends Component {
  static navigationOptions = ({navigation}) => {
    const {user} = navigation.state.params || {};

    return {
      title: `Post by ${user.name}`,
    };
  };

  constructor(props) {
    super(props);

    const {user} = this.props.navigation.state.params;
    this.state = {
      title: '',
      body: '',
      userId: user.id,
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput
          style={styles.input}
          value={this.state.title}
          placeholder="Title"
          editable={true}
          onChangeText={title => this.setState({title})}
        />
        <TextInput
          style={styles.input}
          value={this.state.body}
          placeholder="Message"
          editable={true}
          multiline={true}
          numberOfLines={6}
          onChangeText={body => this.setState({body})}
        />
        <Button title="Save" onPress={async () => await this.saveAsync()} />
      </KeyboardAvoidingView>
    );
  }

  saveAsync = async () => {
    const result = await savePostAsync({
      title: this.state.title,
      body: this.state.body,
      userId: this.state.userId,
    });
    this.props.navigation.setParams({newPost: result});
    this.props.navigation.goBack();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 18,
  },
  input: {
    marginBottom: 20,
  },
  messageInput: {
    height: 200,
  },
});
