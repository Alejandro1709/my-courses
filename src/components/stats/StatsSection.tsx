import type { IStat } from "@/types/stat.interface";
import StatCard from "./StatCard";

interface Props {
  stats: IStat[];
}

function StatsSection({ stats }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return <StatCard stat={stat} Icon={Icon} key={stat.id} />;
      })}
    </section>
  );
}

export default StatsSection;
