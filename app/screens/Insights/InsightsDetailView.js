import React from 'react';
import moment from 'moment';
import readingTime from 'reading-time';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Image } from 'react-native';
import { createStructuredSelector } from 'reselect';
import {
  Container,
  Content,
  List,
  CardItem,
  Text,
  Body,
  Left,
  Thumbnail,
  Badge,
} from 'native-base';
import { InsightsActions, getAuthors, getTags } from '../../store/Insights';

import styles from './styles';

class InsightsDetailView extends React.PureComponent {
  getTitle = string => string.split('<strong>')[1].split('<')[0];

  stripHTML = string => string.replace(/<\/?[^>]+(>|$)/g, '');

  render() {
    const insight = this.props.navigation.state.params.insight;
    return (
      <View style={styles.container}>
        <Container>
          <Content>
            <List style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    small
                    source={{
                      uri: this.props.authors[insight.author].acf
                        .author_headshot.url,
                    }}
                  />
                  <Body>
                    <Text style={{ fontSize: 14, color: '#4ea4bd' }}>
                      {this.props.authors[insight.author].name}
                    </Text>
                    <Text note style={{ fontSize: 12 }}>
                      {this.getTitle(
                        this.props.authors[insight.author].acf.author_bio,
                      )}
                    </Text>
                    <Text note style={{ fontSize: 12 }}>
                      {moment(insight.date).format('MMMM D')}
                      {' '}
                      -
                      {' '}
                      {readingTime(insight.content.rendered).text}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text
                    style={{
                      color: 'rgba(0, 0, 0, 0.8);',
                      fontSize: 24,
                      fontWeight: 'bold',
                      lineHeight: 28,
                      marginBottom: 10,
                    }}
                  >
                    {insight.title.rendered}
                  </Text>
                </Body>
              </CardItem>
              <Image
                style={{
                  resizeMode: 'cover',
                  width: '100%',
                  marginTop: 0,
                  height: 175,
                }}
                source={{ uri: 'https://unsplash.it/400/800/?random' }}
              />
              <CardItem>
                <Body>
                  <Text style={{ fontSize: 16, lineHeight: 26, marginTop: 10 }}>
                    {this.stripHTML(insight.content.rendered)}
                  </Text>
                  <View
                    style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}
                  >
                    {insight.tags.map(tag => (
                      <Badge
                        key={this.props.tags[tag].id}
                        style={{
                          backgroundColor: '#84C1D3',
                          marginRight: 8,
                          marginBottom: 8,
                          borderRadius: 3,
                        }}
                      >
                        <Text style={{ color: 'white' }}>
                          #{this.props.tags[tag].name}
                        </Text>
                      </Badge>
                    ))}
                  </View>
                </Body>
              </CardItem>
            </List>
          </Content>
        </Container>
      </View>
    );
  }
}

InsightsDetailView.propTypes = {
  navigation: React.PropTypes.any.isRequired,
  authors: React.PropTypes.any.isRequired,
  tags: React.PropTypes.any.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authors: getAuthors(),
  tags: getTags(),
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: {
      ...ownProps.actions,
      ...bindActionCreators({ ...InsightsActions }, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InsightsDetailView);
