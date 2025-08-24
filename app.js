
async function getData() {

    try{
            const response = await fetch('https://fakestoreapi.com/products')
    console.log(response);
    
    const data = await response.json()

    console.log(data);
    return data;

    } catch (error)
    {
        console.log(error)
        return []
    }
    
}


async function creat_data () {
    
    const wethaer = await getData()
  
    parent1.innerHTML = "" 
    products.forEach(product => {
  
 
 

        
        });

}
