// 1.- repetition-less character
function  find_chain(g) {
    let x = g.length
    let found = []
    for(let i = 0; i < x; i++){
        let character1 = g[i]
        let flag = false
        for(let j = x-1; j > i; j--){
            let character2 = g[j]
            if(character1 == character2){
                flag = true
                break
            }
        }
        if(flag == false && found.find(element => element == character1) == undefined){
            return character1
        }      
        else
            found.push(character1)
    }
}

// caso 1
console.log("Cadena: ",find_chain("abacddbec"))

// caso 2
console.log("Cadena: ",find_chain("dhcbhdrctb"))

// caso 3
console.log("Cadena: ",find_chain("lamjmlakibi"))


// 2.- bubble sort
function bubbleSort(list)
{
    for(let i = 0; i < list.length; i++)
    {
        for(let j = 0; j < (list.length -i -1); j++)
        {
            if(list[j] > list[j +1])
            {
                let temp = list[j]
                list[j] = list[j +1]
                list[j+1] = temp
            }
        }
    }

    console.log("Bubble sort: ", list)
}

// caso 1
bubbleSort([1,3,5,7,9,2,4,6,8,10])

// caso 2
bubbleSort([23,65,7,24,865,21])

// caso 3
bubbleSort([-1,-34,54,78,23,0,-54])


// 3.- quick sort
function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

function partition(arr, l, h) {
    let i = l - 1
    for(let j = l; j <= h-1; j++){
        if(arr[j] < arr[h]){
            i++
            swap(arr,i,j)
        }
    }
    swap(arr,i+1,h)
    return i + 1
}

function quickSort(arr, l, h) {
    if(l < h){
        let partI = partition(arr,l,h)
        quickSort(arr,l,partI-1)
        quickSort(arr,partI+1,h)
    }
    return arr
}

// caso 1
console.log("Quick sort: ",quickSort([1,4,2,6,5,8],0,5))

// caso 2
console.log("Quick sort: ",quickSort([7,2,78,3,1,8,3,5],0,7))

// caso 3
console.log("Quick sort: ",quickSort([9,1,8,4,6],0,4))


// 4.- reversal
function reverseCopy(list)
{
    let list_reverse = []
    let counter = 0

    for(let i = list.length -1; i >= 0; i--)
    {
        list_reverse[counter] = list[i]
        counter++
    }

    console.log("New reversal: ", list_reverse)
}

function reverseOriginal(list)
{
    let counter = 0

    for(let i = list.length -1; i >= 0; i--)
    {
        if(list.length % 2 == 0)
            if(counter == list.length/2)
                break
        
        if(counter == i)
            break

        let temp = list[counter]
        list[counter] = list[i]
        list[i] = temp
        counter++
    }

    console.log("OG reversal: ", list)
}

// caso 1
reverseCopy([1,2,3,4,5,6,7,8,9])
reverseOriginal([1,2,3,4,5,6,7,8,9])

// caso 2
reverseCopy([23,'a',67,89,0])
reverseOriginal([23,'a',67,89,0])

// caso 3
reverseCopy(['a','b','c','d','e','f'])
reverseOriginal(['a','b','c','d','e','f'])


// 5.- vectors
class vector{
    constructor(x,y,z){
        this.x = x
        this.y = y
        this.z = z
    }
    sum(vector2){
        let v3 = new vector(this.x + vector2.x, 
            this.y + vector2.y, 
            this.z + vector2.z)
        return v3
        
    }
    sub(vector2){
        let v3 = new vector(this.x - vector2.x, 
            this.y - vector2.y, 
            this.z - vector2.z)
        return  v3
    }
    magnitude(){ 
        let x = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2) + Math.pow(this.z,2))
        return x
    }
    unit(){
        let mag = this.magnitude()
        let v3 = new vector(this.x/mag, this.y/mag, this.z/mag)
        return v3
    }
    eMult(n){
        let v3 = new vector(this.x * n, this.y * n, this.z * n)
        return v3
    }
    dot(v2){
        return (this.x * v2.x + this.y * v2.y + this.z * v2.z)
    }
}

const v1 = new vector(1,2,3)
const v2 = new vector(4,5,6)
const v3 = new vector(3,4,0)
const v4 = new vector(-4,3,2)

// caso 1
console.log(v1.sum(v2))
console.log(v1.sub(v2))
console.log(v1.magnitude())
console.log(v1.unit())
console.log(v1.eMult(3))

// caso 2
console.log(v1.sum(v3))
console.log(v4.sub(v3))
console.log(v2.magnitude())
console.log(v2.unit())
console.log(v2.eMult(5))

// caso 3
console.log(v3.sum(v4))
console.log(v2.sub(v4))
console.log(v3.magnitude())
console.log(v3.unit())
console.log(v3.eMult(7))


// 6.- maximum common divisor
function mcd(a,b)
{
    let div_a = []
    let div_b = []
    let mcd = 0

    for(let i = 1; i < a; i++)
        if(a % i == 0)
            div_a.push(i)

    for(let i = 1; i < b; i++)
        if(b % i == 0)
            div_b.push(i)

    for(let i = 0; i < div_a.length; i++)
    {
        for(let j = 0; j < div_b.length; j++)
        {
            if(div_a[i] == div_b[j])
                mcd = div_a[i]
        }
    }

    console.log("MCD: ",mcd)
}

// caso 1
mcd(6,24)

// caso 2
mcd(56,78)

// caso 3
mcd(243,4362)


// 7.-
function orthogonal(v1,v2){
    if(v1.dot(v2) == 0)
        return true
    else
        return false
}

// caso 1
console.log("Orthogonal: ",orthogonal(v1,v2))

// caso 2
console.log("Orthogonal: ",orthogonal(v2,v3))

// caso 3
console.log("Orthogonal: ",orthogonal(v3,v4))


// 8.- hacker speak
function hackerManz(str)
{
    let ogStr = ['i','z','e','a','s','t','o']
    let nwStr = ['1','2','3','4','5','7','0']

    for(let i = 0; i< ogStr.length; i++)
        str = str.replaceAll(ogStr[i],nwStr[i])

    console.log("Hacker speak: ", str)
}

// caso 1
hackerManz("Javascript es divertido")

// caso 2
hackerManz("If you close this window, I cease to exist")

// caso 3
hackerManz("Did you know that to kill a squirrel from falling it would have to fall roughly 4800 miles? This is in order to get it to starve to death, since they can survive terminal velocity.")

// 9.-
function factorize(n){
    let arr = []
    for(let i = 0; i <= n; i++){
        let x = n / i
        if(Number.isInteger(x))
            arr.push(i)
    }
    return arr
}

// caso 1
console.log("Factorizar: ",factorize(12))

// caso 2
console.log("Factorizar: ",factorize(654))

// caso 3
console.log("Factorizar: ",factorize(2308))


// 10.- dupe removal
function removeDupes(list)
{
    let no_dupes_set = new Set(list)
    let no_dupes = Array.from(no_dupes_set)

    console.log("No dupes: ", no_dupes)
}

// caso 1
removeDupes(['a','a',1,3,6,3,6,7,5,8,9,'b'])

// caso 2
removeDupes([1,2,3,4,5,6,6,6,6,7,7,8,9,0,0])

// caso 3
removeDupes([1,3,5,7,9,'a','c','e','g','i',9,7,5,3,2])