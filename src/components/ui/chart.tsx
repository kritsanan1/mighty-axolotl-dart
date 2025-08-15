"use client"

import * as React from "react"
import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  Legend as LegendPrimitive,
  Line,
  Pie,
  RadialBar,
  ResponsiveContainer,
  Tooltip as TooltipPrimitive,
  XAxis,
  YAxis,
} from "recharts"
import {
  type BarProps,
  type CellProps,
  type LegendProps,
  type PieProps,
  type TooltipProps,
} from "recharts"

import { cn } from "@/lib/utils"

// Chart Container
const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof ResponsiveContainer
    >["children"]
  }
>(({ config, children, className, ...props }, ref) => {
  const chartContainerRef = React.useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      data-chart
      className={cn(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line]:stroke-border/50 [&_.recharts-curve]:stroke-primary [&_.recharts-dot_path]:fill-primary [&_.recharts-legend-item_text]:text-muted-foreground [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-radial-bar-sector]:fill-primary [&_.recharts-rectangle]:fill-primary [&_.recharts-reference-line_line]:stroke-border [&_.recharts-sector_path]:fill-primary [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none [&_.recharts-tooltip-cursor]:stroke-border [&_.recharts-tooltip-wrapper]:rounded-lg [&_.recharts-tooltip-wrapper]:border [&_.recharts-tooltip-wrapper]:bg-background [&_.recharts-tooltip-wrapper]:shadow-lg",
        className
      )}
      {...props}
    >
      <ResponsiveContainer ref={chartContainerRef}>
        {children}
      </ResponsiveContainer>
    </div>
  )
})
ChartContainer.displayName = "Chart"

// Chart Config
type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<string, string> }
  )
}

// Chart Tooltip
const ChartTooltip = TooltipPrimitive

type ChartTooltipContentProps = {
  active?: boolean
  payload?: any[]
  label?: string | number
  className?: string
  indicator?: "dot" | "line" | "dashed" | "none"
  hideLabel?: boolean
  hideIndicator?: boolean
  labelFormatter?: (label: string | number) => React.ReactNode
  labelClassName?: string
  formatter?: (
    value: number,
    name: string,
    item: unknown,
    index: number
  ) => React.ReactNode
  color?: string
  nameKey?: string
  itemClassName?: string
}

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      itemClassName,
    },
    ref
  ) => {
    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!hideLabel && (
          <div className="grid gap-1.5">
            {label && (
              <span
                className={cn("font-medium text-muted-foreground", labelClassName)}
              >
                {labelFormatter ? labelFormatter(label) : label}
              </span>
            )}
            {nestLabel && (
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: color || payload[0].color,
                  }}
                />
                <div className="grid flex-1 gap-1">
                  <span className="font-medium">
                    {formatter
                      ? formatter(
                          payload[0].value,
                          payload[0].name,
                          payload[0],
                          0
                        )
                      : payload[0].value}
                  </span>
                  <span className="text-muted-foreground">
                    {nameKey ? payload[0].payload[nameKey] : payload[0].name}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
        {!nestLabel && (
          <div className="grid gap-1.5">
            {payload.map((item: any, index: number) => {
              const key = `${nameKey || item.name || item.dataKey || "value"}`
              const itemColor = color || item.color || item.stroke

              return (
                <div
                  key={item.dataKey}
                  className={cn(
                    "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                    itemClassName
                  )}
                >
                  {!hideIndicator && (
                    <div className="flex w-2.5 shrink-0 items-center justify-center">
                      {indicator === "dot" ? (
                        <span
                          className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                          style={{
                            backgroundColor: itemColor,
                          }}
                        />
                      ) : indicator === "line" ? (
                        <span
                          className="h-full w-px shrink-0"
                          style={{
                            backgroundColor: itemColor,
                          }}
                        />
                      ) : indicator === "dashed" ? (
                        <span
                          className="h-full w-px shrink-0 border-[1.5px] border-dashed"
                          style={{
                            borderColor: itemColor,
                          }}
                        />
                      ) : null}
                    </div>
                  )}
                  <div className="grid flex-1 gap-1">
                    <span className="font-medium">
                      {formatter
                        ? formatter(item.value, item.name, item, index)
                        : item.value}
                    </span>
                    <span className="text-muted-foreground">{key}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

// Chart Legend
const ChartLegend = LegendPrimitive

type ChartLegendContentProps = React.ComponentProps<"div"> &
  Pick<LegendProps, "verticalAlign"> & {
    payload?: any[]
    hideIcon?: boolean
    nameKey?: string
  }

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  ChartLegendContentProps
>(
  (
    { className, hideIcon, payload, verticalAlign, nameKey },
    ref
  ) => {
    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-4" : "pt-4",
          className
        )}
      >
        {payload.map((item: any) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const color = item.color

          return (
            <div
              key={item.value}
              className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            >
              {!hideIcon && (
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: color,
                  }}
                />
              )}
              {key}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Exports
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  CartesianGrid,
  XAxis,
  YAxis,
  TooltipPrimitive,
  LegendPrimitive,
  ResponsiveContainer,
  Area,
  Bar,
  Line,
  Pie,
  Cell,
  RadialBar,
  // Primitive Aliases
  Bar as ChartBar,
  Cell as ChartCell,
  LegendPrimitive as ChartLegendPrimitive,
  TooltipPrimitive as ChartTooltipPrimitive,
  Pie as ChartPie,
  // Prop Types
  type BarProps as ChartBarProps,
  type CellProps as ChartCellProps,
  type PieProps as ChartPieProps,
  type TooltipProps as ChartTooltipProps,
  type ChartConfig,
}