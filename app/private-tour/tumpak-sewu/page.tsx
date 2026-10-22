import type { Metadata } from "next";
import DestinationPage from "../../components/DestinationPage";

export const metadata: Metadata = {
  title: "Private Tour Air Terjun Tumpak Sewu | Omahku Hostel Jogja",
  description:
    "Jelajahi tirai air raksasa Tumpak Sewu Lumajang dan eksotisme tebing Goa Tetes. Private tour fleksibel berangkat langsung dari Omahku Hostel Jogja.",
};

export default function TumpakSewuPage() {
  return <DestinationPage slug="tumpak-sewu" />;
}
