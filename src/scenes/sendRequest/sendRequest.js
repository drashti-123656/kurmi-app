import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch, useSelector} from 'react-redux';
import {PAGE_SIZE} from '../../utils/constants/appConstants';
import {
  RECEIVED_FRIEND_REQUEST_LIST,
  SEND_FRIEND_REQUEST_LIST,
} from './redux/sendRequestAction';
import Card from '../../components/molecule/card/Card';
import FriendRequestCard from '../../components/molecule/card/FriendRequestCard';

import Loader from '../../components/atoms/buttons/Loader';
import RootScreen from '../../components/molecule/rootScreen/RootScreen';

const SendRequest = ({navigation}) => {
  const {
    sendfriendRequestData,
    receivedfriendRequestData,
    isFetching,
    isPaginationRequired,
    pageIndex,
  } = useSelector(state => state.friendRequest);
  const dispatch = useDispatch();
  const _fetchsendProfiles = pageNumber => {
    setreceived(false);
    const payload = {
      page: pageNumber,
      pageSIze: PAGE_SIZE,
      order: {
        column: 'id',
        type: 'desc',
      },
    };
    dispatch({
      type: SEND_FRIEND_REQUEST_LIST,
      payload,
    });
  };
  const _fetchProfiles = pageNumber => {
    const payload = {
      page: pageNumber,
      pageSIze: PAGE_SIZE,
      order: {
        column: 'id',
        type: 'desc',
      },
    };
    dispatch({
      type: SEND_FRIEND_REQUEST_LIST,
      payload,
    });
    dispatch({
      type: RECEIVED_FRIEND_REQUEST_LIST,
      payload,
    });
  };

  useEffect(() => {
    if (received) {
      _fetchProfiles(1);
    } else {
      _fetchsendProfiles(1);
    }
  }, []);

  const __refreshOnPull = () => {
    if (received) {
      _fetchProfiles(1);
    } else {
      _fetchsendProfiles(1);
    }
  };

  const _paginateUSersProfiles = () => {
    if (isPaginationRequired) {
      if (received) {
        _fetchProfiles(pageIndex + 1);
      } else {
        _fetchsendProfiles(pageIndex + 1);
      }
    }
  };

  const renderItem = ({item}) => {
    return <FriendRequestCard navigation={navigation} item={item} />;
  };
  const _renderReceivedMsg = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.textStyle}>
          {' '}
          आपको कोई अनुरोध प्राप्त नहीं हुआ है|{' '}
        </Text>
      </View>
    );
  };
  const _renderSendMsg = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.textStyle}> आपने कोई अनुरोध नहीं भेजा है। </Text>
      </View>
    );
  };

  const renderLoader = () => (isFetching ? <Loader /> : null);
  const [received, setreceived] = useState(true);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => setreceived(true)}>
              <Text style={styles.text}>Received</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setreceived(false)}>
              <Text style={styles.textTitle}>Sent</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View
            style={
              received
                ? styles.underlineTextStyle
                : styles.underlinetTextTitleStyle
            }
          />
          <View style={styles.separatorLine} />
        </View>

        {received ? (
          <FlatList
            data={receivedfriendRequestData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={renderLoader}
            ListEmptyComponent={_renderReceivedMsg}
            initialNumToRender={10}
            refreshControl={
              <RefreshControl
                refreshing={isFetching}
                onRefresh={__refreshOnPull}
              />
            }
            onEndReachedThreshold={0.5}
            onEndReached={_paginateUSersProfiles}
          />
        ) : (
          <FlatList
            data={sendfriendRequestData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={renderLoader}
            ListEmptyComponent={_renderSendMsg}
            initialNumToRender={10}
            refreshControl={
              <RefreshControl
                refreshing={isFetching}
                onRefresh={__refreshOnPull}
              />
            }
            onEndReachedThreshold={0.5}
            onEndReached={_paginateUSersProfiles}
          />
        )}
      </View>
    </>
  );
};

export default SendRequest;
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
  },
  title: {
    height: 50,
    backgroundColor: 'White',
  },
  text: {
    marginLeft: 50,
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
    color: '$PRIMARY',
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    marginRight: 90,
    marginTop: 15,
    color: '$PRIMARY',
    fontSize: 15,
    fontWeight: 'bold',
  },

  separatorLine: {
    width: '100%',
    backgroundColor: '#696969',
    height: 1.2,
    marginRight: 24,
  },
  underlineTextStyle: {
    width: '50%',
    backgroundColor: '$PRIMARY',
    height: 5,
    marginTop: 10,
    marginRight: 24,
    textDecorationLine: 'underline',
  },
  underlinetTextTitleStyle: {
    width: '50%',
    backgroundColor: '$PRIMARY',
    height: 5,
    marginTop: 10,

    marginRight: 24,
    textDecorationLine: 'underline',
    marginLeft: 200,
  },
  titleContainer: {
    justifyContent: 'center',

    marginTop: '60%',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
    color: '$PRIMARY',
    fontWeight: '600',
  },
});
