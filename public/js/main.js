document.querySelector('button').addEventListener('click', getName)
alert('okay')
async function getName(){
    const rapperName = document.querySelector('input').value
    console.log(rapperName)
    try{
        const response = await fetch(`https://rap-api-express-v8w2.vercel.app/api/${rapperName}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('h2').textContent =`Their birthname: ${data.birthname}`
    }
    catch (err) {
        console.log(err)
    }
}
