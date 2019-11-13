import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ToReadScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>To Read Screen</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'purple',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ToReadScreen;