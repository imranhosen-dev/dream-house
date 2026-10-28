
import Link from "next/link";
import { ArrowRight, KeyRound, House } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Info = () => {
    return (
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                {/* For Renters */}
                <div className="group flex flex-col items-start rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 lg:p-10">
                    <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <KeyRound className="size-6" />
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        For Renters
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        Find your dream rental property, Bookmark properties
                        and contact owners.
                    </p>

                    <Button
                        className="mt-6 gap-2"
                        render={<Link href="/properties" />}
                    >
                        Browse Properties
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>

                {/* For Property Owners */}
                <div className="group flex flex-col items-start rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 lg:p-10">
                    <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <House className="size-6" />
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        For Property Owners
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        List your properties and reach potential tenants.
                        Rent as an Airbnb or long term.
                    </p>

                    <Button
                        className="mt-6 gap-2"
                        variant="outline"
                        render={<Link href="/properties/add" />}
                    >
                        Add Properties
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
