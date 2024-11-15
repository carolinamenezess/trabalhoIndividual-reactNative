import { Image, Keyboard, Text, View} from "react-native";
import { styles } from "./style";
import LogoImage from '../../assets/logo.png';
import Story from '../../assets/story.png'
import Conversa from '../../assets/conversa.png'
import Coracao from '../../assets/coracao.png'
import Profile from '../../assets/profile.png'
import Circulo from '../../assets/circulo.png'
import Postagem from '../../assets/postagem.jpg'
import Icones2 from '../../assets/icones2.png'
import Salvamento from '../../assets/salvamento.png'
import Icones3 from '../../assets/icones3.png'
import C from '../../assets/c.jpg'
import L from '../../assets/l.jpg'
import P from '../../assets/p.jpg'
import Gato from '../../assets/gato.jpg'

export const Home = () => {

  return (
    <View style={styles.container}>

      <Image
        style={styles.logoImage} 
        source={LogoImage}
      />

      <View style={styles.story}>

        <Image
          style={styles.story} 
          source={Story}
        />

        <Image
          style={styles.conversa} 
          source={Conversa}
        />

        <Image
          style={styles.coracao} 
          source={Coracao}
        />
      </View>

      <View style={styles.story}>

        <Image
          style={styles.story}
          source={Story}
        />

        <View style={styles.profile}>

          <Image
            style={styles.profile}
            source={Profile}
          />

          <Image
            style={styles.circulo}
            source={Circulo}
          />

          <Image
            style={styles.circulo2}
            source={Circulo}
          />

          <Image
            style={styles.circulo3}
            source={Circulo}
          />

          <Text style={styles.text}>
            Your Story
          </Text>

          <Text style={styles.text2}>
            luan
          </Text>

          <Text style={styles.text3}>
            paçoca
          </Text>

          <Text style={styles.text4}>
            bb
          </Text>

          <Text style={styles.post}>
            bb
          </Text>

          <Text style={styles.pontos}>
            ...
          </Text>

          <View style={styles.postagem}>

            <Image
              style={styles.postagem}
              source={Postagem}
            />

          </View>

          <View style={styles.icones2}>

            <Image
              style={styles.icones2}
              source={Icones2}
            />

            <Image
              style={styles.salvamento}
              source={Salvamento}
            />

          </View>

          <View style={styles.icones3}>

            <Image
              style={styles.icones3}
              source={Icones3}
            />

          </View>

          <View style={styles.imageStory}>

            <Image
              style={styles.imageStory}
              source={C}
            />

            <Image
              style={styles.imageStory2}
              source={L}
            />

            <Image
              style={styles.imageStory3}
              source={P}
            />

            <Image
              style={styles.imageStory4}
              source={Gato}
            />

            <Image
              style={styles.imagePerfil}
              source={Gato}
            />

          </View>

          <View style={styles.curtidas}>

            <Image
              style={styles.curtidas}
              source={C}
            />

            <Image
              style={styles.curtidasL}
              source={L}
            />

          </View>

          <View style={styles.liked}>

            <Text style={styles.liked}>
              Liked by carol and others
            </Text>

          </View>
        </View>
      </View>
    </View>
  )
}
