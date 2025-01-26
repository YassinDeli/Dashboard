import { Card, CardContent } from "../ui/card";
import { type LucideIcon } from "lucide-react";

interface ActionCardProps {
  title: string;
  titleColor?: string;
  counter: number;
  counterText: string;
  icon?: LucideIcon;
}

export const ActionCard = ({
  title,
  titleColor,
  counter,
  counterText,
  icon: Icon,
}: ActionCardProps) => {
  return (
    <Card className="w-60 border shadow-md ">
      <CardContent className="p-4">
        <div className="flex flex-col items-start">
          <span className={`text-sm font-medium ${titleColor}`}>{title}</span>
          <h1 className="text-3xl font-bold mt-2">
            {counter} <span className="text-base font-normal">{counterText}</span>
          </h1>
        </div>
        <div className="mt-4 flex justify-end">
          {Icon && <Icon className="w-6 h-6" />}
        </div>
      </CardContent>
    </Card>
  );
};
