import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { AuthContext } from "../../contexts/auth";

export default function Pedidos() {
  const { nome, user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Pagina Pedidos</Text>
      <Text>Nome: {nome}</Text>
      <Text>Email Logado: {user.email}</Text>
      <Text>Status: {user.status}</Text>
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
