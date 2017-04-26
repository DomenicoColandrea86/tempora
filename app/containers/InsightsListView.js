import React from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import API from '../services/Api';

// Styles
import styles from './styles/InsightsListViewStyle';

class InsightsListView extends React.Component {

  constructor(props) {
    super(props);
    // If you need scroll to bottom, consider http://bit.ly/2bMQ2BZ

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [];

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2;

    // DataSource configured
    this.ds = new ListView.DataSource({ rowHasChanged });

    // Datasource is always in state
    this.state = {
      dataSource: this.ds.cloneWithRows(dataObjects),
    };
    this.getData();
  }

  getData = async () => {
    const api = API.create();
    const posts = await api.getPosts();
    this.setState({
      dataSource: this.ds.cloneWithRows(posts.data),
    });
  };

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow(rowData) { // eslint-disable-line no-underscore-dangle
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{rowData.title.rendered}</Text>
      </View>
    );
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData() { // eslint-disable-line no-underscore-dangle
    return this.state.dataSource.getRowCount() === 0;
  }

  // Render a footer.
  _renderFooter = () => // eslint-disable-line no-underscore-dangle
    (<Text> - Footer - </Text>);

  render() {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow} // eslint-disable-line no-underscore-dangle
          renderFooter={this._renderFooter} // eslint-disable-line no-underscore-dangle
          enableEmptySections
          pageSize={15}
        />
      </View>
    );
  }
}

export default connect(null, null)(InsightsListView);
