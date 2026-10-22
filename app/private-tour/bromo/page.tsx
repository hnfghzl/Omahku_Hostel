import type { Metadata } from "next";
import DestinationPage from "../../components/DestinationPage";

export const metadata: Metadata = {
  title: "Private Tour Sunrise Gunung Bromo | Omahku Hostel Jogja",
  description:
    "Saksikan keindahan golden sunrise Penanjakan, kawah aktif Gunung Bromo, dan Lautan Pasir. Private tour nyaman berangkat malam dari Omahku Hostel Jogja.",
};

export default function BromoPage() {
  return <DestinationPage slug="bromo" />;
}
