import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Image } from 'react-native';
import { createStructuredSelector } from 'reselect';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Icon,
} from 'native-base';
import { InsightsActions } from '../../store/Insights';
import styles from './styles';

class InsightsDetailView extends React.PureComponent {
  componentDidMount() {
    console.log(this);
  }

  stripHTML = string => string.replace(/<\/?[^>]+(>|$)/g, '');

  render() {
    const insight = this.props.navigation.state.params.insight;
    return (
      <View style={styles.container}>
        <Container>
          <Content>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Body>
                  <Image
                    style={{ resizeMode: 'cover', width: '100%', height: 100 }}
                    source={{ uri: insight.better_featured_image.source_url }}
                  />
                  <Text>{insight.title.rendered}</Text>
                  <Text note>
                    {moment(insight.date).format('MMMM Do, YYYY')}
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{this.stripHTML(insight.content.rendered)}</Text>
                  <Button transparent textStyle={{ color: '#87838B' }}>
                    <Icon name="logo-github" />
                    <Text>1,926 stars</Text>
                  </Button>
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
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: {
      ...ownProps.actions,
      ...bindActionCreators({ ...InsightsActions }, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InsightsDetailView);
