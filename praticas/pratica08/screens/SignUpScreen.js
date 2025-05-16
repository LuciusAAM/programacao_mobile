import { View, Text, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// d) Schema de validação
const schema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  email: Yup.string()
    .email("E-mail inválido")
    .required("E-mail é obrigatório"),
  senha: Yup.string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirmarSenha: Yup.string()
    .oneOf([Yup.ref("senha"), null], "As senhas não coincidem")
    .required("Confirme a senha"),
});

function SignUpScreen({ navigation }) {
  // e) useForm com yupResolver
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // f + g) Função onSubmit
  const onSubmit = (data) => {
    Alert.alert("Conta criada com sucesso!");
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Nome */}
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Nome"
            mode="outlined"
            autoCapitalize="words"
            value={value}
            onChangeText={onChange}
            error={!!errors.nome}
          />
        )}
      />
      {errors.nome && <Text style={{ color: "red" }}>{errors.nome.message}</Text>}

      {/* Email */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="E-mail"
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
            error={!!errors.email}
          />
        )}
      />
      {errors.email && <Text style={{ color: "red" }}>{errors.email.message}</Text>}

      {/* Senha */}
      <Controller
        control={control}
        name="senha"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Senha"
            mode="outlined"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            error={!!errors.senha}
          />
        )}
      />
      {errors.senha && <Text style={{ color: "red" }}>{errors.senha.message}</Text>}

      {/* Confirmar Senha */}
      <Controller
        control={control}
        name="confirmarSenha"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Confirmar Senha"
            mode="outlined"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            error={!!errors.confirmarSenha}
          />
        )}
      />
      {errors.confirmarSenha && (
        <Text style={{ color: "red" }}>{errors.confirmarSenha.message}</Text>
      )}

      {/* Botão Criar */}
      <Button
        mode="contained"
        style={{ marginTop: 16 }}
        onPress={handleSubmit(onSubmit)}
      >
        Criar
      </Button>
    </View>
  );
}

export default SignUpScreen;