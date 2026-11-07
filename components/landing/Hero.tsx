
import SetZipCode from "./SetZipCode"
import Grid from "./Grid"


export default function Hero() {

    return (
        <div className="flex flex-col">
            <main className="min-h-screen">
                <SetZipCode />
                <Grid />
            </main>
        </div>
    )
}