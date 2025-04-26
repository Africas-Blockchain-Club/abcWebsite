"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/****************************************************
 * Context
 ***************************************************/

interface SidebarContextValue {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined)

function useSidebarContext() {
  const context = React.useContext(SidebarContext)

  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider")
  }

  return context
}

interface SidebarProviderProps {
  defaultOpen?: boolean
  children: React.ReactNode
}

const SidebarProvider = ({ defaultOpen = true, children }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>
}

/****************************************************
 * Sidebar
 ***************************************************/

const sidebarVariants = cva(
  "fixed inset-y-0 left-0 z-20 flex w-full flex-col border-r bg-background transition-transform duration-300 ease-in-out sm:max-w-[270px]",
  {
    variants: {
      open: {
        true: "translate-x-0",
        false: "-translate-x-full",
      },
    },
    defaultVariants: {
      open: true,
    },
  },
)

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {
  open?: boolean
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(({ className, open, ...props }, ref) => {
  const { isOpen } = useSidebarContext()

  return <div ref={ref} className={cn(sidebarVariants({ open: open ?? isOpen }), className)} {...props} />
})
Sidebar.displayName = "Sidebar"

/****************************************************
 * SidebarHeader
 ***************************************************/

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex h-14 items-center border-b px-4", className)} {...props} />
  ),
)
SidebarHeader.displayName = "SidebarHeader"

/****************************************************
 * SidebarContent
 ***************************************************/

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex-1 overflow-auto p-4", className)} {...props} />,
)
SidebarContent.displayName = "SidebarContent"

/****************************************************
 * SidebarFooter
 ***************************************************/

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex h-14 items-center border-t px-4", className)} {...props} />
  ),
)
SidebarFooter.displayName = "SidebarFooter"

/****************************************************
 * SidebarTrigger
 ***************************************************/

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const { isOpen, setIsOpen } = useSidebarContext()
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
      <span className="sr-only">Toggle Sidebar</span>
    </Comp>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

/****************************************************
 * SidebarInset
 ***************************************************/

const SidebarInset = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebarContext()

    return (
      <div
        ref={ref}
        className={cn(
          "flex min-h-screen flex-col transition-[margin] duration-300 ease-in-out",
          isOpen ? "sm:ml-[270px]" : "sm:ml-0",
          className,
        )}
        {...props}
      />
    )
  },
)
SidebarInset.displayName = "SidebarInset"

/****************************************************
 * SidebarRail
 ***************************************************/

const SidebarRail = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("absolute bottom-0 right-0 top-0 w-px bg-border opacity-50", className)} {...props} />
  ),
)
SidebarRail.displayName = "SidebarRail"

/****************************************************
 * SidebarGroup
 ***************************************************/

interface SidebarGroupContextValue {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarGroupContext = React.createContext<SidebarGroupContextValue | undefined>(undefined)

function useSidebarGroupContext() {
  const context = React.useContext(SidebarGroupContext)

  if (!context) {
    throw new Error("useSidebarGroupContext must be used within a SidebarGroup")
  }

  return context
}

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean
  }
>(({ defaultOpen = false, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <SidebarGroupContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={ref} {...props} />
    </SidebarGroupContext.Provider>
  )
})
SidebarGroup.displayName = "SidebarGroup"

/****************************************************
 * SidebarGroupLabel
 ***************************************************/

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen, setIsOpen } = useSidebarGroupContext()

    return (
      <div
        ref={ref}
        className={cn("flex cursor-pointer items-center justify-between py-2 hover:text-foreground", className)}
        onClick={() => setIsOpen(!isOpen)}
        {...props}
      >
        <div className="truncate text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {props.children}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-0" : "-rotate-90")}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    )
  },
)
SidebarGroupLabel.displayName = "SidebarGroupLabel"

/****************************************************
 * SidebarGroupContent
 ***************************************************/

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebarGroupContext()

    return (
      <div
        ref={ref}
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className={cn("pb-2", className)} {...props} />
        </div>
      </div>
    )
  },
)
SidebarGroupContent.displayName = "SidebarGroupContent"

/****************************************************
 * SidebarMenu
 ***************************************************/

const SidebarMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("grid gap-1", className)} role="menu" {...props} />,
)
SidebarMenu.displayName = "SidebarMenu"

/****************************************************
 * SidebarMenuItem
 ***************************************************/

const SidebarMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} role="menuitem" {...props} />,
)
SidebarMenuItem.displayName = "SidebarMenuItem"

/****************************************************
 * SidebarMenuButton
 ***************************************************/

const sidebarMenuButtonVariants = cva(
  "flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
  {
    variants: {
      isActive: {
        true: "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground",
        false: "",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
)

interface SidebarMenuButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean
  isActive?: boolean
}

const SidebarMenuButton = React.forwardRef<HTMLDivElement, SidebarMenuButtonProps>(
  ({ className, asChild = false, isActive, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"

    return <Comp ref={ref} className={cn(sidebarMenuButtonVariants({ isActive, className }))} {...props} />
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

export {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
}
