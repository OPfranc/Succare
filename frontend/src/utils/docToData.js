export function plantDocToData(doc) {
    return {
        id: doc.id,
        name: doc.data().name,
        alias: doc.data().alias,
        activity: doc.data().activity || '',
        imgsrc: doc.data().imgsrc || 'https://via.placeholder.com/150/FF0000/808080/?text=Down.com',
        propagation: doc.data().propagation || 'n',
        lastWatering: doc.data().lastWatering,
        shadowNeed: doc.data().shadowNeed || 2,
        sunNeed: doc.data().sunNeed || 2,
        waterNeed: doc.data().waterNeed || 2,
    }
}