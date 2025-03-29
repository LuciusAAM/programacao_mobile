import { View, FlatList, StyleSheet } from "react-native";
import { Appbar, FAB, List } from "react-native-paper";

const contatos = [
  { id: 1, nome: "Mãe", fone: "61 91234-5678" },
  { id: 2, nome: "Pai", fone: "61 98765-4321" },
  { id: 3, nome: "Pequeno Irmão", fone: "61 91827-3645" },
];

function ContactScreen() {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Contatos" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            left={(props) => <List.Icon {...props} icon="account" />}
            title={item.nome}
            description={item.fone}
          />
        )}
      />
      <View>
        <FAB icon="plus" style={styles.fab} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    flexDirection: "row",
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});

export default ContactScreen;
