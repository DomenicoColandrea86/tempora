import React from 'react';
import moment from 'moment';
import readingTime from 'reading-time';
import { Image } from 'react-native';
import {
  CardItem,
  Thumbnail,
  Text,
  Body,
  Left,
  Right,
  List,
} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const InsightsListItem = function InsightsListItem({
  item,
  goInsightDetail,
  author,
}) {
  return (
    <List
      style={{
        marginBottom: 10,
        backgroundColor: 'white',
        borderColor: 'rgba(0,0,0,.09)',
        borderWidth: 1,
      }}
    >
      <CardItem
        style={{ backgroundColor: 'white' }}
        button
        onPress={() => goInsightDetail(item)}
      >
        <Left>
          {author &&
            author.name &&
            <Thumbnail
              small
              source={{ uri: author.acf.author_headshot.url }}
            />}
          <Body>
            {author &&
              author.name &&
              <Text style={{ fontSize: 14, color: '#4ea4bd' }}>
                {author.name}
              </Text>}
            <Text note style={{ fontSize: 12 }}>
              {moment(item.date).format('MMMM D')}
              {' '}
              -
              {' '}
              {readingTime(item.content.rendered).text}
            </Text>
          </Body>
        </Left>
        <Right>
          <EvilIcons
            onPress={() => alert('Hey now!')}
            style={{ fontSize: 30, color: 'rgba(0,0,0,.44)' }}
            name={'chevron-down'}
          />
        </Right>
      </CardItem>
      <CardItem button onPress={() => goInsightDetail(item)}>
        <Body>
          <Image
            style={{
              resizeMode: 'cover',
              width: '100%',
              marginTop: 0,
              marginBottom: 10,
              height: 160,
            }}
            source={{ uri: 'https://unsplash.it/400/800/?random' }}
          />
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.8);',
              fontSize: 22,
              fontWeight: 'bold',
              lineHeight: 26,
              marginBottom: 5,
            }}
          >
            {item.title.rendered}
          </Text>
          <Text
            style={{
              color: 'color: rgba(0,0,0,.44)',
              fontSize: 16,
              lineHeight: 22,
            }}
          >
            {item.excerpt.rendered.replace(/(<([^>]+)>)/gi, '')}
          </Text>
          <Text note style={{ fontSize: 14, lineHeight: 16 }}>
            Read More...
          </Text>
        </Body>
      </CardItem>
    </List>
  );
};

InsightsListItem.propTypes = {
  item: React.PropTypes.any.isRequired,
  author: React.PropTypes.any,
  goInsightDetail: React.PropTypes.func.isRequired,
};

InsightsListItem.defaultProps = {
  author: [],
};

export default InsightsListItem;
