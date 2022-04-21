function main()
{
    
}

document.addEventListener('mousemove', (event) => 
{
    const mp = document.getElementById('mousePosition')
    mp.innerHTML = `X: ${event.clientX} \tY: ${event.clientY}`
})

                    