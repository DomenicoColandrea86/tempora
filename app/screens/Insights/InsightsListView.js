import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, FlatList } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { Container, Content, Spinner } from 'native-base';
import InsightsListItem from '../../components/Insights/InsightsListItem';
import {
  InsightsActions,
  getPosts,
  getAuthors,
  getLoading,
} from '../../store/Insights';
import styles from './styles';

class InsightsListView extends React.PureComponent {
  componentDidMount() {
    this.props.loadInsights();
  }

  goInsightDetail = insight => {
    this.props.navigation.navigate('InsightsDetailView', { insight });
  };

  renderItem = ({ item }) => (
    <InsightsListItem
      item={item}
      goInsightDetail={this.goInsightDetail}
      author={this.props.authors[item.author]}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {this.props.loading && <Spinner color="black" />}
        {!this.props.loading &&
          this.props.authors &&
          <Container>
            <Content>
              <FlatList
                data={this.props.posts}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </Content>
          </Container>}
      </View>
    );
  }
}

InsightsListView.propTypes = {
  posts: React.PropTypes.any.isRequired,
  authors: React.PropTypes.any.isRequired,
  loading: React.PropTypes.bool.isRequired,
  loadInsights: React.PropTypes.func.isRequired,
  navigation: React.PropTypes.any.isRequired,
};

const mapStateToProps = createStructuredSelector({
  posts: getPosts(),
  authors: getAuthors(),
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
