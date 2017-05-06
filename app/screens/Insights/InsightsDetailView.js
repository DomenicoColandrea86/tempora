import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import { createStructuredSelector } from 'reselect';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Thumbnail,
  Title,
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
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri: this.props.authors[insight.author].acf
                        .author_headshot.url,
                    }}
                  />
                  <Body>
                    <Text>{this.props.authors[insight.author].name}</Text>
                    <Text note>
                      {this.getTitle(
                        this.props.authors[insight.author].acf.author_bio,
                      )}
                    </Text>
                    <Text note>
                      {moment(insight.date).format('MMMM Do, YYYY')}
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Text><Title>{insight.title.rendered}</Title></Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{insight.title.rendered}</Text>
                  <Text>{this.stripHTML(insight.content.rendered)}</Text>
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
                          {this.props.tags[tag].name}
                        </Text>
                      </Badge>
                    ))}
                  </View>
                </Body>
              </CardItem>
            </Card>
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
