import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { CoinCard } from '../../components';
import * as selectors from './store/selectors';
import { getCoinsRequest } from './store/actions';


const styles = StyleSheet.create({
  spinner: {
    color: '#253145'
  },
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55,
  }
});

const CryptoContainer = ({ getCoinsRequest, isLoading, error, coins }) => {
  useEffect(() => {
    getCoinsRequest();
  }, []);

  const renderCoinCards = () => {
    return coins.map((coin) => (
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

  const { contentContainer, spinner } = styles;

  if (crypto.isFetching) {
    return (
      <View>
        <Spinner
          visible={isLoading}
          textContent={'Loading...'}
          textStyle={spinner}
          animation="fade"
        />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={contentContainer}>
      {renderCoinCards()}
    </ScrollView>
  );
}

const mapStateToProps = (state) => ({
  isLoading: selectors.getIsLoading(state),
  coins: selectors.getItems(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = {
  getCoinsRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CryptoContainer);
