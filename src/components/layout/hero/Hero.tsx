
import { MapPin, Search, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Field,
    FieldGroup,
} from "@/components/ui/field";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const months = [
    { label: "MM", value: "mm" },
    { label: "01", value: "01" },
    { label: "02", value: "02" },
    { label: "03", value: "03" },
    { label: "04", value: "04" },
];

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-muted/40 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
                {/* Heading */}
                <div className="mb-8 space-y-3 text-center sm:mb-10">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Find The Perfect{" "}
                        <span className="text-primary">Rental</span>
                    </h1>

                    <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
                        Discover the perfect property that suits your needs.
                    </p>
                </div>

                {/* Search form */}
                <div className="w-full max-w-5xl rounded-2xl border bg-card p-4 shadow-lg shadow-black/5 sm:p-6">
                    <FieldGroup className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_minmax(140px,1fr)_auto]">
                        {/* Location */}
                        <Field className="gap-2">
                            <label
                                htmlFor="location"
                                className="text-sm font-medium"
                            >
                                Location
                            </label>

                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="location"
                                    name="location"
                                    placeholder="Enter location (City, State, Zip, etc.)"
                                    className="h-11 pl-9"
                                    required
                                />
                            </div>
                        </Field>

                        {/* Select menu */}
                        <Field className="gap-2">
                            <label
                                htmlFor="month"
                                className="text-sm font-medium"
                            >
                                Month
                            </label>

                            <Select name="month" defaultValue="mm">
                                <SelectTrigger
                                    id="month"
                                    className="h-11 w-full"
                                >
                                    <SelectValue placeholder="Select month" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                        {months.map((item) => (
                                            <SelectItem
                                                key={item.value}
                                                value={item.value}
                                            >
                                                {item.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>

                        {/* Search button */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <Button
                                type="button"
                                className="h-11 w-full gap-2 lg:w-auto"
                            >
                                <Search className="size-4" />
                                Search
                            </Button>
                        </div>
                    </FieldGroup>
                </div>
            </div>
        </section>
    );
}
