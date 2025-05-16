import { View, Text, TouchableOpacity } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aqui você vai lidar com o login real
  };

  return (
    <View style={{ flex: 1, padding: 16, justifyContent: "center" }}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: { value: true, message: "E-mail é obrigatório" },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "E-mail inválido",
          },
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            error={errors.email}
          />
        )}
      />
      <HelperText type="error" visible={!!errors.email}>
        {errors.email?.message}
      </HelperText>

      <Controller
        control={control}
        name="senha"
        rules={{
          required: "Senha é obrigatória",
          minLength: {
            value: 8,
            message: "Deve ter no mínimo 8 caracteres",
          },
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Senha"
            mode="outlined"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            error={errors.senha}
          />
        )}
      />
      <HelperText type="error" visible={!!errors.senha}>
        {errors.senha?.message}
      </HelperText>

      <Button
        style={{ marginTop: 16 }}
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        Entrar
      </Button>

      <View style={{ marginTop: 16, alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
          <Text style={{ color: "#1e90ff", marginBottom: 8 }}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>

        <Text>
          Não tem uma conta?{" "}
          <Text
            style={{ color: "#1e90ff" }}
            onPress={() => navigation.navigate("CriarConta")}
          >
            Criar uma conta
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default LoginScreen;
