import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ReadScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Read Screen</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ReadScreen;