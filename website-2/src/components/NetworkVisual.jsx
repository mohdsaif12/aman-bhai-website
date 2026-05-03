import { FileText, Landmark, PieChart, ShieldCheck, UserCheck } from 'lucide-react';
import dottedMap from '../assets/dotted-map.png';
import { motion } from 'framer-motion';

// 5 satellite service nodes — positioned around the center
// Coordinates are percentages of the container (500x500 viewBox mapped to %)
const SERVICE_NODES = [
  {
    id: 'company',
    label: ['Company', 'Formation'],
    icon: FileText,
    // top-center-left
    cx: 205, cy: 95,
    delay: 0.2,
  },
  {
    id: 'banking',
    label: ['Banking', 'Solutions'],
    icon: Landmark,
    // top-right
    cx: 390, cy: 85,
    delay: 0.4,
  },
  {
    id: 'accounting',
    label: ['Accounting', '& Tax'],
    icon: PieChart,
    // mid-left
    cx: 70, cy: 255,
    delay: 0.6,
  },
  {
    id: 'compliance',
    label: ['Compliance', '& Legal'],
    icon: ShieldCheck,
    // mid-right
    cx: 460, cy: 255,
    delay: 0.8,
  },
  {
    id: 'visas',
    label: ['Visas & PRO', 'Services'],
    icon: UserCheck,
    // bottom-center
    cx: 255, cy: 430,
    delay: 1.0,
  },
].map(node => ({
  ...node,
  pos: { left: `${(node.cx / 510) * 100}%`, top: `${(node.cy / 510) * 100}%` }
}));

// Center node coords in the 500x500 viewBox
const CENTER = { cx: 255, cy: 255 };

// Generate a quadratic bezier path from center to each node
// with a slight curve offset
const makePath = (node) => {
  const mx = (CENTER.cx + node.cx) / 2;
  const my = (CENTER.cy + node.cy) / 2;
  // Perpendicular offset for the curve control point
  const dx = node.cx - CENTER.cx;
  const dy = node.cy - CENTER.cy;
  const qx = mx - dy * 0.15;
  const qy = my + dx * 0.15;
  return `M ${CENTER.cx} ${CENTER.cy} Q ${qx} ${qy} ${node.cx} ${node.cy}`;
};

const NetworkVisual = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {/* ── Layer 1: Dotted World Map Background ── */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${dottedMap})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.75,
        }}
      />

      {/* 4-sided white gradient fade over the map + Radial center fade */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, white 0%, transparent 25%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to left, white 0%, transparent 25%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, white 0%, transparent 25%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, white 0%, transparent 25%)' }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, transparent 30%, white 100%)' }}
      />

      {/* ── Layer 2: SVG — curved paths + moving dots ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 510 510"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow-dot">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Curved connection lines with draw animation */}
        {SERVICE_NODES.map((node, i) => (
          <path
            key={`path-${node.id}`}
            d={makePath(node)}
            stroke="#4B9FF3"
            strokeWidth="1.2"
            opacity="0.55"
            fill="none"
            className="animate-draw"
            style={{ animationDelay: `${node.delay}s` }}
          />
        ))}



        {/* Moving data-flow dots along each path */}
        {SERVICE_NODES.map((node, i) => (
          <circle
            key={`travel-${node.id}`}
            r="3"
            fill="#4B9FF3"
            filter="url(#glow-dot)"
          >
            <animateMotion
              dur={`${2.5 + (i * 0.4)}s`}
              repeatCount="indefinite"
              path={makePath(node)}
            />
          </circle>
        ))}
      </svg>

      {/* ── Layer 3: HTML Nodes overlay ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">

        {/* 5 Service Nodes */}
        {SERVICE_NODES.map((node, i) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={`node-${node.id}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.8 + i * 0.15, type: 'spring', bounce: 0.3 }}
              className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
              style={node.pos}
            >
              {/* Circle node */}
              <div
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-2 animate-node-pulse"
                style={{
                  border: '1.5px solid #4B9FF3',
                  boxShadow: '0 0 0 4px rgba(75,159,243,0.08)',
                }}
              >
                <Icon className="w-6 h-6" style={{ color: '#0054B1' }} strokeWidth={1.5} />
              </div>

              {/* Label */}
              <div className="flex flex-col items-center">
                {node.label.map((line, li) => (
                  <span
                    key={li}
                    className="text-center font-medium text-gray-700 leading-tight"
                    style={{ fontSize: '12px' }}
                  >
                    {line}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Center Node — INCORVIA Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, type: 'spring', bounce: 0.4 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
          style={{ left: '50%', top: '50%' }}
        >
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center"
            style={{
              background: '#0054B1',
              boxShadow: '0 8px 32px rgba(0, 84, 177, 0.35), 0 0 0 6px rgba(0,84,177,0.1)',
            }}
          >
            {/* White "A" logo in center node */}
            <svg width="44" height="44" viewBox="0 0 36 36" fill="none">
              <path d="M18 3 L34 32 H2 Z" fill="white" />
              <path d="M18 16 L24 28 H12 Z" fill="#0054B1" />
            </svg>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default NetworkVisual;
