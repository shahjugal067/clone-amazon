'use client'

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn, formatDateTime } from "@/lib/utils"
import { PopoverClose } from "@radix-ui/react-popover"
import { CalendarIcon } from "lucide-react"
import React from "react"
import { DateRange } from "react-day-picker"


export function CalendarDateRangePicker({
    defaultDate,
    setDate,
    className,
} : {
    defaultDate?: DateRange
    setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>
    className?: string
}){
    const [calendarDate ,setCalendarDate] = React.useState<DateRange |undefined>(
        defaultDate
    )

    return (
        <div className={cn('grid gap-2',className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button id="date" variant={'outline'}
                    className={cn('justify-start text-left font-normal', !calendarDate && 'text-muted-foreground')} >
                        <CalendarIcon className=" w-4 h-4 mr-0" />
                        {calendarDate?.from ? (
                            calendarDate.to ? (
                                <>
                                {formatDateTime(calendarDate.from).dateOnly}-{' '}
                                {formatDateTime(calendarDate.to).dateOnly}
                                </>
                            ) :(
                                formatDateTime(calendarDate.from).dateOnly
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className=" w-auto p-0"
                 onCloseAutoFocus={()=>setCalendarDate(defaultDate)}>
                    <Calendar mode="range" selected={calendarDate} numberOfMonths={2}
                    defaultMonth={defaultDate?.from} onSelect={setCalendarDate} />
                    <div className="flex gap-4 p-4 pt-0">
                        <PopoverClose asChild>
                            <Button onClick={()=> setDate(calendarDate)}>Apply</Button>
                        </PopoverClose>
                        <PopoverClose asChild>
                            <Button variant={'outline'} >Cancel</Button>
                        </PopoverClose>
                    </div>
                </PopoverContent>
            </Popover>

        </div>
    )
}
