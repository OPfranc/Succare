const connection = require('../database/connection')
const { connect } = require('../routes')

module.exports = {

    async create(req, res) {

        const { 
            name, 
            alias,
            imgsrc,
            propagation,
            activity,
            lastWatering,
            waterNeed,
            sunNeed,
            shadowNeed
            } = req.body

        
        const plantInDatabase = await connection('plants').where('name', name).select('name').first()

        if(!!plantInDatabase)
            return res.status(400).json({ message: `${name} já existe` })

        await connection('plants').insert({
            name, 
            alias,
            imgsrc,
            propagation,
            activity,
            lastWatering,
            waterNeed,
            sunNeed,
            shadowNeed
        })

        return res.status(201).json({ message: `${name} criada` })

    },
    async index(req, res) {

        const plants = await connection('plants').select('*')
        return res.json(plants)
    },

    async delete(req, res) {

        const { name } = req.params

        const plantName = name.replace('%', ' ')


        const plantToDelete = await connection('plants').where('name', plantName).select('name').first()
        
        if(!plantToDelete)
            return res.status(404).json({error: 'plant not found'})
        
        await connection('plants').where('name', plantName).delete()

        return res.status(204).send()
   
    }
}