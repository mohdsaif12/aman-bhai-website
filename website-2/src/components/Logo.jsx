import logoMain from '../assets/logo_main.png';

const Logo = () => {
  return (
    <div className="flex items-center">
      <img 
        src={logoMain} 
        alt="Incorvia Corporate Advisory" 
        style={{ height: '100px', width: 'auto', objectFit: 'contain' }} 
      />
    </div>
  );
};

export default Logo;
