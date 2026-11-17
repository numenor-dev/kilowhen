import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import { Toast } from "@heroui/react";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <Toast.Provider placement="top" />
      <Header />
      <Hero />
    </div>
  );
}
