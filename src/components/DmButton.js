import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from '../styles/form/button.styles';

/**
 * reusable button component
 */
function DmButton({
  isLoading,
  title,
  action,
  primary,
  btnStyle,
  txtStyle,
  dark,
  transparent,
}) {
  const dmStyle = styles(dark);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        primary ? dmStyle.btnPrimary : (transparent ? dmStyle.btnTransparent : dmStyle.btnSecondary),
        !btnStyle ? dmStyle.button : btnStyle,
      ]}
      onPress={action}
    >
      {isLoading ? (
        <ActivityIndicator size={14} color={primary ? dmStyle.textPrimary : dmStyle.textSecondary} />
      ) : (
        <Text
          style={[
            primary ? dmStyle.textPrimary : dmStyle.textSecondary,
            !txtStyle ? dmStyle.text : txtStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default DmButton;
