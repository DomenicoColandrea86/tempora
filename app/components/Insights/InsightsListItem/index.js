import React from 'react';
import moment from 'moment';
import readingTime from 'reading-time';
import { Image } from 'react-native';
import { CardItem, Thumbnail, Text, Body, Left, List } from 'native-base';

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
              <Text style={{ fontSize: 14, color: '#84C1D3' }}>
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
      </CardItem>
      <CardItem button onPress={() => goInsightDetail(item)}>
        <Body>
          <Image
            style={{
              resizeMode: 'cover',
              width: '100%',
              marginTop: 0,
              marginBottom: 20,
              height: 160,
            }}
            source={{ uri: 'https://unsplash.it/400/800/?random' }}
          />
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.8);',
              fontSize: 22,
              fontWeight: 'bold',
              lineHeight: 24,
            }}
          >
            {item.title.rendered}
          </Text>
          <Text
            style={{
              color: 'color: rgba(0,0,0,.44)',
              fontSize: 18,
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
