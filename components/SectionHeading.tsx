type SectionHeadingProps = {
  children: React.ReactNode;
};

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <h2 className="font-medium text-3xl mb-8 capitalize">{children}</h2>;
};
