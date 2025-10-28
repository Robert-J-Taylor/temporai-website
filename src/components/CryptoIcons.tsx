import React from 'react';

// Import only the specific token icons we need - this enables proper tree-shaking
import { 
  TokenETH,
  TokenBTC,
  TokenUSDT,
  TokenUSDC,
  TokenNEAR,
  TokenADA,
  TokenSOL,
  TokenAVAX,
  TokenLINK,
  TokenUNI,
  TokenAAVE,
  TokenCOMP,
  TokenDAI,
  TokenGRT,
  TokenMATIC
} from '@web3icons/react';

interface CryptoIconProps {
  symbol: string;
  size?: number;
  className?: string;
}

// Optimized crypto icons with proper tree-shaking
const CryptoIcon: React.FC<CryptoIconProps> = ({ symbol, size = 60, className = "" }) => {
  const iconProps = {
    size: size,
    className: `animate-rotate-slow ${className}`
  };

  // Map symbols to their specific token icon components
  switch (symbol.toLowerCase()) {
    case 'eth':
      return <TokenETH {...iconProps} />;
    case 'btc':
      return <TokenBTC {...iconProps} />;
    case 'usdt':
      return <TokenUSDT {...iconProps} />;
    case 'usdc':
      return <TokenUSDC {...iconProps} />;
    case 'near':
      return <TokenNEAR {...iconProps} />;
    case 'ada':
      return <TokenADA {...iconProps} />;
    case 'sol':
      return <TokenSOL {...iconProps} />;
    case 'avax':
      return <TokenAVAX {...iconProps} />;
    case 'link':
      return <TokenLINK {...iconProps} />;
    case 'uni':
      return <TokenUNI {...iconProps} />;
    case 'aave':
      return <TokenAAVE {...iconProps} />;
    case 'comp':
      return <TokenCOMP {...iconProps} />;
    case 'dai':
      return <TokenDAI {...iconProps} />;
    case 'grt':
      return <TokenGRT {...iconProps} />;
    case 'matic':
      return <TokenMATIC {...iconProps} />;
    default:
      // Return null for unknown symbols - no fallback needed
      return null;
  }
};

export default CryptoIcon;