const DailyComponent = (photo) => {
    return `
    <section class="photoStyle">
        <div class="dateLook">date: ${photo.date}</div><br>
        <section class="ex">
            <div class="button">EXPLANATION... <br>${photo.explanation}</div><br>
        </section>
        <img class="picss" src=${photo.hdurl}><br>
        <img class="hdpicss" src=${photo.url}>
        <section class="info">
            <div>media_type: ${photo.media_type}</div>
            <div>service_version: ${photo.service_version}</div>
            <div>title: ${photo.title}</div>
        </section>
    </section><br>
    `
}

export default DailyComponent

