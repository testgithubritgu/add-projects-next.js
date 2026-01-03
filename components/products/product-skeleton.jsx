import { Skeleton } from "../ui/skeleton";

export default function ProductSkeleton() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="wrapper px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <Skeleton className={"size-5 sm:size-6"} />
            <Skeleton className={"h-7 sm:h-9 w-48 sm:w-64"} />
          </div>
          <Skeleton className={"h-5 sm:h-7 w-64 sm:w-96"} />
        </div>
        <div className="grid-wrapper">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              className="border-2 rounded-lg p-4 sm:p-6 min-h-35 sm:min-h-40"
              key={idx}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex-1">
                  <Skeleton className={"h-5 sm:h-6 w-3/4 mb-2"} />
                  <Skeleton className={"h-3 sm:h-4 w-full"} />
                </div>
                <div className="flex flex-col gap-1">
                  <Skeleton className={"h-7 w-7 sm:h-8 sm:w-8 rounded"} />
                  <Skeleton className={"h-4 w-7 sm:w-8"} />
                  <Skeleton className={"h-7 w-7 sm:h-8 sm:w-8 rounded"} />
                </div>
              </div>
              <div className="flex gap-1.5 sm:gap-2">
                <Skeleton className={"h-5 sm:h-6 w-14 sm:w-16 rounded-full"} />
                <Skeleton className={"h-5 sm:h-6 w-16 sm:w-20 rounded-full"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
