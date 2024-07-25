"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "./ui/checkbox";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
];

const Beverages = [
  {
    id: "water",
    label: "Water",
  },
  {
    id: "softdrinks",
    label: "Soft Drinks",
  },
  {
    id: "beer",
    label: "Beer",
  },
  {
    id: "vodka",
    label: "Vodka",
  },
  {
    id: "whishkey",
    label: "Whiskey",
  },
  {
    id: "cocktail",
    label: "Cocktails",
  },
];

const Sidedishes = [
  {
    id: "mixture",
    label: "Mixture",
  },
  {
    id: "mushroom",
    label: "Mushroom",
  },
  {
    id: "paneer",
    label: "Panneer",
  },
  {
    id: "Chicken",
    label: "Chicken",
  },
  {
    id: "Mutton",
    label: "Mutton",
  },
  {
    id: "Lever",
    label: "Lever",
  },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  beverages: z
    .array(z.string())
    .refine((value) => value.length >= 1, {
      message: "You have to select at least one item.",
    })
    .refine((value) => value.length <= 3, {
      message: "You can select a maximum of four items.",
    }),
  sidedish: z
    .array(z.string())
    .refine((value) => value.length >= 1, {
      message: "You have to select at least one item.",
    })
    .refine((value) => value.length <= 2, {
      message: "You can select a maximum of four items.",
    }),
});

export const Register = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      beverages: [],
      sidedish: [],
    },
  });

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className="relative  h-[500px] overflow-hidden">
      <img
        src="/images/bachelorparty.jpg"
        alt="Card Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-5 left-0 w-full bg-background/50 backdrop-blur-sm p-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Register</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] h-[600px] overflow-auto">
            {/* <ScrollArea className="h-[600px]"> */}
            <DialogHeader>
              <DialogTitle className="font-extrabold text-center">
                Register
              </DialogTitle>
              {/* <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription> */}
            </DialogHeader>
            <Form {...form} className="">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormDescription>
                        Please give your name along school, college or office
                        name, which later to identify you.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="beverages"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Beverages </FormLabel>
                        <FormDescription>Select any three.</FormDescription>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {" "}
                        {Beverages.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="beverages"
                            className=""
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              item.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sidedish"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Sidedish</FormLabel>
                        <FormDescription>Select any two.</FormDescription>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {Sidedishes.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="sidedish"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...field.value,
                                              item.id,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>

            {/* </ScrollArea> */}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
