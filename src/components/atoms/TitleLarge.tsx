import { Text } from "native-base";
import React from "react";

interface TitleLargeProps {
  title: string;
}

export default function TitleLarge({ title }: TitleLargeProps) {
  return (
    <Text fontSize="4xl" fontFamily="HKGrotesk-Bold">
      {title}
    </Text>
  );
}
