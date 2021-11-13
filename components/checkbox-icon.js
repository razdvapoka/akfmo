import cn from 'classnames'
import TrueSvg from '../assets/svg/true.svg'
export const CheckboxIcon = ({ checked, className }) => {
  return (
    <div className={cn('relative', className)}>
      ⬜
      <TrueSvg
        className={cn(
          'absolute transition-opacity top-1/2 -translate-y-1/2',
          checked ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  )
}
