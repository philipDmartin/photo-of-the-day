import { usePhoto } from "./dailyDataProvider.js"
import DailyComponent from "./daily.js"

const contentElement = document.querySelector(".content")

const DailyListComponent = () => {
    const pic = usePhoto()

    contentElement.innerHTML += `
    <section class="dailyList">
    ${
        pic.map(    
            (currentPhoto) => {
                return DailyComponent(currentPhoto)
            }
        ).join("")
        }
    </section>
    `
}

export default DailyListComponent

