import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface AppNavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  activeClassName?: string;
  /** When pathname matches `to` exactly */
  end?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, AppNavLinkProps>(
  ({ className, to, activeClassName, end, ...props }, ref) => {
    const pathname = typeof window !== "undefined" ? window.location.pathname : "";
    const isActive = end ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);
    return (
      <a ref={ref} href={to} className={cn(className, isActive && activeClassName)} {...props} />
    );
  }
);
NavLink.displayName = "NavLink";

export { NavLink };
