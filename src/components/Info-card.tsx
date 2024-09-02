export default function InfoCard({
  text,
  icon,
}: {
  text: string;
  icon: JSX.Element;
}) {
  return (
    <div className="xl:w-[80%] flex max-lg:flex-col gap-2 md:gap-4 justify-center items-center max-md:border-b max-md:py-8 ">
      <div>{icon}</div>
      <p>{text}</p>
    </div>
  );
}
