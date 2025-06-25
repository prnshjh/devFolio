// TechBadge.tsx

interface TechBadgeProps {
  name: string;
  icon: JSX.Element;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center space-x-2 text-white">
      <span className="text-xl">{icon}</span>
      <span>{name}</span>
    </div>
  );
};

export default TechBadge;
