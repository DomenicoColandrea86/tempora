import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, FlatList } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { Container, Content, Text } from 'native-base';
import InsightsListItem from '../../components/Insights/InsightsListItem';
import { InsightsActions, getInsights, getLoading } from '../../store/Insights';
import styles from './styles';

class InsightsListView extends React.PureComponent {
  componentDidMount() {
    this.props.loadInsights();
  }

  renderItem({ item }) {
    return <InsightsListItem item={item} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Content>
            {this.props.loading && <Text>Loading...</Text>}
            <FlatList
              data={this.props.insights}
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
  insights: React.PropTypes.array,
  loading: React.PropTypes.bool,
  loadInsights: React.PropTypes.func.isRequired,
};

InsightsListView.defaultProps = {
  insights: [],
  loading: false,
};

const mapStateToProps = createStructuredSelector({
  insights: getInsights(),
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
