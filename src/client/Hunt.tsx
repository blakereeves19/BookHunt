import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HuntScreen = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Hunt Screen</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF8200',
      alignItems: 'center',
      justifyContent: 'center',
    },
    settings: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HuntScreen;