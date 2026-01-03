import { cn } from '@/lib/utils';

const StatsCard = ({icon:Icon,label,value,hasBorder}) => {
  return (
    <div className={cn("space-y-1 sm:space-y-2 text-center px-4 sm:px-6", hasBorder && "sm:border-x border-border/50")}>
      <div className="flex items-center justify-center gap-2">
        <Icon className="size-4 sm:size-5 text-pink-500" />
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{value}</p>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export default StatsCard
