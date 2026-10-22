import type { Metadata } from "next";
import DestinationPage from "../../components/DestinationPage";

export const metadata: Metadata = {
  title: "Private Tour Lava Tour Merapi | Omahku Hostel Jogja",
  description:
    "Petualangan jeep offroad menyusuri jejak erupsi Gunung Merapi, Bunker Kaliadem, Museum Sisa Hartaku, dan manuver air. Berangkat privat dari Omahku Hostel Jogja.",
};

export default function LavaTourPage() {
  return <DestinationPage slug="lava-tour" />;
}
