import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count is {count}</Text>

      <View style={{ flexDirection: "row", gap: 4, padding: 12 }}>
        <Button title="Add" onPress={() => setCount((c) => c + 1)} />
        <Button title="Rem" onPress={() => setCount((c) => c - 1)} />
      </View>
    </View>
  );
}
