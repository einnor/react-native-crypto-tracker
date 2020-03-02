import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import fetchCoinData from '../Actions/FetchCoinData';
import CoinCard from './CoinCard';

const styles = {
  spinner: {
    color: '#253145'
  },
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55,
  }
};

class CryptoContainer extends Component {
  componentDidMount () {
    this.props.fetchCoinData();
  }

  renderCoinCards = () => {
    const { crypto } = this.props;
    return crypto.data.map((coin) => (
      <CoinCard
        key={coin.name}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percentage_change_24hr={coin.percentage_change_24hr}
        percentage_change_7d={coin.percentage_change_7d}
      />
    ));
  };

  render () {
    const { crypto } = this.props;
    const { contentContainer, spinner } = styles;

    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={'Loading...'}
            textStyle={spinner}
            animation="fade"
          />
        </View>
      );
    }

    return (
      <ScrollView contentContainerStyle={contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ crypto }) => ({
  crypto,
});

const mapDispatchToProps = {
  fetchCoinData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CryptoContainer);
