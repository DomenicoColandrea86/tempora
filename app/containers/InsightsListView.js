import React from 'react';
import moment from 'moment';
import { View, FlatList } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Body,
} from 'native-base';
import { connect } from 'react-redux';
import API from '../services/Api';

// Styles
import styles from './styles/InsightsListViewStyle';

class InsightsListView extends React.PureComponent {
  constructor() {
    super();
    this.getData();
  }

  state = {
    dataSource: [],
  };

  getData = async () => {
    const api = API.create();
    const posts = await api.getPosts();
    this.setState({
      dataSource: posts.data,
    });
  };

  getKey = item => item.id;

  renderItem({ item }) {
    return (
      <Card>
        <CardItem>
          <View style={styles.thumbnail}>
            <Thumbnail
              square
              size={80}
              source={{ uri: item.better_featured_image.source_url }}
            />
          </View>
          <Body>
            <Text>{item.title.rendered}</Text>
            <Text note>{moment(item.date).format('MMMM Do, YYYY')}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Container>
          <Content>
            <FlatList
              data={this.state.dataSource}
              renderItem={this.renderItem}
              keyExtractor={this.getKey}
            />
          </Content>
        </Container>
      </View>
    );
  }
}

export default connect(null, null)(InsightsListView);
