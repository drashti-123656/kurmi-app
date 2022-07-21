import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Modal,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {REMOVE_IMAGE, SET_PROFILE_PICTURE} from './redux/galleryImageAction';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_GALLERY_IMAGE} from './redux/galleryImageAction';
import ImagePicker from 'react-native-image-crop-picker';
import {base_URL} from '../../services/httpServices';
import {MY_PROFILE_DETAILS} from '../profile/redux/MyProfileAction';
const Galleryimage = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [actionTriggered, setActionTriggered] = useState('');
  const [ProfilePicture, setProfilePicture] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [cropImage, setCropImage] = useState(null);
  const [images, setImages] = useState([]);
  const {myProfileData} = useSelector(state => state.myProfileDetail);
  let deviceHeight = Dimensions.get('window').height;
  let deviceWidth = Dimensions.get('window').width;

  const handleSetProfile = id => {
    setProfilePicture(id);
    dispatch({
      type: SET_PROFILE_PICTURE,
      id,
    });
    dispatch({
      type: MY_PROFILE_DETAILS,
    });
  };
  const handleRemoveProfile = id => {
    dispatch({
      type: REMOVE_IMAGE,
      id,
    });
    dispatch({
      type: MY_PROFILE_DETAILS,
    });
  };

  const AddGalleryimage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      noData: true,
      multiple: true,
      includeBase64: true,
    }).then(response => {
      let results = [];
      response.forEach(imageInfo => {
        results.push(imageInfo.data);
      });
      if (response.length > 1) {
        setImages([...results, ...images]);
      } else {
        setImages(results);
      }
      if (!response.didCancel) {
        const payload = {
          galleryImage: `data:image/png;base64, ${results}`,
        };

        dispatch({
          type: ADD_GALLERY_IMAGE,
          payload,
        });
        dispatch({
          type: MY_PROFILE_DETAILS,
        });
      }
    });
  };
  const editImage = index => {
    console.log('edit crop index', index);
    ImagePicker.openCropper({
      path: index,
      width: 300,
      height: 400,
      includeBase64: true,
    }).then(response => {
      if (!response.didCancel) {
        setCropImage(response);
      }
    });
  };
  useEffect(() => {
    dispatch({
      type: MY_PROFILE_DETAILS,
    });
  }, [myProfileData]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          {myProfileData.userGalleryImage.map(image => {
            const index = `${base_URL}${image.galleryImage}`;

            return (
              <>
                <View>
                  <TouchableOpacity onPress={() => editImage(index)}>
                    <ImageBackground
                      source={{
                        uri: `${base_URL}${image.galleryImage}`,
                      }}
                      style={{
                        width: deviceWidth / 3 - 6,
                        height: deviceHeight / 5,
                        resizeMode: 'contain',
                        margin: 2,
                        borderRadius: 10,
                      }}>
                      <View style={styles.circle}>
                        <TouchableOpacity
                          onPress={() => {
                            setActionTriggered('ACTION_2');
                            setModalData(image);
                            setModalVisible(true);
                          }}>
                          <MaterialCommunityIcons
                            name={
                              myProfileData.userProfileImage.includes(
                                image.galleryImage,
                              )
                                ? 'checkbox-marked-circle'
                                : 'checkbox-blank-circle-outline'
                            }
                            size={25}
                            color="#000"
                          />
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
              </>
            );
          })}
        </View>
        {modalData && (
          <Modal
            animationType="fade"
            visible={modalVisible}
            transparent={true}
            key={modalData.galleryImageId}>
            <View style={styles.pressContainer}>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.modalView}
              />
              <View style={styles.modalCont}>
                <View style={styles.selected}>
                  <Text style={styles.headerText}>Action</Text>
                </View>

                <View>
                  {actionTriggered === 'ACTION_1' ? (
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(false);
                      }}
                      style={styles.profilePicture}>
                      <Text style={styles.remove}> Remove</Text>
                    </TouchableOpacity>
                  ) : actionTriggered === 'ACTION_2' ? (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          handleSetProfile(modalData.galleryImageId);
                          setModalVisible(false);
                        }}
                        style={styles.profilePicture}>
                        <Text style={styles.profile}>
                          Set as profile picture
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => {
                          handleRemoveProfile(modalData.galleryImageId);
                          setModalVisible(false);
                        }}
                        style={styles.profilePicture}>
                        <Text style={styles.remove}> Remove</Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                  <View>
                    <TouchableOpacity
                      style={styles.btnContainer}
                      onPress={() => setModalVisible(false)}>
                      <Text style={styles.cancelButton}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.plus} onPress={AddGalleryimage}>
          <Entypo name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Galleryimage;
const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    height: 60,
    width: 60,
    backgroundColor: '$PRIMARY',
    borderRadius: 150,
    position: 'absolute',
    bottom: '5%',
    right: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalFooter: {
    marginTop: 40,
    marginLeft: 270,
  },
  btnContainer: {
    position: 'absolute',
    top: 30,
    zIndex: 100,
    left: Dimensions.get('window').width - 150,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  plus: {
    flexDirection: 'column',

    paddingBottom: 5,
  },

  cancelButton: {
    color: '$PRIMARY',
    fontWeight: '600',
  },
  pressContainer: {flex: 1, justifyContent: 'center'},
  circle: {
    height: 60,
    width: 60,
    borderRadius: 150,
    position: 'absolute',
    bottom: -10,
    right: -10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    height: '100%',
    width: '100%',
    opacity: 0.4,
    elevation: 20,
    backgroundColor: '#000000',
    position: 'absolute',
  },
  modalCont: {
    flex: 0.32,
    marginTop: -20,
    marginHorizontal: 30,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerText: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  profilePicture: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  profile: {
    fontWeight: '500',
    fontSize: 15,
    color: '#000',
  },
  remove: {
    fontWeight: '500',
    marginHorizontal: -5,
    fontSize: 15,
    color: '#000',
  },
  selected: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$PRIMARY',
  },
});
