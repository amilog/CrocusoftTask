import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import SelectedIcon from '../assets/svgs/SelectedIcon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface ColorOptionProps {
  color: string;
  selected: boolean;
  onPress: () => void;
}

const ColorOption: React.FC<ColorOptionProps> = ({
  color,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.colorOption, {backgroundColor: color}]}
      onPress={onPress}>
      {selected && <SelectedIcon />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  colorOption: {
    width: hp('2%'),
    height: hp('2%'),
    borderRadius: hp('5%') / 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
});

export default ColorOption;
