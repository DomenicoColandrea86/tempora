import React from 'react';
import moment from 'moment';
import readingTime from 'reading-time';
import { Image } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Body,
  Left,
  Title,
} from 'native-base';

const InsightsListItem = function InsightsListItem({ item, goInsightDetail }) {
  return (
    <Card>
      <CardItem button onPress={() => goInsightDetail(item)}>
        <Left>
          <Thumbnail
            small
            source={{ uri: item.better_featured_image.source_url }}
          />
          <Body>
            <Text>Tom Leahy</Text>
            <Text note>
              {moment(item.date).format('MMMM D')}
              {' '}
              -
              {' '}
              {readingTime(item.content.rendered).text}
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem button onPress={() => goInsightDetail(item)}>
        <Body>
          <Image
            style={{
              resizeMode: 'cover',
              width: '100%',
              marginTop: 0,
              marginBottom: 20,
              height: 165,
            }}
            source={{ uri: 'https://unsplash.it/300/1000/?random' }}
          />
          <Text><Title>{item.title.rendered}</Title></Text>
          <Text>{item.excerpt.rendered}</Text>
          <Text note>Read More...</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

InsightsListItem.propTypes = {
  item: React.PropTypes.any.isRequired,
  goInsightDetail: React.PropTypes.func.isRequired,
};

export default InsightsListItem;
