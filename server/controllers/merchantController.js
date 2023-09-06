const { OpenAI } = require("langchain/llms/openai")
const { FaissStore } = require("langchain/vectorstores/faiss")
const { OpenAIEmbeddings } = require("langchain/embeddings/openai")
const { loadQAStuffChain } = require("langchain/chains")


module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = {messsage: "hello"}

            res.json(thoughts)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)

        }
    },

    async askQuestion(req, res) {
    
        const question = req.body.question + '; this is for the Google Merchant Center'
    
        const llmA = new OpenAI({
            openAIApiKey:process.env.OPENAI_API_KEY,
            modelName: "gpt-3.5-turbo"
        })
        const chainA = loadQAStuffChain(llmA)
        const directory = './'
    
        const fields = {
            verbose: true,
            openAIApiKey: process.env.OPENAI_API_KEY
        }
    
        const loadedVectorStore = await FaissStore.load(
            directory,
            new OpenAIEmbeddings(fields)
        )
        
        const result = await loadedVectorStore.similaritySearch(question, 2)
    
        let sourceLink1 = 'https://support.google.com/merchants/answer/'+result[0].metadata.source.match(/\d+(?=\.txt)/)[0]
        let sourceLink2 = 'https://support.google.com/merchants/answer/'+result[1].metadata.source.match(/\d+(?=\.txt)/)[0]
    
        const resA = await chainA.call({
            input_documents: result,
            question
        })
    
        return res.status(200).json({
            result: resA,
            source: [sourceLink1, sourceLink2]
        })
    }    
}