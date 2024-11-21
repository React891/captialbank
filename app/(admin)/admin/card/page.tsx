import CreditCard from "@/components/global/CreditCard";

export default function page() {
  return (
    <div className="grid grid-cols-4 gap-3 p-3">
      {[1, 2, 3, 4, 5, 6].map((el, key) => (
        <CreditCard key={key} track={key} />
      ))}
    </div>
  );
}
