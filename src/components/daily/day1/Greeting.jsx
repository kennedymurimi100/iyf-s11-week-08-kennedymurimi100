function Greeting({ name = "Guest", timeOfDay }) {
    const messages = {
        morning: "Good morning",
        afternoon: "Good afternoon",
        evening: "Good evening"
    };

    const message = messages[timeOfDay] || "Hello";

    return (
        <div className="greeting">
            <h2>{message}, {name}!</h2>
        </div>
    );
}

export default Greeting;
