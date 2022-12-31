import { ScrollView } from "native-base";
import React from "react";

import TitleLarge from "../components/atoms/TitleLarge";
import useBooks from "../hooks/useBooks";

export function Home() {
  const { results } = useBooks();
  console.log(results);
  return (
    <ScrollView flex={1} scrollEventThrottle={100}>
      <TitleLarge title="Home" />
    </ScrollView>
  );
}
