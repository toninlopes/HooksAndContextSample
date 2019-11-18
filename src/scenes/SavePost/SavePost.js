import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from 'react-native';

import {savePostAsync} from '../../service/connector';

const SavePost = props => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  saveAsync = async () => {
    const result = await savePostAsync({
      title,
      body,
      userId: props.userId,
    });
    props.navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TextInput
        style={styles.input}
        value={title}
        placeholder="Title"
        editable={true}
        onChangeText={title => setTitle(title)}
      />
      <TextInput
        style={styles.input}
        value={body}
        placeholder="Message"
        editable={true}
        multiline={true}
        numberOfLines={6}
        onChangeText={body => setBody(body)}
      />
      <Button title="Save" onPress={async () => await saveAsync()} />
    </KeyboardAvoidingView>
  );
};

SavePost.navigationOptions = ({navigation}) => {
  const {user} = navigation.state.params || {};

  return {
    title: `Post by ${user.name}`,
  };
};

export default SavePost;

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
