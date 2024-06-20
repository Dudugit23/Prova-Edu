import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="title">Bem-vindo app-start</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">S O B R E</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.text}>
        O aplicativo   App-start é focado para deixar a movimentação entre apps e sites mais rapida, nele incluiem varios aplicativos presentes no cotidiano
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre mim:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText style={styles.text}>
        Ola eu sou Eduardo Garção Insaurralde  venho aqui desenvolver esse app com o intuito de deixar a vida dos meus usuarios mais dinamico, sou estudante da escola etec um profissional da area de informatica
        </ThemedText>
        <Image
          source={require("@/assets/images/edugelado.jpeg")}
          style={styles.aboutImage}
        />
      </ThemedView> 
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textoContainer: {
    gap: 8,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  reactLogo: {
    height: 300,
    width: 550,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  aboutImage: {
    width: 200,
    height: 200,
    marginRight: 8,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontStyle: 'italic',
  },
});