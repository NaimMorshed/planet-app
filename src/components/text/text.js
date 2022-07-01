import React from 'react';
import { View, Text as RNText, StyleSheet } from 'react-native';
import { presets } from './text.preset';

export default function Text({ children, preset = 'default' }) {
  const textStyles = StyleSheet.compose(preset[presets], style);
  return <RNText style={textStyles}>{children}</RNText>
}