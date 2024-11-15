import { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from "react-native";
import { ButtonTypes } from "../../components/ButtonTypes";
import { styles } from "./style";
import { TextInputField } from "../../components/TextInput";
import LogoImage from "../../assets/logo.png";
import FImage from "../../assets/f.png";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    Alert.alert("Botão para realizar login");
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.boxForms}>
          <Image style={styles.logoImage} source={LogoImage} />

          <TextInputField
            placeHolder="Telefone, nome de usuário ou email"
            valueInput={email}
            hadleFunctionInput={handleEmail}
          />

          <TextInputField
            placeHolder="Senha"
            valueInput={password}
            hadleFunctionInput={handlePassword}
            typeInput={true}
          />

          <ButtonTypes
            title="Entrar"
            handleFunction={handleLogin}
            propsBackgroundColor="#1B75BB98"
          />

          <Text style={styles.text}>━━━━━━ ou ━━━━━━</Text>

          <TouchableOpacity>
            <Image style={styles.fImage} source={FImage} />

            <Text style={styles.text2}>Entrar com o facebook</Text>

            <Text style={styles.text3}>Esqueceu a senha?</Text>

            <Text style={styles.text4}>Não tem uma conta?</Text>

            <Text style={styles.text5}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
