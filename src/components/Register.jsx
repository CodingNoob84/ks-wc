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
import { useEffect, useState } from "react";

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
    label: "Mushroom Fry",
  },
  {
    id: "paneer",
    label: "Panneer Tika",
  },
  {
    id: "Chicken",
    label: "Chili Chicken",
  },
  {
    id: "Mutton",
    label: "Mutton Chuka",
  },
  {
    id: "Lever",
    label: "Lever Fry",
  },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phoneno: z.string().regex(/^[789]\d{9}$/, {
    message:
      "Invalid phone number. It must be a 10-digit number starting with 7, 8, or 9.",
  }),
  beverages: z
    .array(z.string())
    .refine((value) => value.length >= 1, {
      message: "You have to select at least one item.",
    })
    .refine((value) => value.length <= 2, {
      message: "You can select a maximum of two items.",
    }),
  sidedish: z
    .array(z.string())
    .refine((value) => value.length >= 1, {
      message: "You have to select at least one item.",
    })
    .refine((value) => value.length <= 2, {
      message: "You can select a maximum of two items.",
    }),
});

export const Register = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneno: "",
      beverages: [],
      sidedish: [],
    },
  });

  function onSubmit(values) {
    if (values) {
      setIsSubmitted(true);
    }
    console.log(values);
  }

  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
        setOpen(false);
        form.reset();
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted, form.reset]);
  return (
    <>
      <div className="relative  h-[500px] overflow-hidden">
        <img
          src="/images/BachelorBash.png"
          alt="Card Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-24 left-0 w-full  p-5 flex justify-center items-center">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild className="">
              <Button
                variant="outline"
                className="font-extrabold bg-red-400 hover:scale-120"
              >
                Register
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] h-[550px] overflow-auto">
              {isSubmitted ? (
                <img
                  src="/images/NoBachelorParty.png"
                  className="object-cover"
                />
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle>Register</DialogTitle>
                    <DialogDescription>
                      Only registered guests are permitted to attend this party.
                    </DialogDescription>
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

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phoneno"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your phone number"
                                {...field}
                              />
                            </FormControl>

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
                              <FormLabel className="text-base">
                                Beverages
                              </FormLabel>
                              <FormDescription>
                                Select any two items you want.
                              </FormDescription>
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
                                            checked={field.value?.includes(
                                              item.id
                                            )}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([
                                                    ...field.value,
                                                    item.id,
                                                  ])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) =>
                                                        value !== item.id
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
                              <FormLabel className="text-base">
                                SideDishes
                              </FormLabel>
                              <FormDescription>
                                Select any two items you want.
                              </FormDescription>
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
                                            checked={field.value?.includes(
                                              item.id
                                            )}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([
                                                    ...field.value,
                                                    item.id,
                                                  ])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) =>
                                                        value !== item.id
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
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};
