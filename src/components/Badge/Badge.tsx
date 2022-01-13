import React, { FC, PropsWithChildren } from "react";
import cl from "./Badg.module.scss";
import cn from "classnames";
interface BadgeProps {
  Icon?: PropsWithChildren<any>;
  count?: number | null;
  color?: string;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ Icon, count, className = "", color = "" }) => {
  return (
    <div className={cn(cl.BadgeIcon, className)}>
      {count && <div className={cn(cl.Badge)}>{count}</div>}
      {Icon && <Icon color={color} size={25} />}
    </div>
  );
};

export default Badge;
