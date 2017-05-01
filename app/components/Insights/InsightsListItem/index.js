import React from 'react';
import moment from 'moment';
import { View } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Body } from 'native-base';
import styles from './styles';

const InsightsListItem = function InsightsListItem({ item }) {
  return (
    <Card>
      <CardItem>
        <View style={styles.thumbnail}>
          <Thumbnail
            square
            size={100}
            source={{ uri: item.better_featured_image.source_url }}
          />
        </View>
        <Body>
          <Text>{item.title.rendered}</Text>
          <Text note>{moment(item.date).format('MMMM Do, YYYY')}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

InsightsListItem.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default InsightsListItem;
