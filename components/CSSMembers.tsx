import { AnimatedTooltipPreview } from "./AnimatedTooltip";
import { ExpandableCardDemo } from "./ui/ExpandableCard";

export function CSSMembers() {
    const testimonials = [
        {
          quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
          name: "Sarah Chen",
          designation: "Product Manager at TechFlow",
          src: "",
        },
        {
          quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
          name: "Michael Rodriguez",
          designation: "CTO at InnovateSphere",
          src: "",
        },
        {
          quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
          name: "Emily Watson",
          designation: "Operations Director at CloudScale",
          src: "",
        },
        {
          quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
          name: "James Kim",
          designation: "Engineering Lead at DataPro",
          src: "",
        },
        {
          quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
          name: "Lisa Thompson",
          designation: "VP of Technology at FutureNet",
          src: "",
        },
      ];
    return(
        <div className="pb-20 pt-36">
            <ExpandableCardDemo/>
            <AnimatedTooltipPreview/>   
        </div>
        
    );
}
