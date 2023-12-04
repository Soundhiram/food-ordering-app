import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    Curious about the industry in general? I can share some interesting facts and trends about food delivery apps, like their growing popularity, impact on restaurants, and innovative features.
Looking to build your own food delivery app? I can brainstorm ideas for unique features, target audience, and monetization strategies.
Having trouble choosing the right app for your next meal? I can compare popular options like Zomato, Swiggy, and DoorDash, based on your preferences for selection, delivery speed, or special offers.
Experiencing a specific issue with a food delivery app? I can help you troubleshoot it or find the best way to contact customer support.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}