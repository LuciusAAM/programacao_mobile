import { useState } from "react";
import { View, Text, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";

function ForgotPasswordScreen() {
  // b) Estados para email e erro
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  // c + d) Função de validação do e-mail
  const validarEmail = () => {
    if (!email) {
      setErro("E-mail é obrigatório.");
    } else if (!email.includes("@")) {
      setErro("E-mail inválido.");
    } else {
      setErro("");
      Alert.alert("Instruções enviadas para o e-mail!");
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        label="E-mail"
        mode="outlined"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        error={!!erro}
      />
      {/* f) Texto de erro */}
      {erro && <Text style={{ color: "red" }}>{erro}</Text>}

      {/* g) Botão com validação */}
      <Button mode="contained" style={{ marginTop: 16 }} onPress={validarEmail}>
        Enviar
      </Button>
    </View>
  );
}

export default ForgotPasswordScreen;