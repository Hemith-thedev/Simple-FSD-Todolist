export default function Intro(){
    const GenerateGreetings = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
          return "Morning";
        } else if (currentHour < 18) {
          return "Afternoon";
        } else {
          return "Evening";
        }
    }
    return (
        <main>
            <section className="section hero-section">
                <div className="heading">
                    <h1>Good {GenerateGreetings()}</h1>
                </div>
            </section>
        </main>
    )
}