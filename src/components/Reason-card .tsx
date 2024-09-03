export default function ReasonCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) {
  return (
    <div className="flex flex-col gap-2 items-center max-md:border-b max-md:pb-4">
      {icon}
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}
