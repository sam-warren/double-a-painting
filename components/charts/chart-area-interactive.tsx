"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", completed_jobs: 12, revenue: 8500 },
  { date: "2024-04-02", completed_jobs: 8, revenue: 6200 },
  { date: "2024-04-03", completed_jobs: 15, revenue: 11200 },
  { date: "2024-04-04", completed_jobs: 18, revenue: 13800 },
  { date: "2024-04-05", completed_jobs: 22, revenue: 16400 },
  { date: "2024-04-06", completed_jobs: 14, revenue: 9800 },
  { date: "2024-04-07", completed_jobs: 11, revenue: 7600 },
  { date: "2024-04-08", completed_jobs: 25, revenue: 18200 },
  { date: "2024-04-09", completed_jobs: 7, revenue: 4900 },
  { date: "2024-04-10", completed_jobs: 16, revenue: 12300 },
  { date: "2024-04-11", completed_jobs: 19, revenue: 14500 },
  { date: "2024-04-12", completed_jobs: 13, revenue: 9100 },
  { date: "2024-04-13", completed_jobs: 21, revenue: 15800 },
  { date: "2024-04-14", completed_jobs: 9, revenue: 6700 },
  { date: "2024-04-15", completed_jobs: 17, revenue: 12900 },
  { date: "2024-04-16", completed_jobs: 10, revenue: 7400 },
  { date: "2024-04-17", completed_jobs: 24, revenue: 17600 },
  { date: "2024-04-18", completed_jobs: 20, revenue: 15200 },
  { date: "2024-04-19", completed_jobs: 12, revenue: 8800 },
  { date: "2024-04-20", completed_jobs: 6, revenue: 4200 },
  { date: "2024-04-21", completed_jobs: 14, revenue: 10500 },
  { date: "2024-04-22", completed_jobs: 16, revenue: 11800 },
  { date: "2024-04-23", completed_jobs: 11, revenue: 8100 },
  { date: "2024-04-24", completed_jobs: 23, revenue: 16900 },
  { date: "2024-04-25", completed_jobs: 15, revenue: 11400 },
  { date: "2024-04-26", completed_jobs: 8, revenue: 5600 },
  { date: "2024-04-27", completed_jobs: 26, revenue: 19200 },
  { date: "2024-04-28", completed_jobs: 13, revenue: 9700 },
  { date: "2024-04-29", completed_jobs: 18, revenue: 13500 },
  { date: "2024-04-30", completed_jobs: 27, revenue: 20100 },
  { date: "2024-05-01", completed_jobs: 14, revenue: 10200 },
  { date: "2024-05-02", completed_jobs: 19, revenue: 14800 },
  { date: "2024-05-03", completed_jobs: 16, revenue: 12100 },
  { date: "2024-05-04", completed_jobs: 22, revenue: 16700 },
  { date: "2024-05-05", completed_jobs: 28, revenue: 21300 },
  { date: "2024-05-06", completed_jobs: 30, revenue: 23400 },
  { date: "2024-05-07", completed_jobs: 21, revenue: 15900 },
  { date: "2024-05-08", completed_jobs: 12, revenue: 8900 },
  { date: "2024-05-09", completed_jobs: 17, revenue: 12800 },
  { date: "2024-05-10", completed_jobs: 20, revenue: 15500 },
  { date: "2024-05-11", completed_jobs: 24, revenue: 18600 },
  { date: "2024-05-12", completed_jobs: 15, revenue: 11700 },
  { date: "2024-05-13", completed_jobs: 13, revenue: 9400 },
  { date: "2024-05-14", completed_jobs: 29, revenue: 22800 },
  { date: "2024-05-15", completed_jobs: 26, revenue: 20400 },
  { date: "2024-05-16", completed_jobs: 23, revenue: 17900 },
  { date: "2024-05-17", completed_jobs: 31, revenue: 24600 },
  { date: "2024-05-18", completed_jobs: 18, revenue: 13700 },
  { date: "2024-05-19", completed_jobs: 14, revenue: 10800 },
  { date: "2024-05-20", completed_jobs: 11, revenue: 8300 },
  { date: "2024-05-21", completed_jobs: 9, revenue: 6500 },
  { date: "2024-05-22", completed_jobs: 7, revenue: 5100 },
  { date: "2024-05-23", completed_jobs: 16, revenue: 12400 },
  { date: "2024-05-24", completed_jobs: 19, revenue: 14900 },
  { date: "2024-05-25", completed_jobs: 13, revenue: 9800 },
  { date: "2024-05-26", completed_jobs: 15, revenue: 11500 },
  { date: "2024-05-27", completed_jobs: 25, revenue: 19600 },
  { date: "2024-05-28", completed_jobs: 17, revenue: 13200 },
  { date: "2024-05-29", completed_jobs: 10, revenue: 7200 },
  { date: "2024-05-30", completed_jobs: 22, revenue: 17100 },
  { date: "2024-05-31", completed_jobs: 14, revenue: 10900 },
  { date: "2024-06-01", completed_jobs: 16, revenue: 12600 },
  { date: "2024-06-02", completed_jobs: 28, revenue: 21700 },
  { date: "2024-06-03", completed_jobs: 8, revenue: 5800 },
  { date: "2024-06-04", completed_jobs: 27, revenue: 20900 },
  { date: "2024-06-05", completed_jobs: 6, revenue: 4300 },
  { date: "2024-06-06", completed_jobs: 18, revenue: 13900 },
  { date: "2024-06-07", completed_jobs: 24, revenue: 18800 },
  { date: "2024-06-08", completed_jobs: 21, revenue: 16200 },
  { date: "2024-06-09", completed_jobs: 29, revenue: 22500 },
  { date: "2024-06-10", completed_jobs: 12, revenue: 9200 },
  { date: "2024-06-11", completed_jobs: 9, revenue: 6800 },
  { date: "2024-06-12", completed_jobs: 32, revenue: 25100 },
  { date: "2024-06-13", completed_jobs: 7, revenue: 5200 },
  { date: "2024-06-14", completed_jobs: 26, revenue: 20300 },
  { date: "2024-06-15", completed_jobs: 20, revenue: 15600 },
  { date: "2024-06-16", completed_jobs: 23, revenue: 18100 },
  { date: "2024-06-17", completed_jobs: 33, revenue: 26200 },
  { date: "2024-06-18", completed_jobs: 11, revenue: 8400 },
  { date: "2024-06-19", completed_jobs: 19, revenue: 14700 },
  { date: "2024-06-20", completed_jobs: 25, revenue: 19400 },
  { date: "2024-06-21", completed_jobs: 13, revenue: 10100 },
  { date: "2024-06-22", completed_jobs: 17, revenue: 13300 },
  { date: "2024-06-23", completed_jobs: 30, revenue: 23700 },
  { date: "2024-06-24", completed_jobs: 10, revenue: 7500 },
  { date: "2024-06-25", completed_jobs: 14, revenue: 10700 },
  { date: "2024-06-26", completed_jobs: 27, revenue: 21200 },
  { date: "2024-06-27", completed_jobs: 31, revenue: 24800 },
  { date: "2024-06-28", completed_jobs: 15, revenue: 11600 },
  { date: "2024-06-29", completed_jobs: 8, revenue: 6100 },
  { date: "2024-06-30", completed_jobs: 28, revenue: 22000 },
]

const chartConfig = {
  jobs: {
    label: "Jobs",
  },
  completed_jobs: {
    label: "Completed Jobs",
    color: "var(--primary)",
  },
  revenue: {
    label: "Revenue ($)",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Jobs Completed</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Jobs completed over the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillCompletedJobs" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-completed_jobs)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-completed_jobs)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-revenue)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    if (!value || (typeof value !== 'string' && typeof value !== 'number')) return ''
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="revenue"
              type="natural"
              fill="url(#fillRevenue)"
              stroke="var(--color-revenue)"
              stackId="a"
            />
            <Area
              dataKey="completed_jobs"
              type="natural"
              fill="url(#fillCompletedJobs)"
              stroke="var(--color-completed_jobs)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
