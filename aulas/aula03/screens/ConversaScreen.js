import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const mensagens = [
  {
    id: 1,
    avatar: "https://i.redd.it/0tregym33ttd1.jpeg",
    nome: "Mãe",
    msg: "Vc já tá vindo?",
    horario: "21/03/2025 22:30",
  },
  {
    id: 2,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1lxvi1YN37veUPZVDCZatLTlgmWi0UByI2A&s",
    nome: "Pai",
    msg: "Vai de carona?",
    horario: "21/03/2025 21:10",
  },
  {
    id: 3,
    avatar:
      "https://i.imgflip.com/57c2if.png?a483504",
    nome: "Imenso",
    msg: "bora sair hj?",
    horario: "21/03/2025 17:33",
  }
];

function ConversaScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "darkslategray" }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Conversas</Text>
      </View>
      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.item}>
              <Image style={styles.photo} source={{ uri: item.avatar }} />

              <View style={{flex: 1}}>
                <View style={styles.chat}>
                  <Text style={styles.contactName}>{item.nome}</Text>
                  <Text style={styles.contactHour}>{item.horario}</Text>
                </View>
                <Text style={styles.contactMsg}>{item.msg}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    backgroundColor: "darkgreen",
    padding: 16,
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  item: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  photo: {
    height: 48,
    width: 48,
    borderRadius: 48,
    marginRight: 16,
  },
  chat: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactName: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  contactHour: {
    fontSize: 12,
    color: "gray",
  },
  contactMsg: {
    color: "darkgray",
  },
});

export default ConversaScreen;
