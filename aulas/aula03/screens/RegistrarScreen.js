import { View, Text, StyleSheet, TextInput, Button } from "react-native";

function RegistrarScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Criar conta</Text>
      </View>

      <View style={styles.formRegister}>
        <TextInput style={styles.input} placeholder="Nome"/>
        <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address"/>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry/>
        <Button title="Registrar"/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {flex: 1},
    appBar: {
        height: 64,
        backgroundColor: "blue",
        padding: 16,
        justifyContent: "center",
        elevation: 3,
        marginBottom: 8,
    },
    appTitle: {
        fontSize: 24,
        color: "white",
    
    },
    formRegister: {
        backgroundColor: "lightgray",
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    input: {
        padding: 16,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 8,
        marginBottom: 8,

    }
})


export default RegistrarScreen;
