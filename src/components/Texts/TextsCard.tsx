import {Clipboard} from "lucide-react";
import { TextCard } from "./TextCard";

const infoCardData = [
  {
    title: "BASE GÉNÉRALE",
    counter: 1380,
    counterText: "Textes",
    textColor: "text-blue-600",
  },
  {
    title: "MA BASE",
    counter: 219,
    counterText: "Texte(s)",
    textColor: "text-green-600",
    icon: Clipboard,
  },
  {
    title: "CONFORMES",
    counter: 0,
    counterText: "",
    textColor: "text-gray-500",
    icon: Clipboard,
  },
  {
    title: "PARTIELLEMENT CONFORMES",
    counter: 0,
    counterText: "",
    textColor: "text-orange-500",
    icon: Clipboard,
  },
  {
    title: "NON CONFORMES",
    counter: 0,
    counterText: "",
    textColor: "text-red-500",
    icon: Clipboard,
  },
  {
    title: "NON ANALYSÉS",
    counter: 161,
    counterText: "100%",
    textColor: "text-blue-600",
    icon: Clipboard,
  },
];

const TextsCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {infoCardData.map((card, index) => (
        <TextCard
          key={index}
          title={card.title}
          titleColor={card.textColor}
          counter={card.counter}
          counterText={card.counterText}
          icon={card.icon}
        />
      ))}
    </div>
  );
};
export default TextsCard;
