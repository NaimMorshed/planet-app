import React, { useState } from "react";
import { FlatList, StyleSheet, View, Pressable, TextInput } from "react-native";
import PlanetHeader from "../components/planer-header";
import AndroidSafeArea from "../components/AndroidSafeArea";
import Text from "../components/Text/text";
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/planet-list";
import { spacing } from "../theme/spacing";
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [list, setList] = useState(PLANET_LIST);

  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter(item => {
      const itemName = item.name.toLowerCase();
      const userTypedText = text.toLowerCase();
      return itemName.indexOf(userTypedText) > -1;
    })
    setList(filteredList);
  };

  return (
    <View style={[AndroidSafeArea, styles.container]}>
      <PlanetHeader />

      <TextInput
        placeholder="Type the planet name"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text) => searchFilter(text)}
      />

      <FlatList
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          const { name, color } = item
          return (
            <Pressable
              onPress={() => navigation.navigate('Details', { planet: item })}
              style={styles.list}
            >
              <View style={styles.subList}>
                <View style={[styles.circle, { backgroundColor: color }]}></View>
                <Text preset="h4" style={{ textTransform: "uppercase" }}>{name}</Text>
              </View>
              <AntDesign name="right" size={18} color="white" />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  list: {
    padding: spacing[5],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  subList: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginRight: spacing[3],
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.2,
  },
  searchInput: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5]
  }
})
