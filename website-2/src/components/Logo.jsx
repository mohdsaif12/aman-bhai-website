import logoMain from '../assets/logo_main.png';

const Logo = ({ height = '100px' }) => {
  return (
    <div className="flex items-center">
      <img 
        src={logoMain} 
        alt="Incorvia" 
        style={{ height, width: 'auto', objectFit: 'contain' }} 
      />
    </div>
  );
};

export default Logo;
