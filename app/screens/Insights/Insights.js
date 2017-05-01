import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, FlatList } from 'react-native';
import { createStructuredSelector } from 'reselect';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Body,
} from 'native-base';
import { InsightsActions, getInsights } from '../../store/Insights';

// Styles
// import styles from './styles';

class InsightsListView extends React.PureComponent {
  componentDidMount() {
    this.props.loadInsights();
  }

  getKey = item => item.id;

  renderItem({ item }) {
    return (
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Body>
            <Text>{item.title.rendered}</Text>
            <Text note>{moment(item.date).format('MMMM Do, YYYY')}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              style={{ resizeMode: 'cover', width: '100%', height: 100 }}
              source={{ uri: item.better_featured_image.source_url }}
            />
            <Text>{item.excerpt.rendered}</Text>
            <Button transparent textStyle={{ color: '#87838B' }}>
              <Icon name="logo-github" />
              <Text>1,926 stars</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.props.insights}
            renderItem={this.renderItem}
            keyExtractor={this.getKey}
          />
        </Content>
      </Container>
    );
  }
}

InsightsListView.propTypes = {
  insights: React.PropTypes.array,
  loadInsights: React.PropTypes.func.isRequired,
};

InsightsListView.defaultProps = {
  insights: [],
};

const mapStateToProps = createStructuredSelector({
  insights: getInsights(),
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: {
      ...ownProps.actions,
      ...bindActionCreators({ ...InsightsActions }, dispatch),
    },
    loadInsights: () => dispatch(InsightsActions.insightsRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InsightsListView);
