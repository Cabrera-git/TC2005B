function main()
{
    
}

document.addEventListener('submit', getFormvalue)

document.addEventListener('mousemove', (event) => 
{
    const mp = document.getElementById('mousePosition')
    mp.innerHTML = `X: ${event.clientX} \tY: ${event.clientY}`
})

function getFormvalue(event)
{
    const form = document.getElementById('form1')
    const fname = document.querySelector('input[name="fname"]').value
    const lname = document.querySelector('input[name="lname"]').value

    const pr = document.getElementById("pr")
    pr.textContent = `${fname} ${lname}`
    form.appendChild(pr)

    event.preventDefault()
}

function insertRow()
{
    const tb = document.getElementById('sampleTable')
    const rw_l = tb.rows.length
    const cl_l = tb.rows[0].cells.length
    const rw = tb.insertRow(rw_l)
    
    for(let i = 0; i < cl_l; i++)
    {
        let cl = rw.insertCell(i)
        cl.innerHTML = `Row ${rw_l +1} column ${i +1}`
    }
}

function insertColumn()
{
    const tb = document.getElementById('sampleTable')
    const rw_l = tb.rows.length
    const cl_l = tb.rows[0].cells.length

    for(let i = 0; i < rw_l; i++)
    {
        let cl = tb.rows[i].insertCell(cl_l)
        cl.innerHTML = `Row ${i +1} column ${cl_l +1}`
    }
}

function changeContent()
{
    const rw_v = document.getElementById('rw_rpl').value
    const cl_v = document.getElementById('cl_rpl').value
    const txt_v = document.getElementById('txt_rpl').value

    const table = document.getElementById('myTable')

    const rw = table.rows[rw_v -1].cells[cl_v -1].innerHTML = txt_v
}

function addColor()
{
    const dropD = document.getElementById('colorSelect')
    const txt = document.getElementById('color_txt').value
    
    let flag = false
    
    for(let i = 0; i < dropD.options.length; i++)
    {
        if(dropD.options[i].text == txt)
        {
            flag = true    
            break    
        }
    }

    if(flag == false)
    {
        const op = document.createElement("option")
        op.text = txt
        dropD.add(op)
    }
    else
        console.log("El color ya se encuentra dentro de las opciones")
}

function rmvColor()
{
    const dropD = document.getElementById('colorSelect')
    const txt = document.getElementById('color_txt').value
    
    let flag = false
    let count = 0
    
    for(let i = 0; i < dropD.options.length; i++)
    {
        if(dropD.options[i].text == txt)
        {
            flag = true   
            count = i 
            break    
        }
    }

    if(flag == true)
        dropD.remove(count)
    else
        console.log("El color no se encuentra dentro de las opciones")
}

function resize()
{
    const img = document.getElementById('img')
    r1 = (Math.floor(Math.random() * 9) + 3) * 100
    r2 = (Math.floor(Math.random() * 9) + 3) * 100
    img.src = `http://placekitten.com/${r1}/${r2}`
    img.height = r1
    img.width = r2
    img.addEventListener('mousemove',resize)
}