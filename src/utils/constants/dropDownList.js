import translate from '../../translations/configTranslations';

const profilemakerDropdownlist = [
    {name: translate('profilemaker.Myself'), id: 1},
    {name: translate('profilemaker.Relatives'), id: 2},
    {name:translate('profilemaker.Parents'), id: 3},
    {name: translate('profilemaker.Other'), id: 4},
  
  ];
  const colourDropdownList = [
    {name: translate('colour.Fair'), id: 1},
    {name: translate('colour.Light'), id: 2},
    {name:translate('colour.Medium'), id: 3},
    {name: translate('colour.Dark'), id: 4},
  ];
  const disabilityDropdownList = [
    {name: translate('Disability.Yes'), id: 1},
    {name: translate('Disability.No'), id: 2},
    
  ];
  const bloodgroupDropdownList = [
    {name: translate('BloodGroup.O+'), id: 1},
    {name: translate('BloodGroup.O-'), id: 2},
    {name:translate('BloodGroup.A+'), id: 3},
    {name: translate('BloodGroup.A-'), id: 4},
    {name: translate('BloodGroup.B+'), id: 1},
    {name: translate('BloodGroup.B-'), id: 2},
    {name: translate('BloodGroup.AB+'), id: 2},
    {name: translate('BloodGroup.AB-'), id: 2},


  ];

  export default {profilemakerDropdownlist,colourDropdownList,disabilityDropdownList,bloodgroupDropdownList};
