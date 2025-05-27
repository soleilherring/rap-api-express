document.querySelector('button').addEventListener('click', getName)
// alert('okay')
async function getName(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://rap-api-express-v8w2.vercel.app/api/${rapperName}`)
        const data = await response.json()
        document.querySelector('h2').textContent =data.birthname
    }
    catch (err) {
        console.error.log(err)
    }
}
