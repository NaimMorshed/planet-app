import React from "react";
import { Linking, Pressable, ScrollView, StyleSheet, View } from "react-native";
import AndroidSafeArea from "../components/AndroidSafeArea";
import PlanetHeader from "../components/planer-header";
import Text from "../components/Text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="small" style={{ textTransform: 'uppercase' }}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = planet;

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  }

  return (
    <ScrollView style={[AndroidSafeArea, styles.container]}>
      <PlanetHeader backBtn={true} />
      <Text preset="h1" style={styles.header}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Pressable onPress={onPressLink} style={styles.sourceView}>
        <Text>Source: </Text>
        <Text preset="h4" style={styles.link}>Wikipedia</Text>
      </Pressable>
      <View style={{ height: 40 }} />

      <PlanetSection title="ROTATION TIME" value={rotationTime} />
      <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
      <PlanetSection title="RADIUS" value={radius} />
      <PlanetSection title="AVERAGE TEMP" value={avgTemp} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  header: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: spacing[5],
  },
  description: {
    textAlign: 'center',
    margin: spacing[5],
  },
  sourceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textDecorationLine: 'underline',
    textDecorationColor: colors.white
  },
  planetSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: spacing[6],
    marginVertical: spacing[2]
  }
});