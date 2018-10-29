import React, { Component } from 'react';
import { FlatList } from 'react-native';

class EventList extends Component {
  render() {
    return (
        <FlatList
          data={[{ name: 'a' }, { name: 'b' }]}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          />
      );
  }
}

export default EventList;