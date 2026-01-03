import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function VotingButtons({ voteCount, hasVoted }) {
  return (
    <div className="flex flex-col items-center gap-0.5 sm:gap-1 shrink-0">
      <Button
        variant="ghost"
        size="icon-sm"
        className={cn(
          "h-7 w-7 sm:h-8 sm:w-8 text-primary hover:text-destructive",
          hasVoted
            ? "bg-primary/10 text-primary hover:bg-primary/20"
            : "hover:bg-primary/10 hover:text-primary"
        )}
      >
        <ChevronUpIcon className="size-4 sm:size-5" />
      </Button>
      <span className="text-xs sm:text-sm text-foreground transition-colors font-semibold">
        {voteCount}
      </span>
      <Button
        variant="ghost"
        size="icon-sm"
        className={cn(
          "h-7 w-7 sm:h-8 sm:w-8 text-primary hover:text-destructive",
          hasVoted
            ? "hover:text-destructive"
            : "opacity-50 cursor-not-allowed"
        )}
      >
        <ChevronDownIcon className="size-4 sm:size-5" />
      </Button>
    </div>
  );
}
