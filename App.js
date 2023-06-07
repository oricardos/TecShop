import { SafeAreaView, StatusBar, FlatList, Text } from "react-native";
import { Services } from "./src/screens/Services";
import { Item } from "./src/components/Item";

const services = [
  {
    id: 1,
    name: "Teclado Mecânico",
    price: 150.0,
    description:
      "Teclado com switches mecânicos para maior precisão e resposta tátil.",
  },
  {
    id: 2,
    name: "Fones de Ouvido",
    price: 80.9,
    description:
      "Fones de ouvido com cancelamento de ruído para uma experiência sonora imersiva.",
  },
  {
    id: 3,
    name: "Monitor Ultrawide",
    price: 1000.0,
    description:
      "Monitor com formato ultrawide para uma visão expandida e maior produtividade.",
  },
  {
    id: 4,
    name: "Mouse Gamer",
    price: 70.0,
    description:
      "Mouse com sensor de alta precisão e botões programáveis para jogos.",
  },
  {
    id: 5,
    name: "Notebook",
    price: 2000.0,
    description:
      "Notebook potente e portátil, ideal para trabalho e entretenimento.",
  },
  {
    id: 6,
    name: "Câmera Digital",
    price: 500.0,
    description:
      "Câmera com alta resolução para capturar momentos especiais com qualidade.",
  },
  {
    id: 7,
    name: "Roteador Wi-Fi",
    price: 120.0,
    description:
      "Roteador de alta velocidade para uma conexão estável e rápida à internet.",
  },
  {
    id: 8,
    name: "Impressora Multifuncional",
    price: 250.0,
    description:
      "Impressora que também funciona como scanner e copiadora, oferecendo versatilidade.",
  },
  {
    id: 9,
    name: "Placa de Vídeo",
    price: 400.0,
    description:
      "Placa de vídeo dedicada para melhor desempenho em jogos e aplicações gráficas.",
  },
  {
    id: 10,
    name: "Disco SSD",
    price: 150.0,
    description:
      "Disco de armazenamento de estado sólido para velocidade e performance superiores.",
  },
];

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Services />
      <FlatList
        data={services}
        keyExtractor={(id) => String(id)}
        renderItem={({ item: { name, price, description } }) => {
          return <Item name={name} price={price} description={description} />;
        }}
      />
    </SafeAreaView>
  );
}
