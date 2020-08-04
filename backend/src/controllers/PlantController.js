const connection = require('../database/connection')
const { connect } = require('../routes')

module.exports = {
    async create(req, res) {
        const { 
            name, 
            alias: objAlias,
            imgsrc,
            light,
            propagation,
            activity,
            water,
            info 
            } = req.body

            const alias = JSON.stringify(objAlias)

        await connection('plants').insert({
            name, 
            alias,
            imgsrc,
            light,
            propagation,
            activity,
            water,
            info,
        })

        return res.json({ message: `${name} criada` })

    },
    async index(req, res) {

        const plants = await connection('plants').select('*')
        plants.map((plant, index) => {
            console.log(`planta ${(plant.alias)} at index ${index}`);
        })
        return res.json(plants)
    }
}