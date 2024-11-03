// App.js
import React, { useState } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import LanguageItem from './language';
import { langs } from './data';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Можете добавить логику для обновления данных
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={langs}
        renderItem={({ item }) => (
          <LanguageItem lang={item.lang} experience={item.experience} logo={item.logo} />
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}