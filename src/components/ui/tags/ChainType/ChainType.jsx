import cn from 'classnames';
import s from './style.module.scss';
import { ChainType as Type } from '../../../../core/constants/Quest';

export function ChainType({ className, type, ...props }) {
  const children = type === Type.OffChain ? 'off-chain' : 'on-chain';

  return (
    <div
      className={cn(
        s.chain,
        { [s.chain_on]: type === Type.OnChain },
        { [s.chain_off]: type === Type.OffChain },
        className
      )}
      {...props}>
      {children}
    </div>
  );
}
