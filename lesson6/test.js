import axios from 'axios';

async function loadData() {
    try {
        // відбувається саме завантаження даних
        const data = await axios.get('some-url', {});
        console.log(data);
    } catch(error) {
        // ловимо помилки під час завантаження данних
    } finally {
        // після відпрацювання try АБО catch - відпрацьовує finally
    }
}

// async componentDidMount() {
//     try {
//         const data = async loadData(someParams);
//         // відбувається саме завантаження даних
//     } catch(error) {
//         // ловимо помилки під час завантаження данних
//     } finally {
//         // після відпрацювання try АБО catch - відпрацьовує finally
//     }
// }