import translate from '../../translations/configTranslations';

const heightDropdwonList =  [
  {id: 1, name: '4ft 5inch - 134 cm'},
  {id: 2, name: '4ft 6inch - 137 cm'},
  {id: 3, name: '4ft 7inch - 139 cm'},
  {id: 4, name: '4ft 8inch - 142 cm'},
  {id: 5, name: '4ft 9inch - 144 cm'},
  {id: 6, name: '4ft 10inch - 147 cm'},
  {id: 8, name: '4ft 11inch - 149 cm'},
  {id: 9, name: '5ft - 152 cm'},
  {id: 10, name: '5ft 1inch - 154 cm'},
  {id: 11, name: '5ft 2inch - 157 cm'},
  {id: 12, name: '5ft 3inch - 160 cm'},
  {id: 13, name: '5ft 4inch - 162 cm'},
  {id: 14, name: '5ft 5inch - 165 cm'},
  {id: 15, name: '5ft 6inch - 167 cm'},
  {id: 16, name: '5ft 7inch - 170 cm'},
  {id: 17, name: '5ft 8inch - 172 cm'},
  {id: 18, name: '5ft 9inch - 175 cm'},
  {id: 19, name: '5ft 10inch - 177 cm'},
  {id: 20, name: '5ft 11inch - 180 cm'},
  {id: 21, name: '6ft - 182 cm'},
  {id: 22, name: '6ft 1inch - 185 cm'},
  {id: 23, name: '6ft 2inch - 187 cm'},
  {id: 24, name: '6ft 3inch - 190 cm'},
  {id: 25, name: '6ft 4inch - 193 cm'},
  {id: 26, name: '6ft 5inch - 195 cm'},
  {id: 27, name: '6ft 6inch - 198 cm'},
  {id: 28, name: '6ft 7inch - 200 cm'},
  {id: 29, name: '6ft 8inch - 203 cm'},
  {id: 30, name: '6ft 9inch - 205 cm'},
  {id: 31, name: '6ft 10inch - 208 cm'},
  {id: 32, name: '6ft 11inch - 210 cm'},
]

const profilemakerDropdownlist = [
  {name: translate('profilemaker.Myself'), id: 1},
  {name: translate('profilemaker.Relatives'), id: 2},
  {name: translate('profilemaker.Parents'), id: 3},
  {name: translate('profilemaker.Other'), id: 4},
];
const colourDropdownList = [
  {name: translate('colour.Fair'), id: 1},
  {name: translate('colour.Light'), id: 2},
  {name: translate('colour.Medium'), id: 3},
  {name: translate('colour.Dark'), id: 4},
];
const disabilityDropdownList = [
  {name: translate('Disability.Yes'), id: 1},
  {name: translate('Disability.No'), id: 2},
];
const bloodgroupDropdownList = [
  {name: translate('BloodGroup.O+'), id: 1},
  {name: translate('BloodGroup.O-'), id: 2},
  {name: translate('BloodGroup.A+'), id: 3},
  {name: translate('BloodGroup.A-'), id: 4},
  {name: translate('BloodGroup.B+'), id: 1},
  {name: translate('BloodGroup.B-'), id: 2},
  {name: translate('BloodGroup.AB+'), id: 2},
  {name: translate('BloodGroup.AB-'), id: 2},
];

export  {
  heightDropdwonList,
  profilemakerDropdownlist,
  colourDropdownList,
  disabilityDropdownList,
  bloodgroupDropdownList,
};
