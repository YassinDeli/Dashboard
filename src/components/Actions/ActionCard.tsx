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
    <Card className="w-full border shadow-md p-4">
      <CardContent>
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
