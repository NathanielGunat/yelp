import { Airbnb, Booking, PlumGuide } from "@components/icons";

export default function Partners() {
  return (
    <>
      <p>Partnered with:</p>
      <div className="flex gap-3">
        <Airbnb />
        <Booking />
        <PlumGuide />
      </div>
    </>
  );
}
