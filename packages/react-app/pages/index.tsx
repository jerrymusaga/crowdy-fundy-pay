import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

  return (
    <div className="min-h-screen relative">
      <Hero />
      <Projects />
    </div>
  );
}
