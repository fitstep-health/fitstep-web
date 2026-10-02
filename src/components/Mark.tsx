import { useId } from 'react';

interface Props {
  size?: number;
  /** animate the arc drawing itself + the goal dot settling in */
  animate?: boolean;
  /** unique id suffix so multiple gradients on one page don't collide */
  idc?: string;
  className?: string;
}

/**
 * The Vive Move mark — the V's two arms (lime descending, teal rising) and the
 * floating dot. Geometry and colours are verbatim from the app's ViveMark
 * (lib/widgets/vive_widgets.dart). When `animate` is set the arms rise in and
 * the dot pops.
 */
export function Mark({ size = 44, animate = false, className = '' }: Props) {
  const id = `vm${useId().replace(/:/g, '')}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="196 156 676 676"
      fill="none"
      className={`mark ${animate ? 'mark-animate' : ''} ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}l`} x1=".15" y1="0" x2=".85" y2="1">
          <stop offset="0" stopColor="#E4FFCF" />
          <stop offset=".58" stopColor="#A7F58E" />
          <stop offset="1" stopColor="#55DF70" />
        </linearGradient>
        <linearGradient id={`${id}r`} x1=".1" y1=".1" x2=".9" y2=".95">
          <stop offset="0" stopColor="#21E2C3" />
          <stop offset=".55" stopColor="#00C9A8" />
          <stop offset="1" stopColor="#009D79" />
        </linearGradient>
        <linearGradient id={`${id}d`} x1="0" y1="0" x2=".8" y2="1">
          <stop offset="0" stopColor="#F1FFD8" />
          <stop offset="1" stopColor="#B9E77E" />
        </linearGradient>
      </defs>
      <g className="mark-arms">
        <path d="M214 332L315 332C358 332 385 353 407 392L520 602C535 630 557 649 585 656L528 721C491 718 461 696 438 656L294 404C275 371 250 349 214 332Z" fill={`url(#${id}l)`} />
        <path d="M462 686C486 714 518 730 551 730C588 730 615 710 638 672L784 421C802 390 822 371 849 365L746 365C714 365 692 382 674 413L558 612C542 640 525 660 502 673C489 680 475 684 462 686Z" fill={`url(#${id}r)`} />
        <path d="M520 602C535 630 557 649 585 656L551 730C518 730 486 714 462 686C486 674 503 647 520 602Z" fill="#00AD83" fillOpacity={0.62} />
      </g>
      <g className="mark-dot">
        <circle cx="716" cy="302" r="56" fill={`url(#${id}d)`} />
        <circle cx="700" cy="283" r="16" fill="#FFFFFF" fillOpacity={0.13} />
      </g>
    </svg>
  );
}

export function Wordmark({ size = 44, animate = false, idc = 'w' }: Props) {
  return (
    <span className="wordmark">
      <Mark size={size} animate={animate} idc={idc} />
      <span className="wordmark-text">Vive</span>
    </span>
  );
}
