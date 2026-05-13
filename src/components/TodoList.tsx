"use client";
import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full">
            <Calendar1Icon />
            {date ? format(date, 'MMMM do, yyyy') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* TITLE */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <Card>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Meeting with Team
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1"  />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1"  />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1"  />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1"  />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1"  />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1"  />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1"  />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1"  />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Meeting with Team
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit.
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Meeting with Team
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1"  />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Meeting with Team
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1"  />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Meeting with Team
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <Checkbox id="item1"  />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Meeting with Team
              </label>
            </div>
          </div>
        </Card>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
