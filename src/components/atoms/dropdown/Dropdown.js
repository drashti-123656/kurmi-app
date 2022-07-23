import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MultiSelect from 'react-native-multiple-select';

const Dropdown = ({
  items,
  uniqueKey,
  displayKey,
  selectText,
  selectedItems,
  onSelectedItemsChange,
  style,
  textInputProps,
  fixedHeight,
  styleListContainer,
  searchInputStyle,
  hideDropdown,
  searchIcon,
  editable,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={style}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey={uniqueKey}
          displayKey={displayKey}
          single
          editable={editable}
          searchInputPlaceholderText="Search"
          searchIcon={searchIcon}
          textInputProps={textInputProps}
          style={styles.dropdownMargin}
          onSelectedItemsChange={onSelectedItemsChange}
          selectText={<Text style={styles.tag}>{selectText}</Text>}
          selectedItems={selectedItems}
          onChangeInput={text => console.log(text)}
          tagRemoveIconColor={'black'}
          tagBorderColor={'black'}
          tagTextColor={'black'}
          textColor={'black'}
          fixedHeight={fixedHeight}
          selectedItemTextColor={'black'}
          selectedItemIconColor={'white'}
          itemTextColor={'black'}
          searchInputStyle={searchInputStyle}
          submitButtonText="Submit"
          submitButtonColor={'black'}
          styleListContainer={styleListContainer}
          styleDropdownMenuSubsection={styles.dropdownSubSection}
          styleInputGroup={styles.inputGroup}
          styleItemsContainer={styles.itemContainer}
          styleSelectorContainer={styles.selectorContainer}
          styleRowList={styles.rowList}
          hideDropdown={hideDropdown}
        />
      </View>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  listContainer: {
    height: hp(40),
    borderRadius: 20,
  },
  mainContainer: {
    overflow: 'hidden',
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
    //backgroundColor: '$PRIMARY',
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
  dropdownMargin: {
    marginTop: 40,
  },
  tag: {
    color: '#666666',
  },
});
