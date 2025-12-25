import React from "react";

const SectionHeader = ({ title, icon: Icon, description }) => {
  return (
    <div className="mb-12">
      
        <div className="flex items-center gap-2 mb-3">
          <Icon className="size-6 text-primary" />
          <h1 className="text-3xl font-bold ">{title}</h1>
        </div>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>

  );
};

export default SectionHeader;