import './styles/Section.css'

const HomeSection: React.FC<{
  id?: string;
  children?: React.ReactNode;
}> = ({ id, children }) => {
  return (
    <div id={id} className="home-section">
      {children}
    </div>
  );
};

export default HomeSection;
