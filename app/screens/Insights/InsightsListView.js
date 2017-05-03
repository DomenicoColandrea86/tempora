import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, FlatList } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { Container, Content, Text } from 'native-base';
import InsightsListItem from '../../components/Insights/InsightsListItem';
import { InsightsActions, getPosts, getLoading } from '../../store/Insights';
import styles from './styles';

class InsightsListView extends React.PureComponent {
  componentDidMount() {
    this.props.loadInsights();
  }

  goInsightDetail = insight => {
    this.props.navigation.navigate('InsightsDetailView', { insight });
  };

  renderItem = ({ item }) => (
    <InsightsListItem item={item} goInsightDetail={this.goInsightDetail} />
  );

  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Content>
            {this.props.loading && <Text>Loading...</Text>}
            <FlatList
              data={this.props.posts}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
          </Content>
        </Container>
      </View>
    );
  }
}

InsightsListView.propTypes = {
  posts: React.PropTypes.any.isRequired,
  loading: React.PropTypes.bool.isRequired,
  loadInsights: React.PropTypes.func.isRequired,
  navigation: React.PropTypes.any.isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: getPosts(),
  loading: getLoading(),
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
