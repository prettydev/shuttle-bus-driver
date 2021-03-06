import React, { ReactElement, memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

type Props = {
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: theme.colors.icon,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
});

const Header = ({ children }: Props): ReactElement => (
  <Text style={styles.header}>{children}</Text>
);

export default memo(Header);
