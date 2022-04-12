import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MultiSelect from 'react-native-multiple-select';

const DropDown = ({items, selectText, selectedItems, onSelectedItemsChange}) => {
  return (
    <View>
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="id"
        displayKey="name"
        single
        onSelectedItemsChange={onSelectedItemsChange}
        selectText={selectText}
        selectedItems={selectedItems}
        searchInputPlaceholderText="Search"
        onChangeInput={text => console.log(text)}
        tagRemoveIconColor={'black'}
        tagBorderColor={'black'}
        tagTextColor={'black'}
        selectedItemTextColor={'black'}
        selectedItemIconColor={'white'}
        itemTextColor={'black'}
        searchInputStyle={styles.brandSearchInputStyle}
        //submitButtonText="Submit"
        //submitButtonColor={'transparent'}
        styleListContainer={styles.listContainer}
        styleDropdownMenuSubsection={styles.dropdownSubSection}
        styleInputGroup={styles.inputGroup}
        styleItemsContainer={styles.itemContainer}
        styleSelectorContainer={styles.selectorContainer}
        styleRowList={styles.rowList}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  brandSearchInputStyle: {
    height: hp(7),
    fontSize: 18,
  },
  listContainer: {
    height: hp(40),
    borderRadius: 20,
  },
  dropdownSubSection: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    height: hp(7),
    paddingLeft: 10,
    marginTop: 20,
    marginHorizontal: 30,
  },
  inputGroup: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    borderRadius: 10,
  },
  itemContainer: {
    // backgroundColor: '$PRIMARY',
    borderRadius: 10,
  },
  selectorContainer: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  rowList: {
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 20,
  },
});
