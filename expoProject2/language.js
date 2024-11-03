import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const LanguageItem = ({ lang, experience, logo }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: logo }} />
            <View>
                <Text style={styles.langText}>{lang}</Text>
                {experience.years >= 1 ? (
                    <Text style={styles.expText}>
                        Опыт: {experience.years} {experience.years === 1 ? 'год' : 'года'}, {experience.months} месяца
                    </Text>
                ) : (
                    <Text style={styles.expText}>
                        Опыт: {experience.months} месяца
                    </Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  langText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  expText: {
    fontSize: 14,
    color: '#666',
  },
});

export default LanguageItem;