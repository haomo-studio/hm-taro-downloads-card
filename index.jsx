'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';

import downloadImage from './images/img_24402_0_0.png'

class HmDownloadsCard extends Component {
  constructor(props) {
    super(props);
    let defaultState = {
      count: '299.674',
      downloads: '下载量',
      downloadImage
    };
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  render() {
    return (
      <View style={styles.hmDownloadsCard}>
        <View style={styles.container}>
          {true && (
            <View style={styles.downloadDetail}>
              <View style={styles.downloadDetailContainer}>
                <Text style={styles.count}>{this.state.count}</Text>
                <Text style={styles.downloads}>{this.state.downloads}</Text>
              </View>
            </View>
          )}
          <Image style={styles.downloadImage} src={this.state.downloadImage} />
        </View>
      </View>
    );
  }
}
export default HmDownloadsCard;
