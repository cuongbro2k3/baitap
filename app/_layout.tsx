import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='bai1' options={{ headerShown: false }} />
      <Stack.Screen name='bai2' options={{ headerShown: false }} />
    </Stack>
  )
}
