import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sobre = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.footerText}>Gabriel Tricerri</Text>
        <Text style={styles.footerText}>@2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: 'black',
  },
});

export default Sobre;
