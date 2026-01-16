import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { IStat } from "@/types/stat.interface";
import type { LucideProps } from "lucide-react";

interface Props {
  stat: IStat;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

function StatCard({ stat, Icon }: Props) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
          <p className="text-3xl font-bold text-foreground">{stat.value}</p>
        </div>
        <div className={`${stat.color} p-3 rounded-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}

export default StatCard;
