import React from 'react';
import { Code, Database, Server, Cpu, Cloud, Layers, Clock, CreditCard, Wifi, Globe, Zap, Box } from 'lucide-react';

interface TechIconProps {
  name: string;
  icon?: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, icon, className = "w-4 h-4" }) => {
  if (icon && (icon.startsWith('/') || icon.startsWith('http'))) {
    return <img src={icon} alt={name} className={`${className} object-contain`} />;
  }
  const k = (icon || name).toLowerCase();

  // React / React Native
  if (k.includes('react')) return (
    <svg className={`${className} text-cyan-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );

  // Expo
  if (k.includes('expo')) return (
    <svg className={`${className} text-gray-900`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 21.666c0 .738 1.159 1.906 2.596 1.197L12 17.73l9.404 5.133C22.842 23.572 24 22.404 24 21.666L12.69.987C12.312.31 11.688.31 11.31.987L0 21.666z"/>
    </svg>
  );

  // FastAPI
  if (k.includes('fastapi')) return (
    <svg className={`${className} text-teal-500`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.375 0 0 5.375 0 12a12 12 0 0 0 12 12c6.626 0 12-5.375 12-12S18.626 0 12 0zm-.624 21.621v-7.528H6.53L13.5 2.379v7.528h4.847L9.376 21.621z"/>
    </svg>
  );

  // PostgreSQL
  if (k.includes('postgres')) return (
    <svg className={`${className} text-blue-700`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403A7.834 7.834 0 0 0 12 0a7.66 7.66 0 0 0-2.373.403 10.134 10.134 0 0 0-2.755-.403C3.906 0 0 2.755 0 7.128c0 2.117.755 3.91 2.13 5.133A11.323 11.323 0 0 0 2 14a9.888 9.888 0 0 0 .516 3.244C1.338 18.24 0 19.87 0 22.007V24h24v-1.993c0-2.138-1.338-3.767-2.516-4.763A9.888 9.888 0 0 0 22 14c0-.685-.055-1.38-.13-2.055C23.245 10.72 24 8.926 24 6.81 24 2.755 20.094 0 17.128 0zM12 22H2v-.007c0-1.655 1.387-3.395 3.35-3.887l.729-.183-.435-.617A8.058 8.058 0 0 1 4.6 14c0-4.636 3.364-8 7.4-8s7.4 3.364 7.4 8a8.058 8.058 0 0 1-1.044 3.306l-.435.617.729.183C20.613 18.598 22 20.338 22 21.993V22H12z"/>
    </svg>
  );

  // Redis
  if (k.includes('redis')) return (
    <svg className={`${className} text-red-600`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.5 6.75l1.5-.87 1.5.87v1.74L12 9.36l-1.5-.87V6.75zM12 2.25L4.5 6.75v9L12 20.25l7.5-4.5v-9L12 2.25zM6 15.87V8.13l6 3.48 6-3.48v7.74l-6 3.48-6-3.48z"/>
    </svg>
  );

  // Supabase
  if (k.includes('supabase')) return (
    <svg className={`${className} text-emerald-500`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.101 12.957.763 14.5 1.99 14.5h9.033l.028 8.464c.015.986 1.26 1.41 1.874.637l9.262-11.653c.663-.907 0-2.45-1.227-2.45H12.028l-.128-8.462z"/>
    </svg>
  );

  // Astro
  if (k.includes('astro')) return (
    <svg className={`${className} text-orange-600`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.358 20.162c-1.186-1.57-1.named-2.387-2.4-2.998-1.549-.981-3.046-1.167-3.046-1.167s1.991.572 3.08 2.115c.564.8.788 1.656.909 2.19.386-1.678 1.174-3.088 2.428-3.96 1.4-.96 3.391-1.38 6.733-.648-3.107-1.553-5.114-2.29-6.518-2.41-1.46-.125-2.597.5-3.53 1.277A7.046 7.046 0 0 0 5 16.944v.072a8.5 8.5 0 0 0 .043.875c.07.91.27 1.75.579 2.49.148.358.316.7.5 1.016.18.31.377.604.587.877.21.274.433.532.668.774a9.06 9.06 0 0 0 .72.67c.253.216.52.42.795.61.277.19.566.367.864.527a9.29 9.29 0 0 0 .939.416C10.64 23.72 8.55 22.04 8.358 20.162z"/>
      <path d="m12.266 2.57-.244.66C11.648 4.45 11.4 5.803 11.4 7.31c0 2.016.636 3.625 1.726 4.768.178-.692.454-1.31.817-1.83a6.06 6.06 0 0 1 1.44-1.447c-.042-.278-.064-.565-.064-.86 0-2.23 1.148-4.196 2.88-5.33-.407.27-.8.583-1.17.937a7.963 7.963 0 0 0-1.024 1.21 7.86 7.86 0 0 0-.656 1.418 5.7 5.7 0 0 0-.233.987 7.05 7.05 0 0 0-.057.634l-.003.145.003.087a8.4 8.4 0 0 0-.793-5.458z"/>
    </svg>
  );

  // Next.js
  if (k.includes('next')) return (
    <svg className={`${className} text-gray-900`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z"/>
    </svg>
  );

  // Cloudflare
  if (k.includes('cloudflare')) return (
    <svg className={`${className} text-orange-500`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.608 15.257l.14-.485c.172-.605.108-1.16-.182-1.569-.267-.378-.7-.596-1.218-.617l-9.208-.124a.17.17 0 0 1-.144-.084.174.174 0 0 1-.005-.167c.03-.065.096-.109.168-.114l9.3-.124c1.103-.053 2.296-.95 2.714-2.063l.53-1.384a.272.272 0 0 0 .013-.172 7.661 7.661 0 0 0-14.724 2.05 4.338 4.338 0 0 0-2.917 1.366 4.376 4.376 0 0 0-1.116 2.932 4.388 4.388 0 0 0 4.388 4.38h11.52a2.697 2.697 0 0 0 2.657-2.218 2.694 2.694 0 0 0-1.916-2.608z"/>
    </svg>
  );

  // Hono
  if (k.includes('hono')) return <Zap className={`${className} text-orange-500`} />;

  // Turborepo
  if (k.includes('turbo')) return (
    <svg className={`${className} text-red-500`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4l1.5 4H17l-3 2.25 1.5 4L12 14l-3.5 2.25L10 12 7 9.75h3.5L12 6zm0 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
    </svg>
  );

  // Clerk
  if (k.includes('clerk')) return <Globe className={`${className} text-violet-600`} />;

  // Convex
  if (k.includes('convex')) return <Box className={`${className} text-yellow-600`} />;

  // Qdrant
  if (k.includes('qdrant')) return <Cpu className={`${className} text-pink-600`} />;

  // Webhook / Hookdeck
  if (k.includes('hook') || k.includes('webhook')) return <Wifi className={`${className} text-blue-500`} />;

  // Pandas
  if (k.includes('panda')) return (
    <svg className={`${className} text-blue-900`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.5 3a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-3 0v-2A1.5 1.5 0 0 1 9.5 3zm5 0a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-3 0v-2A1.5 1.5 0 0 1 14.5 3zM9 9h6v6H9V9zm-1.5 7.5A1.5 1.5 0 0 1 9 18h6a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1-1.5-1.5z"/>
    </svg>
  );

  // AWS
  if (k.includes('aws') || k.includes('amazon')) return <Cloud className={`${className} text-amber-600`} />;

  // Generic fallbacks
  if (k.includes('node')) return <Server className={`${className} text-emerald-600`} />;
  if (k.includes('express')) return <Server className={`${className} text-gray-700`} />;
  if (k.includes('mongo')) return <Database className={`${className} text-green-600`} />;
  if (k.includes('mysql') || k.includes('sql')) return <Database className={`${className} text-blue-600`} />;
  if (k.includes('sequelize')) return <Layers className={`${className} text-sky-500`} />;
  if (k.includes('stripe')) return <CreditCard className={`${className} text-indigo-600`} />;
  if (k.includes('cron') || k.includes('clock')) return <Clock className={`${className} text-amber-600`} />;

  return <Code className={`${className} text-blue-500`} />;
};
