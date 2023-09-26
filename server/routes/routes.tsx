module.exports = (app) => {
    app.get('/chat-history',(req,res)=>{
        console.log('/chat-history');
    })

    app.get('/chat-list',(req,res)=>{
        console.log('/chat-list');
    })

    app.post('/chat-write',(req,res)=>{
        console.log('/chat-write');
    })
    
}