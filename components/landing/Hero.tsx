
import Search from "./Search"
import Grid from "./Grid"


export default function Hero() {

    return (
        <div className="flex flex-col">
            <main className="min-h-screen">
                <Search />
                <Grid />
            </main>
        </div>
    )
}