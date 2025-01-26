import { ActionCard } from "./ActionCard";
import { Wrench } from "lucide-react";

const ActionCardData = [
  {
    title: "NOMBRE ACTIONS EN COURS",
    counter: 0,
    counterText: "Action(s)",
    textColor: "text-green-600",
    icon: Wrench,
  },
  {
    title: "ACTIONS RÉALISÉES",
    counter: 0,
    counterText: "Action(s)",
    textColor: "text-green-600",
    icon: Wrench,
  },
  {
    title: "ACTIONS NON RÉALISÉES",
    counter: 0,
    counterText: "Action(s)",
    textColor: "text-red-500",
    icon: Wrench,
  },
  {
    title: "ACTIONS RÉALISÉES ET EFFICACES",
    counter: 0,
    counterText: "Action(s)",
    textColor: "text-green-600",
    icon: Wrench,
  },
  {
    title: "ACTIONS RÉALISÉES ET NON EFFICACES",
    counter: 0,
    counterText: "Action(s)",
    textColor: "text-orange-500",
    icon: Wrench,
  },
  {
    title: "ACTIONS RÉALISÉES ET EFFICACITÉ NON DÉFINIE",
    counter: 0,
    counterText: "Action(s)",
    textColor: "text-orange-500",
    icon: Wrench,
  },
];

const ActionsCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {ActionCardData.map((card, index) => (
        <ActionCard
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

export default ActionsCard;
