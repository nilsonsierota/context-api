import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

export default function Home() {
  const navigation = useNavigation();

  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Pagina Home</Text>
      <Text>Bem Vindo: {user.email} </Text>

      <Button
        title="Acessar pedidos"
        onPress={() => navigation.navigate("Pedidos")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
