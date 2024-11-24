import { GlareCard } from "./ui/GlareCard";

export function Achievment() {
    return (
        <div className="px-8 pb-20">
            <div className="text-center mb-12">
                <p className="text-4xl font-bold text-white mb-4">Achievements</p>
                <p className="text-neutral-400 text-lg">
                    A showcase of accomplishments and milestones.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <GlareCard className="relative flex flex-col items-start justify-end py-8 px-6">
                    {/* Image */}
                    <img
                        className="h-full w-full absolute inset-0 object-cover z-0"
                        src=""
                    />

                    {/* Text Content */}
                    <div className="relative z-10">
                        <p className="font-bold text-white text-lg">The greatest trick</p>
                        <p className="font-normal text-base text-neutral-200 mt-4">
                            The greatest trick the devil ever pulled was to convince the world
                            that he didn&apos;t exist.
                        </p>
                    </div>
                </GlareCard>

            </div>
        </div>
    );
}
