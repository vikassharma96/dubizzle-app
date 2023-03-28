import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, ListRenderItemInfo} from 'react-native';
import {getPublicGist, getUserGist} from '../../api/gistApi';
import AppText from '../../components/AppText';
import GistItem from '../../components/GistItem';
import Header from '../../components/Header';
import LineSeperator from '../../components/LineSeperator';
import Loader from '../../components/Loader';
import useApi from '../../hooks/useApi';
import {IGist} from '../../types/gist.types';
import {DEFAULT_ITEM_COUNT, NO_DATA_AVAIL} from '../../utils/constants';
import styles from './styles';

type GistData = {
  currentPage: number;
  gistToShow: Array<any>;
};

const intialValue: GistData = {
  currentPage: 0,
  gistToShow: [],
};

const Home = () => {
  // custom hook to call Api
  const {request, loading, data} = useApi();
  const [gistData, setGistData] = useState<GistData>(intialValue);

  useEffect(() => {
    // api to fetch public gist
    request(getPublicGist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initPublicGist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const initPublicGist = () => {
    setGistData({
      currentPage: 0,
      gistToShow: data?.slice(0, DEFAULT_ITEM_COUNT) ?? [],
    });
  };

  // added pagination logic to avoid performance issue since each item is not of fixed height it adds
  // up to a lot of computational cost to render
  const getMoreGist = () => {
    if (gistData.gistToShow.length >= data.length) {
      return;
    }
    const {currentPage, gistToShow} = gistData;
    const nextPage = currentPage + 1;
    const nextPageSize = DEFAULT_ITEM_COUNT * nextPage;
    setGistData({
      currentPage: nextPage,
      gistToShow: gistToShow.concat(
        data.slice(nextPageSize, nextPageSize + DEFAULT_ITEM_COUNT),
      ),
    });
  };

  const onSearchUserGist = (userName: string) => {
    // api to fetch user gist
    request(getUserGist, userName);
  };

  const onResetUserGist = () => {
    request(getPublicGist);
  };

  const renderNoDataView = () => {
    if (loading) {
      return null;
    }
    return <AppText style={styles.noDataAvail}>{NO_DATA_AVAIL}</AppText>;
  };

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<IGist>) => <GistItem gist={item} />,
    [],
  );

  const keyExtractor = useCallback((item: IGist) => item.url, []);

  return (
    <>
      <Loader visible={loading} />
      <View style={styles.container}>
        <Header
          onSearchUserGist={onSearchUserGist}
          onResetUserGist={onResetUserGist}
        />
        <FlatList
          data={gistData.gistToShow}
          style={styles.listContainer}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={10}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderNoDataView}
          ItemSeparatorComponent={LineSeperator}
          onEndReached={getMoreGist}
          onEndReachedThreshold={0.5}
          removeClippedSubviews={true}
        />
      </View>
    </>
  );
};

export default Home;
