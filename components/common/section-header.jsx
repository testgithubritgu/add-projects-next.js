const SectionHeader = ({ title, icon: Icon, description }) => {
  return (
    <div className="mb-6 sm:mb-8 lg:mb-12">
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <Icon className="size-5 sm:size-6 text-pink-500" />
        <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
      </div>
      <p className="text-muted-foreground text-base sm:text-lg">{description}</p>
    </div>
  );
};

export default SectionHeader;
