import logoMain from '../assets/logo_main.png';
import logoNew from '../assets/incorvia logo (1).png';

const Logo = ({ height = '100px', variant = 'new' }) => {
  const src = variant === 'footer' ? logoMain : logoNew;
  return (
    <div className="flex items-center">
      <img 
        src={src} 
        alt="Incorvia" 
        style={{ height, width: 'auto', objectFit: 'contain' }} 
      />
    </div>
  );
};

export default Logo;

